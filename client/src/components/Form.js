import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';
import { useState } from "react";

function Form() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setPassword(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(`Hello ${userName}`);
        console.log(password);
        setUserName('');
        setPassword('');
    };

    return (
        <div>
            <p>Hello {userName}</p>
            <form className="form">
                <input
                    value={userName}
                    name="userName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="username"
                />
                <input
                    value={password}
                    name="password"
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Password"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Form;