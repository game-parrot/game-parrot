import { useState, useEffect } from "react"
import Navbar from '../components/Navbar'
import DashMain from '../components/DashMain'
import { useUser } from "../contexts/UserContext"
import '../styles/dashboard.css';
import UserList from "../components/UserList";

const Dashboard = (props) => {
  const usrMgr = useUser()
  console.log(usrMgr)

  const addAsFriend = (friendId) => {
    // api/{userMgr._id}/friend/friendId
  }

  useEffect( () => {
    if( !usrMgr ){
      // window.location.href = "/login"
    }
  }, [])

  return (
    <>
      <Navbar />
      <DashMain />


      { UserList.map( user => (
        <div>
          <p>{user.name}</p>
          { user.games.map( game => (
            <p>{game.title}</p>
          ))}
          <p><button onClick={() => addAsFriend(user._id)}>Add As Friend</button></p>
        </div>
      ))}
    </>
  )
}

export default Dashboard