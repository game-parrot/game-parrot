import { useState, useEffect } from "react"
import Navbar from '../components/Navbar'
import DashMain from '../components/DashMain'
import '../styles/dashboard.css';

const Dashboard = (props) => {

  return (
    <>
      <Navbar />
      <DashMain />
    </>
  )
}

export default Dashboard