import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';

function Signup() {
    return (
        <>
            <div class="test">
                <div class="card border-info mb-3">
                    <div class="card-header">Sign Up</div>
                    <div class="card-body text-info">
                        <h5 class="card-title">Info card title</h5>
                        <p class="card-text">
                            <div>
                                <form>
                                    <div class="form-group row">
                                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputEmail" value="email@example.com" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                        <div class="col-sm-10">
                                            <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                                        </div>
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