import React, { useState } from "react";
import Home from "../pages/Home";
import Login from "../p/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import PetForm from "./PetForm";
import ScheduleForm from "./ScheduleForm";
import Services from "../pages/Services";
import "../../src/App.css";
import { useQuery } from "@apollo/client";
import GGlogo from "../emmsHTMLGraveyard/GGLogo.PNG";
import auth from "../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    auth.logout();
  };
};

function Header() {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    if (currentPage === "Signup") {
      return <Signup />;
    }
    if (currentPage === "Profile") {
      return <Profile />;
    }
    if (currentPage === "PetForm") {
      return <PetForm />;
    }
    if (currentPage === "ScheduleForm") {
      return <ScheduleForm />;
    }
    if (currentPage === "Scheduling") {
      return <Scheduling />;
    }
    return <Services />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="navBar">
      <img src={GGlogo} alt="GOGROOM logo" className="logo"></img>

      <div>
        {auth.loggedIn() ? (
          <>
            <span>Hey there, {auth.getProfile().data.username}!</span>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-lg btn-info m-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-lg btn-light m-2" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>

      <section className="p-menu1">
        <nav id="navbar" className="navigation" role="navigation">
          <input id="toggle1" type="checkbox" />
          <label className="hamburger1" for="toggle1">
            <div className="top"></div>
            <div className="meat"></div>
            <div className="bottom"></div>
          </label>

          <nav className="menu1">
            <a
              className={
                currentPage === "Home"
                  ? "nav-link active link1"
                  : "nav-link link 1"
              }
              href="#Home"
              onClick={() => handlePageChange("Home")}
            >
              Home
            </a>
            <a
              href="#Scheduling"
              onClick={() => handlePageChange("Scheduling")}
              className={
                currentPage === "Scheduling"
                  ? "nav-link active link1"
                  : "nav-link link1"
              }
            >
              Scheduling
            </a>
            <a
              href="#Services"
              onClick={() => handlePageChange("Services")}
              className={
                currentPage === "Services"
                  ? "nav-link active lin1 kbutton-nav"
                  : "nav-link lin1 kbutton-nav"
              }
            >
              Services
            </a>
          </nav>
        </nav>
      </section>
    </div>
  );
}

export default Header;
