import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_PET = gql`
  mutation addPet(
    $breed: String!
    $sex: String!
    $weight: String!
    $name: String!
    $age: Age!
    $owner: String!
  ) {
    addPet(
      breed: $breed
      sex: $sex
      weight: $weight
      name: $name
      age: $age
      owner: $owner
    ) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;
