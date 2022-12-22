import React, { useState } from 'react';
import Home from './Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Portfolio from './pages/Profile';
import Services from './pages/Services';
import '../../src/App.css'

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = ()=> {
    if (currentPage === 'Home'){
      return <Home/>;
    }
    if (currentPage === 'Login'){
      return <Login/>;
    }
    if (currentPage === 'Signup'){
      return <Signup/>;
    }
    if (currentPage === 'Profile'){
      return <Profile/>;
    }if (currentPage === 'Scheduling'){
      return <Scheduling/>;
    }
    return <Services/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

return(
  <div className="navBar">
    <img src="./GGLogo.PNG" alt="GOGROOM logo">

    <div>
          {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
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
        <a className="link1" href="#Home" onClick = {() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
        <a className="link1" href="#Scheduling" onClick = {() => handlePageChange('Scheduling')} className={currentPage === 'Scheduling' ? 'nav-link active' : 'nav-link'}>Scheduling</a>
        <a className="lin1 kbutton-nav" href="#Services" onClick = {() => handlePageChange('Services')} className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}>Services</a>
      </nav>
  </nav>
  </section>

  <footer>
    Made with ❤ by Jenny, Ashley, Kezie and Emm
  </footer>
  </div>
)
