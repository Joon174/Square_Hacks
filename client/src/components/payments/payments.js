import React, { useEffect, useState } from "react";
import { ColorButton, useStyles } from "../button/button";
import swordLogo from "./sword.png";
import squareLogo from "./square.png";
import "./payments.css";
import { Client, Enviroment } from "square";

const APPLICATION_ID = "sandbox-sq0idb-N5yStPjdSFWIRKnrQsUJlA";
const LOCATION_ID = "LPD9VZ1C649HF";

const paymentRequestMock = {
  countryCode: "US",
  currencyCode: "USD",
  lineItems: [
    { amount: "1.23", label: "Cat", pending: false },
    { amount: "4.56", label: "Dog", pending: false },
  ],
  requestBillingContact: true,
  requestShippingContact: true,
  shippingContact: {
    addressLines: ["1 Test St", ""],
    city: "San Francisco",
    countryCode: "US",
    email: "test@squareup.com",
    familyName: "First Name",
    givenName: "Last Name",
    phone: "+12345678910",
    postalCode: "11111",
    state: "CA",
  },
  shippingOptions: [
    { amount: "0.00", id: "FREE", label: "Free" },
    { amount: "9.99", id: "XP", label: "Express" },
  ],
  total: { amount: "5.79", label: "Total", pending: false },
};

// This function tokenizes a payment method.
// The ‘error’ thrown from this async function denotes a failed tokenization,
// which is due to buyer error (such as an expired card).
export async function tokenizePaymentMethod(paymentMethod) {
  const tokenResult = await paymentMethod.tokenize();
  // A list of token statuses can be found here:
  // https://developer.squareup.com/reference/sdks/web/payments/enums/TokenStatus
  if (tokenResult.status === "OK") {
    return tokenResult.token;
  }
  let errorMessage = `Tokenization failed-status: ${tokenResult.status}`;
  if (tokenResult.errors) {
    errorMessage += ` and errors: ${JSON.stringify(tokenResult.errors)}`;
  }
  throw new Error(errorMessage);
}

