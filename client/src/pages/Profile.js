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
    <div>
      <Header></Header>
      <div>Hello...</div>;
    </div>
  );
}

export default Profile;
