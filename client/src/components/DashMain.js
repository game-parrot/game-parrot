import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';
import FriendsList from './FriendsList'
import Chatroom from './Chatroom'
import GameBar from './GameBar';

function DashMain() {
    return (
        <>
            <div className='dashMainCont'>
                <FriendsList />
                <Chatroom />
            </div>
            <GameBar />
        </>
    )
}

export default DashMain;
