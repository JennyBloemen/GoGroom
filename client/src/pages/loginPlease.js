import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import rollingCat from '../emmsHTMLGraveyard/rollingCat.GIF'
import Header from "../components/webContainer.js";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_PROFILE } from "../utils/queries";

function Oops () {
  const { profileId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId: profileId },
  });
  const profile = data?.profileId || {};

  return (
    <div>
      <Header></Header>
      <div className="homeBody">
        <h1>Oops!</h1>
        <span> You're not logged in!</span>
        <img className="rollingCat" src={rollingCat}></img>
        <span>Please be sure to hit the <Link className="btn btn-lg btn-info m-2" to="/login">
              Login
            </Link> page so you can view your profile!</span>
        <span> Or if you dont have a Profile yet, head on over to   <Link className="btn btn-lg btn-light m-2" to="/signup">
              Signup
            </Link> to create one!</span>
      </div>
    </div>
  );
}

export default Oops;
