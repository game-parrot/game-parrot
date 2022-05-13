import { useState, useEffect } from "react"
import '../styles/landingpage.css';
import '../styles/signup-login.css';
import SignupLoginHeader from '../components/SignupLoginHeader';
import Signup from '../components/Signup';

const LandingPage = (props) => {

  return (
    <>
      <SignupLoginHeader />
      <Signup />
    </>
  )
}

export default LandingPage