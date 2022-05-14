import { useState, useEffect } from "react"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';

//display signup when signup button is clicked

const SignupLoginHeader = () => {

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/"><img className='gameparrotImg' src='https://cdn.discordapp.com/attachments/972165484269146136/973606897804537896/gameparrot.png' alt='Game Parrot'></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end navbarNav" id="navbarNavDropdown">
                    <ul className="navbar-nav navbarUl">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">Signup</a>
                        </li>
                    </ul>
                </div>
            </nav>
    </>
  )
}

export default SignupLoginHeader;

                