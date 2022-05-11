import { useState, useEffect } from "react"
import Navbar from '../components/Navbar'
import UserList from '../components/UserList'
import Carousel from '../components/Carousel'

const HomePage = (props) => {

  return (
    <>
      <Navbar />
      <UserList />
      <Carousel />
    </>
  )
}

export default HomePage