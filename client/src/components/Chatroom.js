import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';

function Chatroom() {
    return (
        <>
            <div className='chatroomFrame'>
                <iframe src='https://game-parrot-chatroom.herokuapp.com/' title='games' className='iframe'></iframe>
            </div>
        </>
    )
}

export default Chatroom;
