import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';
import { useState, useEffect } from "react";

function UserList() {

    const [ userData, setUserData ] = useState([])
    const [ readyToRender, setReadyToRender ] = useState(false)

    const getAllUsers = async (e) => {
        const query = await fetch("/api/users")
        const result = await query.json()
        console.log(result)
        setUserData(result)
        setReadyToRender(true)
    }

    useEffect( () => {
        getAllUsers()
    }, [])

    return (
        <>
        {/* {readyToRender === true && ( */}
            <div className='playersCont'>
                <h2>List of Players:</h2>
                <div className='userContainer'>
                    <ul className='playerUl'>
                        {userData.map(users => (
                            <li className='playerLi' key={users._id}>
                                <button className='userBtn'>
                                    <h4>Username: {users.username}</h4>
                                    <div>Games played:{users.games.map( game => {
                                        <p>{game.game_title}</p>
                                    })}</div>
                                </button>
                            </li>
                        ))}
                        <li className='playerLi'>
                            <button className='userBtn'>
                                <h4>Username: Paul Cwik</h4>
                                <p>Games played: Chess, Checkers, Uno</p>
                            </button>
                        </li>
                        <li className='playerLi'>
                            <button className='userBtn'>
                                <h4>Username: Gary Almes</h4>
                                <p>Games played: Chess, Connect 4, Yahtzee</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        {/* )} */}
        </>
    )
}

export default UserList;
