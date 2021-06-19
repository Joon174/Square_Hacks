import React from "react";
import SignUp from "../components/signup/signup";
import Navbar from "../components/navbar/navbar";
import "./signUpPage.css";

const SignUpPage = () => {
  //dummy tournament obj
  const tournament = {
    name: "SwordFighting",
    description: "Manly fight of swords of all sizes",
    prize: "The Shealth of Justice",
    participation_cost: 69,
    location: "Uranus",
    num_participants: 8,
    id: "123",
    hasStarted: false,
  };

  return (
    <div className="page">
      <Navbar />
      <SignUp tournament={tournament} />
    </div>
  );
};

export default SignUpPage;
