import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import UserProvider from "./contexts/UserContext"
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";

function App() {

  return (
    <div>
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/home' element={<HomePage />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
