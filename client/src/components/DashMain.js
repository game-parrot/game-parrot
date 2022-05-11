import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';
import FriendsList from './FriendsList'
import Chatroom from './Chatroom'

function DashMain() {
    return (
        <>
           <FriendsList />
           <Chatroom />
        </>
    )
}

export default DashMain;
