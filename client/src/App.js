import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Main from "./components/Main"

function App() {
  return (
    <div>
    <Header />
    <Main />
    </div>
  );
}

export default App;
