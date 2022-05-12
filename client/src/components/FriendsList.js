import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';

function FriendsList() {
    return (
        <>
            <div className='gameroomFrame'>
                <iframe src='https://buddyboardgames.com/connect4' title='games' className='iframe'></iframe>
            </div>
        </>
    )
}

export default FriendsList;
