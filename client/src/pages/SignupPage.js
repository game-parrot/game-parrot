import { useState, useEffect } from "react"
import '../styles/landingpage.css';
import '../styles/signup-login.css';
import SignupLoginHeader from '../components/SignupLoginHeader';
import Signup from '../components/Signup';

//display signup when signup button is clicked

const LandingPage = (props) => {

  return (
    <>
      <SignupLoginHeader />
      <Signup />
    </>
  )
}

export default LandingPage