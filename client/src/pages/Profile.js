import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_PROFILE } from "../utils/queries";

const Profile = () => {
  const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId: profileId },
  });

  const profile = data?.profile || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return;
};

export default Profile;
