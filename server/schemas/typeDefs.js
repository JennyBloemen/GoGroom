const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    # There is now a field to store the user's password
    password: String
    skills: [String]!
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeProfile(profileId: ID!): Profile
  }
`;

module.exports = typeDefs;

// addSkill(profileId: ID!, skill: String!): Profile
// removeSkill(profileId: ID!, skill: String!): Profile
