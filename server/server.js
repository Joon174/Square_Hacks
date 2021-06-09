const dotenv = require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const { ApiError, Client, Environment } = require('square');
const { PORT, SQ_ENVIRONMENT, SQ_APPLICATION_ID, SQ_APPLICATION_SECRET } = process.env;


const port = "3001";

const scopes = [
    "ITEMS_READ",
    "MERCHANT_PROFILE_READ",
    "PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS",
    "PAYMENTS_WRITE",
    "PAYMENTS_READ"
];

const client = new Client({
  environment: "sandbox"
});

app.post('/login', async (req, res) => {
    const requestParams = req.body;
    console.log(requestParams.code);
  
    // Charge the customer's card
    const requestBody = {
        clientId: SQ_APPLICATION_ID,
        clientSecret: SQ_APPLICATION_SECRET,
        code: requestParams.code,
        grantType: 'authorization_code',
        scopes: scopes
    };
  
    try {
        const response = await client.oAuthApi.obtainToken(requestBody);
        console.log(response.result);
        res.json(response.data)
      } 
      catch(error) {
      console.log(error);
      }
    }
);

// app.post("/refresh", (req, res) => {
  
// })

app.listen(port)