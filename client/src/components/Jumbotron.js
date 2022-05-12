import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';

function Jumbotron() {

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container jumbo">
                    <h1 className="display-4">Game Parrot</h1>
                    <p className="lead">Get Connected!</p>
                </div>
            </div>
        </>
    )
}



export default Jumbotron;