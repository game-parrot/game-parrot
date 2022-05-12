import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';
import { useState } from "react";

function Signup() {

    // function UserForm() {
    //     const defForm = { username: "", password: "" }
    //     const [formData, setFormData] = useState({
    //         username: "",
    //         password: ""
    //     });

    //     const handleChange = (event) => {
    //         setFormData({ ...formData, [event.target.username]: event.target.value });
    //     };

    //     const handleSubmit = (event) => {
    //         // prevents the submit button from refreshing the page
    //         event.preventDefault();
    //         console.log(formData);
    //         setFormData({ username: "", password: "" });
    //         <form onSubmit={handleSubmit} />
    //     }
    // };

    return (
        <>
            <div className="SignLogCont test">
                <div className="card border-info mb-3">
                    <div className="card-header">Sign Up</div>
                    <div className="card-body text-info">
                        <h5 className="card-title">Enter Your Signup Info</h5>
                        <p className="card-text">
                            <div>
                                <form>

                                    <div className="form-group row">
                                        <label for="staticEmail" className="col-sm-2 col-form-label">Username</label>
                                        <div className="col-sm-10">
                                            <input
                                                // onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                type="text"
                                                className="form-control"
                                                id="inputUsername"
                                                value="" //{formData.username}
                                            // onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-sm-10">
                                            <input
                                                // onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                type="password"
                                                className="form-control"
                                                id="inputPassword" placeholder="Password"
                                                value="" //{formData.password}
                                            // onChange = {handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Signup</button>
                                    </div>
                                </form>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;