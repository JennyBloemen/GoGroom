import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import '../../src/App.css'

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
        <a className="link1" href="#Signup" onClick = {() => handlePageChange('Signup')} className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}>Signup</a>
        <a className="link1" href="#Login" onClick = {() => handlePageChange('Login')} className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}>Login</a>
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
