import React from "react"
import { Container } from "react-bootstrap"

const AUTH_URL =
"https://connect.squareupsandbox.com/oauth2/authorize?client_id=sandbox-sq0idb-4oFNbJJkvjIU9UiyQXmCkg&scope=MERCHANT_PROFILE_READ+PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS+PAYMENTS_WRITE+PAYMENTS_READ"

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Let's fucking go to Sqaure
      </a>
    </Container>
  )
};