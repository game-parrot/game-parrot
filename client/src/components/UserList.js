import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';
// import TestData from 'test';

function UserList() {
    return (
        <>
            <div className='playersCont'>
                <h2>List of Players:</h2>
                <div className='userContainer'>
                    <ul className='playerUl'>
                        <li className='playerLi'>
                            <button className='userBtn'>
                                <h4>Username: Andrew</h4>
                                <p>Games played: Chess, Checkers, Uno</p>
                            </button>
                        </li>
                        <li className='playerLi'>
                            <button className='userBtn'>
                                <h4>Username: Eugene</h4>
                                <p>Games played: Chess, Connect 4, Yahtzee</p>
                            </button>
                        </li>
                        {/* {TestData.map(testdata => (
                            <li>
                                <button className='userBtn'>
                                    <h4>Username: {testdata.username}</h4>
                                    <p>Games played:{testdata.games}</p>
                                </button>
                            </li>
                        ))} */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default UserList;
