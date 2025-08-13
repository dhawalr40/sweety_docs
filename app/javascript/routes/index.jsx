import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login"
// import Signup from "./components/Signup";
import Dashboard from "../components/Dashboard";

export default (
    <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            {/*<Route path="/signup" element={<Signup />} />*/}
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
);