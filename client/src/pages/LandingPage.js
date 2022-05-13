import { useState, useEffect } from "react"
import '../styles/landingpage.css';
import LandingHeader from '../components/LandingHeader';
import LandingMain from '../components/LandingMain';

//display signup when signup button is clicked

const LandingPage = () => {

  return (
    <>
      <LandingHeader />
      <LandingMain />
    </>
  )
}

export default LandingPage