import { useState, useEffect } from "react"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';
import { Link } from 'react-router-dom'

//display signup when signup button is clicked

const SignupLoginHeader = () => {

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"><img className='gameparrotImg' src='https://cdn.discordapp.com/attachments/972165484269146136/973606897804537896/gameparrot.png' alt='Game Parrot'></img></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end navbarNav" id="navbarNavDropdown">
                    <ul className="navbar-nav navbarUl">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#"></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    </>
  )
}

export default SignupLoginHeader;

                