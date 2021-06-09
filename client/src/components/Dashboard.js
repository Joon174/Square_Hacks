import React from "react";
import { useState, useEffect } from "react"
import useAuth from "./useAuth"
import { Container, Form } from "react-bootstrap"
const {Client} = require('square');


export default function Dashboard({ code }) {
  const accessToken = useAuth(code); 
  const environment = "sandbox";


  return (
    <div>
      {/* <Products/> */}
      {code}

    </div>
  );
}
