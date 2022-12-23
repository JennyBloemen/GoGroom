const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    pets: [Pets]
  }

  type Pets {
    _id: ID
    breed: String
    sex: String
    weight: String
    name: String
    owner: Profile
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    pets: [Pets]!
    pet(petId: ID!): Pets
  }

  type Mutation {
    addProfile(
      name: String!, 
      email: String!, 
      password: String!
    ): Auth
    login(
      email: String!, 
      password: String!
    ): Auth
    removeProfile(
      profileId: ID!
    ): Profile
    addPet(
      breed: String!, 
      sex: String!, 
      weight: String!, 
      name: String!,
      owner: String!
    ): Pets
    removePet(
      petId: ID!
    ): Pets
  }
`;

module.exports = typeDefs;

// addSkill(profileId: ID!, skill: String!): Profile
// removeSkill(profileId: ID!, skill: String!): Profile
// skills: [String]!
