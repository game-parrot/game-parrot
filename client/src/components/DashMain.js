import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';
import FriendsList from './FriendsList'
import Chatroom from './Chatroom'
// import GameBar from './GameBar';

function DashMain() {
    return (
        <>
            {/* <GameBar /> */}
            <div className='dashMainCont'>
                <FriendsList />
                <Chatroom />
            </div>
            
        </>
    )
}

export default DashMain;
