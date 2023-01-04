import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import Header from "../components/webContainer.js";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_PROFILE } from "../utils/queries";

function Profile() {
  const { profileId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId: profileId },
  });
  const profile = data?.profileId || {};

  return (
    <div >
      <Header></Header>
      <div className="homeBody">
      <div className="userCard">
    <h2>User's name</h2>
    <ul>
      <li>phone #:</li>
      <li>email:</li>
    </ul>

  </div>
  <div className="petCard">
    <img src="" alt="your pet here"/>
    <h2>pet's name</h2>
    <ul>
      <li>age:</li>
      <li>breed:</li>
      <li>FIxed:</li>
    </ul>
    <a href="#">Edit</a>

  </div>

  <a href="#">Add Appointment</a>
  <a href="#"> Add Pet</a>

    </div>
    </div>
  );
}

export default Profile;
