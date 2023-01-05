import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Scheduling from "./pages/Scheduling";
import Services from "./pages/Services";
import PetForm from "./pages/PetForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Services />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/petform" element={<PetForm />} />
      </Routes>
    </div>
  );
}

export default App;
