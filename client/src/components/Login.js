import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';
import { useState } from "react";

function Login() {

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
            <div class="SignLogCont test">
                <div class="card border-info mb-3">
                    <div class="card-header">Login</div>
                    <div class="card-body text-info">
                        <h5 class="card-title">Enter Login Info</h5>
                        <p class="card-text">
                            <div>
                                <form>

                                    <div class="form-group row">
                                        <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
                                        <div class="col-sm-10">
                                            <input
                                                // onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                type="text"
                                                class="form-control"
                                                id="inputUsername"
                                                value="" //{formData.username}
                                            // onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                        <div class="col-sm-10">
                                            <input
                                                // onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                type="password"
                                                class="form-control"
                                                id="inputPassword" placeholder="Password"
                                                value="" //{formData.password}
                                            // onChange = {handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary">Login</button>
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

export default Login;