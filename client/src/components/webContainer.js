import React, { useState } from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Services from "../pages/Services";
import "../../src/App.css";
import Auth from "../utils/auth.js";
import Scheduling from "../pages/Scheduling";
import { useQuery } from "@apollo/client";
import "../emmsHTMLGraveyard/garbage.css";
import { Link } from "react-router-dom";

import GGlogo from "../emmsHTMLGraveyard/GGLogo.PNG"
// const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   }};
function Header() {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];
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
    if (currentPage === "Scheduling") {
      return <Scheduling />;
    }
    return <Services />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="navBar">
      <img src={GGlogo} alt="GOGROOM logo"></img>

      <div>
        {Auth.loggedIn() ? (
          <>
            <span>Hey there, {Auth.getProfile().data.username}!</span>
            <button
              className="btn btn-lg btn-light m-2"
              onClick={Auth.logout()}
            >
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
            <Link
              className={
                currentPage === "Home"
                  ? "nav-link active link1"
                  : "nav-link link 1"
              }
              to="/"
              onClick={() => handlePageChange("Home")}
            >
              Home
            </Link>
            <Link
              to="/scheduling"
              onClick={() => handlePageChange("Scheduling")}
              className={
                currentPage === "Scheduling"
                  ? "nav-link active link1"
                  : "nav-link link1"
              }
            >
              Scheduling
            </Link>
            <Link
              to="/services"
              onClick={() => handlePageChange("Services")}
              className={
                currentPage === "Services"
                  ? "nav-link active link1 kbutton-nav"
                  : "nav-link link1 kbutton-nav"
              }
            >
              Services
            </Link>
          </nav>
        </nav>
      </section>

      {/* <footer>
    Made with ❤ by Jenny, Ashley, Kezie and Emm
  </footer> */}
    </div>
  );
}

export default Header;
