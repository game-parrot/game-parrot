import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import cookie from "js-cookie"

function Login() {

    // Login authentication does not work rn

    const defForm = { username: "", password: "" }
    const [formData, setFormData] = useState(defForm)

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()

    const handleFormSubmit = async (e) => {
        // e.preventDefault()
        // console.log("here")
        // const query = await fetch("/api/users/auth", {
        //     method: "post",
        //     body: JSON.stringify(formData),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        // const result = await query.json()

        // if (result && !result.err && result.data && result.data.token) {
        //     cookie.set("auth-token", result.data.token, { expires: 3 })
        // }
        navigate("/home")
    }

    return (
        <>
            <div className="SignLogCont test">
                <div className="card border-info mb-3 signLogCard">
                    <div className="card-header">Login</div>
                    <div className="card-body text-info">
                        <h5 className="card-title">Enter Login Info</h5>
                        <div className="card-text">
                            <div>
                                <form>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label"></label>
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
                                        <label className="col-sm-2 col-form-label"></label>
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
                                        <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Login</button>
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

export default Login;