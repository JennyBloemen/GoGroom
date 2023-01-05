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
    <h2>Dog Services</h2>
    <ul className="dogServiceList">
    <li className='servTitle'>Bath and Brush:</li>
        <ul>
          <li className='servDesc'> a Gentle scrubbing and brushing of your playful pup!</li>
          <li className='servPrice'> price: 35$</li>
        </ul>
        <li className='servTitle'>Bath and Clip:</li>
        <ul>
          <li className='servDesc'> A classic bath and haircut to keep your little champ looking their best!</li>
          <li className='servPrice'> price: 40$</li>
        </ul>
        <li className='servTitle'>Nail Grinding and sanitation:</li>
        <ul>
          <li className='servDesc'> Keep those paws squeaky clean with a quick rinse and nail filing to keep both your pup and floors in pristine condition!</li>
          <li className='servPrice'> price: 25$</li>
        </ul>
        <li className='servTitle'>Top Dog:</li>
        <ul>
          <li className='servDesc'> our Classic bath and brush with our signature deflea formula to keep your wild hound pest free!</li>
          <li className='servPrice'> price: 50$</li>
        </ul>
        <li className='servTitle'>Top Dog PLUS:</li>
        <ul>
          <li className='servDesc'> a full routine bath and Brush, Nail Grinding and sanitation, haircut and deflea care package!</li>
          <li className='servPrice'> price: 70$</li>
        </ul>
    </ul>
  </div>
  <div className="catBanner">
    <img src={catIcon} alt="cat head image" className="headIcon"/>
    <h2>Cat Services</h2>
    <ul className='catServiceList'>
    <li className='servTitle'>Bath and Brush:</li>
        <ul>
          <li className='servDesc'> a Gentle scrubbing and brushing of your fine Feline Friend!</li>
          <li className='servPrice'> price: 25$</li>
        </ul>
        <li className='servTitle'>Nail File and Prep:</li>
        <ul>
          <li className='servDesc'> tidy up those snaggy scratchy claws without the harm of completely declawing your cuddly cat!</li>
          <li className='servPrice'> price: 25$</li>
        </ul>
        <li className='servTitle'>Top Cat:</li>
        <ul>
          <li className='servDesc'> our Classic bath and brush with our signature deflea formula to keep your whiskered friend pest free!</li>
          <li className='servPrice'> price: 35$</li>
        </ul>
        <li className='servTitle'>Top Cat PLUS:</li>
        <ul>
          <li className='servDesc'> a full routine bath and Brush, Nail file prep and deflea care package!</li>
          <li className='servPrice'> price: 50$</li>
        </ul>
        </ul>
  </div>
       
       </div>

       </div>
    );
}

export default Home;
