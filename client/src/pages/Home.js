import React from "react";
import { useQuery } from "@apollo/client";
import Header from "../components/webContainer.js";
import Login from './Login.js';
import Auth from '../utils/auth.js'
import '../emmsHTMLGraveyard/garbage.css'

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
      
      {Auth.loggedIn()?(
      
          <Profile></Profile>
      

          ):(
            <div>
      <Login></Login>
      <Signup></Signup>
      </div>
     
    
      )};
       
       </div>

       </div>
    );
}

export default Home;
