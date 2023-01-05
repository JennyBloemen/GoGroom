import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import Header from "../components/webContainer.js";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_PETS, QUERY_SINGLE_PROFILE } from "../utils/queries";
import jwt_decode from "jwt-decode";

function Profile() {
  const { profileId } = useParams();
  const token = window.localStorage.getItem("id_token");
  const user = jwt_decode(token);
  const userid = user.data._id;

  const { loading, data } = useQuery(QUERY_PETS);
  const petData = data?.pets || {};
  // console.log(petData);

  let userPets = [];
  for (let i = 0; i < petData.length; i++) {
    if (petData[i].owner._id == userid) {
      userPets.push(petData[i]);
    }
  }

  if (loading) {
    return <h2>loading</h2>;
  }

  return (
    <div>
      <Header></Header>
      <div className="homeBody">
        <div className="userCard">
          <h2>{user.data.name}</h2>

          <ul>
            <li>phone #:</li>
            <li>email:</li>
          </ul>
        </div>
        {userPets.map((pet, index) => (
          <div className="petCard" key={index}>
            <img src="" alt="your pet here" />
            <h2 className="petname">{pet.name}</h2>
            <ul>
              <li>Breed: {pet.breed}</li>
              <li>Sex: {pet.sex}</li>
              <li>Weight: {pet.weight}</li>
              <li>Age:{pet.age} </li>
            </ul>
            <a href="#">Edit</a>
          </div>
        ))}
       
        <Link className="btn btn-lg btn-info m-2" to="/petform">
          Add Pet
        </Link>
      </div>
    </div>
  );
}

export default Profile;
