import React from "react";
import "./paymentPage.css";
import PaymentForm from "../components/paymentform/paymentform";

const PaymentPage = () => {
  return (
    <div className="paypage-wrapper">
      <PaymentForm />
      {/* <Summary /> */}
      {/* <Cart /> */}
    </div>
  );
};

export default PaymentPage;
