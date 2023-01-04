import React from "react";
import { useQuery } from "@apollo/client";
import Header from "../components/webContainer.js";
import Login from './Login.js';
import Auth from '../utils/auth.js'
import '../emmsHTMLGraveyard/garbage.css'
import catIcon from '../emmsHTMLGraveyard/catIcon.PNG'
import dogIcon from '../emmsHTMLGraveyard/dogIcon.PNG'
import tubPup from '../emmsHTMLGraveyard/tubPup.GIF'

import Profile from "./Profile.js";

import { QUERY_PROFILES } from "../utils/queries";
import Signup from "./Signup.js";

function Home() {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];
  // temporary code until services are built, need to remove
  const services = ["brush", "wash", "trim"];
  return (

    <div>
    <Header>
    </Header>
    
    <div className="homeBody">
      
      {/* {Auth.loggedIn()?(
      
          <Profile></Profile>
      

          ):(
            <div>
      <Login></Login>
      <Signup></Signup>
      </div>
     
    
      )}; */}
        <div className="gifGuy">
    <img src={tubPup} alt="dog in bathtub gif" className="bigGif" />
  </div>
  <div className="dogBanner">
    <img src={dogIcon} alt="dog head image" className="headIcon" />
    <ul className="dogServiceList">
    {services.map((service) => (
      <li className="dogServiceListItem" key={service.uuid}>
        {`${service.title} ${service.description} (${service.price})`}
      </li>
    ))}
    </ul>
  </div>
  <div className="catBanner">
    <img src={catIcon} alt="cat head image" className="headIcon"/>
    <ul className='catServiceList'>
    {services.map((service) => (
      <li className="catServiceListItem" key={service.uuid}>
        {`${service.title} ${service.description} (${service.price})`}
      </li>
    ))}
    </ul>
  </div>
       
       </div>

       </div>
    );
}

export default Home;
