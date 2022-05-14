import { useState, useEffect } from "react"
import '../styles/landingpage.css';
import '../styles/signup-login.css';
import SignupLoginHeader from '../components/SignupLoginHeader';
import Login from '../components/Login';

//display signup when signup button is clicked

const LandingPage = (props) => {

  return (
    <>
      <SignupLoginHeader />
      <Login />
    </>
  )
}

export default LandingPage