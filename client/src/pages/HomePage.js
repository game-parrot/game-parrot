import { useState, useEffect } from "react";
import '../styles/homepage.css';
import Navbar from '../components/Navbar';
import UserList from '../components/UserList';
import Carousel from '../components/Carousel';
// import { useUser } from "../contexts/UserContext"

const HomePage = (props) => {

  // const usrMgr = useUser()
  // console.log(usrMgr)

  // // const addAsFriend = (friendId) => {
  // //   // api/{userMgr._id}/friend/friendId
  // // }

  // useEffect( () => {
  //   if( !usrMgr ){
  //     // window.location.href = "/login"
  //   }
  // }, [])

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