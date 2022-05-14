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

    const gameArray = ['Chess', 'Checkers', 'Uno', 'Connect4', 'Farkle', 'Spades', 'Yahtzee', 'Crazy 8s'];

    const getGame = () => {
        const newGame = gameArray[Math.floor(Math.random() * gameArray.length)];
        return newGame
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
                                    <p>Top Game Played: {getGame()}</p>
                                </button>
                            </li>
                        ))}
                        <li className='playerLi'>
                            <button className='userBtn'>
                                <h4>Username: Paul Cwik</h4>
                                <p>Top Game Played: Checkers</p>
                            </button>
                        </li>
                        <li className='playerLi'>
                            <button className='userBtn'>
                                <h4>Username: Gary Almes</h4>
                                <p>Top Game Played: Yahtzee</p>
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
