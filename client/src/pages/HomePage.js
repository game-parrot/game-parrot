import { useState, useEffect } from "react";
import '../styles/homepage.css';
import Navbar from '../components/Navbar';
import UserList from '../components/UserList';
import Carousel from '../components/Carousel';

const HomePage = (props) => {

  return (
    <>
      <Navbar />
      <div className="homepageBody">
        <UserList />
        <Carousel />
      </div>
    </>
  )
}

export default HomePage;