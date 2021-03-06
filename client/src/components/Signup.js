import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom"

function Signup() {

    const defForm = { username: "", password: "" }
    const [formData, setFormData] = useState(defForm)

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const query = await fetch("/api/users", {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await query.json()
        navigate("/home")
    }


    return (
        <>
            <div className="SignLogCont test">
                <div className="card border-info mb-3 signLogCard">
                    <div className="card-header">Sign Up</div>
                    <div className="card-body text-info">
                        <h5 className="card-title">Enter Your Signup Info</h5>
                        <div className="card-text">
                            <div>
                                <form>

                                    <div className="form-group row">
                                        <label for="staticEmail" className="col-sm-2 col-form-label"></label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Username"
                                                className="form-control cardInput"
                                                value={formData.username}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputPassword" className="col-sm-2 col-form-label"></label>
                                        <div className="col-sm-10">
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control cardInput"
                                                id="inputPassword" placeholder="Password"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button
                                            className="btn btn-primary"
                                            onClick={handleFormSubmit}
                                        >
                                            Signup
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;