function Payments(props) {
  const [loaded, setLoaded] = useState(false);
  const [squarePayments, setSquarePayments] = useState(undefined);
  const [squareCard, setSquareCard] = useState(undefined);
  const [applePay, setApplePay] = useState(undefined);
  const [googlePay, setGooglePay] = useState(undefined);
  const [isSubmitting, setSubmitting] = useState(false);
  const [validFields, setValidFields] = useState({
    cardNumber: false,
    cvv: false,
    expirationDate: false,
    postalCode: false,
  });
  const isCardFieldsValid = Object.values(validFields).every((v) => v);

  // Add Square script to the page
  useEffect(() => {
    const existingScript = document.getElementById("webPayment");
    if (existingScript) setLoaded(true);
    else {
      const script = document.createElement("script");
      script.src = "https://sandbox.web.squarecdn.com/v1/square.js";
      script.id = "webPayment";
      document.body.appendChild(script);
      script.onload = () => {
        setLoaded(true);
      };
    }
  }, []); //Effect to be executed only on first render, if passed an empty array.

  // Instantiate Square payments and store the object in state
  useEffect(() => {
    if (loaded && !squarePayments) {
      if (!window?.Square) {
        console.error("Square.js failed to load properly");
        return;
      }
      setSquarePayments(window.Square?.payments(APPLICATION_ID, LOCATION_ID));
    }
  }, [loaded]); //Effect invoked when the value for "loaded" changes

  async function addPayment(token) {
    const body = JSON.stringify({
      locationId,
      sourceId: token,
      orderId: orderId,
    });

    const paymentResponse = await fetch("/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (paymentResponse.ok) {
      return paymentResponse.json();
    }

    const errorBody = await paymentResponse.text();
    throw new Error(errorBody);
  }

  // Handle the form submission
  const handlePaymentMethodSubmission = async (paymentMethod) => {
    const isCard = paymentMethod?.element?.id === "card-container";
    if (isCard && !isCardFieldsValid) return;
    if (!isSubmitting) {
      // Disable the submit button as we await tokenization and make a
      // payment request
      if (isCard) setSubmitting(true);
      try {
        const token = await tokenizePaymentMethod(paymentMethod);
        const paymentResults = await addPayment(token);
        console.log("TOKEN", token);
      } catch (error) {
        console.error("FAILURE", error);
      } finally {
        isCard && setSubmitting(false);
      }
    }
  };

  // Set each card field validity on various events
  const handleCardEvents = ({ detail }) => {
    if (detail) {
      const { currentState: { isCompletelyValid } = {}, field } = detail;
      if (field) {
        setValidFields((prevState) => ({
          ...prevState,
          [field]: isCompletelyValid,
        }));
      }
    }
  };

  const initializeApplePay = async () => {
    const paymentRequest = squarePayments.paymentRequest(paymentRequestMock);
    const aPay = await squarePayments.applePay(paymentRequest);
    setApplePay(aPay);
    // Note: Apple pay does not need to be "attached"
  };

  const attachGooglePay = (gPay) => {
    const googlePayObject = gPay || googlePay;
    googlePayObject.attach("#google-pay", {
      buttonColor: "white",
      buttonSizeMode: "fill",
      buttonType: "long",
    });
  };

  const initializeGooglePay = async () => {
    const paymentRequest = squarePayments.paymentRequest(paymentRequestMock);

    // We *MUST* return a PaymentRequestUpdate from shipping contact/option
    // event listeners below
    const paymentRequestUpdate = {
      // error: "There was an error of some kind",
      // shippingErrors: {
      //   addressLines: "Error with the address lines",
      //   city: "Error with the City",
      //   country: "Error with the Country",
      //   postalCode: "Error with the Postal Code",
      //   state: "Error with the state",
      // },
      lineItems: paymentRequestMock.lineItems,
      shippingOption: paymentRequestMock.shippingOptions,
      total: paymentRequestMock.total,
    };

    // Listener for shipping address changes
    paymentRequest.addEventListener("shippingcontactchanged", (contact) => {
      console.log({ contact });

      return paymentRequestUpdate;
    });
    // Listener for shipping option changes
    paymentRequest.addEventListener("shippingoptionchanged", (option) => {
      console.log({ option });

      return paymentRequestUpdate;
    });

    const gPay = await squarePayments.googlePay(paymentRequest);
    setGooglePay(gPay);
    attachGooglePay(gPay);
  };

  // Attach the Square card to our container and setup event listeners
  const attachCard = (card) => {
    // We pass in the card object during initialization, but re-use it from
    // state for normal re-renders
    const cardObject = card || squareCard;
    cardObject.attach("#card-container");
    // Listeners: https://developer.squareup.com/reference/sdks/web/payments/objects/Card#Card.addEventListener
    cardObject.addEventListener("submit", () =>
      handlePaymentMethodSubmission(cardObject)
    );
    cardObject.addEventListener("focusClassAdded", handleCardEvents);
    cardObject.addEventListener("focusClassRemoved", handleCardEvents);
    cardObject.addEventListener("errorClassAdded", handleCardEvents);
    cardObject.addEventListener("errorClassRemoved", handleCardEvents);
    cardObject.addEventListener("cardBrandChanged", handleCardEvents);
    cardObject.addEventListener("postalCodeChanged", handleCardEvents);
  };

  const initializeSquareCard = async () => {
    const card = await squarePayments.card();
    setSquareCard(card);
    attachCard(card);
  };

  // Handle Square payment methods initialization and re-attachment
  useEffect(() => {
    if (squarePayments) {
      if (!squareCard) initializeSquareCard();
      if (!applePay) initializeApplePay();
      if (!googlePay) initializeGooglePay();
      else attachGooglePay();
    }
    // Otherwise, we destroy the objects and reset state
    else {
      if (squareCard) {
        squareCard.destroy();
        setSquareCard(undefined);
      }
      if (applePay) {
        applePay.destroy();
        setApplePay(undefined);
      }
      if (googlePay) {
        googlePay.destroy();
        setGooglePay(undefined);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [squarePayments]);

  // Some quick button styles
  let cardButtonStyles = {
    backgroundColor: "#ddd",
    color: "white",
    padding: 16,
    fontFamily: "sans-serif",
    fontSize: "1rem",
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 0,
  };
  if (isCardFieldsValid) {
    cardButtonStyles = {
      ...cardButtonStyles,
      backgroundColor: "black",
    };
  }

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {/* Apple Pay will not work with the demo Square IDs used in this file,
      but it will if you have a valid square account with Apple Pay configured
      correctly. If so, change the IDs to your sandbox and try it out */}
      {
        <div
          id="apple-pay"
          onClick={() => handlePaymentMethodSubmission(applePay)}
          style={{
            backgroundColor: "white",
            padding: 11,
            borderColor: "#bbb",
            borderWidth: 1,
            boxShadow: "0px 2px 4px #00000033",
            fontFamily: "sans-serif",
            fontSize: "0.9rem",
            marginBottom: 16,
            borderRadius: 3,
          }}
        >
          <span>Buy with Apple Pay</span>
        </div>
      }
      <div style={{ marginBottom: 24 }}>
        <div
          id="google-pay"
          onClick={() => handlePaymentMethodSubmission(googlePay)}
        />
      </div>
      <form id="payment-form">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div id="card-container"></div>
          <button
            id="card-button"
            type="button"
            style={cardButtonStyles}
            disabled={!isCardFieldsValid || isSubmitting}
            onClick={() => handlePaymentMethodSubmission(squareCard)}
          >
            Pay {props.paymentAmount}
          </button>
        </div>
      </form>
      <div id="payment-status-container"></div>
    </div>
  );
}

export default Payments;
