import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";

import "./App.css";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// need to create these pages
// import Scheduling from "./pages/Scheduling";
// import Services from "./pages/Services";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/:profileId" element={<Profile />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/scheduling" element={<Scheduling />} /> */}
      </Routes>
    </div>
  );
}

export default App;
