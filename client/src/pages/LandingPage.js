import { useState, useEffect } from "react"
import '../styles/landingpage.css';
import LandingHeader from '../components/LandingHeader';
import LandingMain from '../components/LandingMain';
import Signup from '../components/Signup';
import Form from "../components/Form";

//display signup when signup button is clicked

const LandingPage = (props) => {

  return (
    <>
      <LandingHeader />
      <LandingMain />
      <Form />
    </>
  )
}

export default LandingPage