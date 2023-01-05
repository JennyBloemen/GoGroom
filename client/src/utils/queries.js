import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      pets
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      email
      password
      pets {
        _id
        breed
        sex
        weight
        name
      }
    }
  }
`;

export const QUERY_PETS = gql`
  query getPets {
    pets {
      _id
      breed
      sex
      weight
      name
      owner {
        _id
      }
    }
  }
`;
