import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';

function LandingHeader() {
    return (
        <>
            <header>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/"><img className='gameparrotImg' src='https://cdn.discordapp.com/attachments/972165484269146136/973606897804537896/gameparrot.png' alt='Game Parrot'></img></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sign Up</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container jumbo">
                        <h1 className="display-4">Game Parrot</h1>
                        <p className="lead">Get Connected!</p>
                    </div>
                </div>
            </header>
        </>

    )
}

export default LandingHeader;
