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
    age: String
    name: String
    owner: Profile
  }

  type Schedule {
    _id: ID
    petName: String
    day: String
    time: String
    service: String
    owner: Profile
  }

  type DogServices {
    _id: ID
    bathAndBrush: Boolean
    bathAndClip: Boolean
    nailGrindingAndSanitation: Boolean
    topDog: Boolean
    topDogPlus: Boolean
    pet: Pets
  }

  type CatServices {
    _id: ID
    bathAndBrush: Boolean
    nailFileAndPrep: Boolean
    topCat: Boolean
    topCatPlus: Boolean
    pet: Pets
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profile(profileId: ID!): Profile
    profiles: [Profile]!
    schedule(scheduleId: ID!): Schedule
    schedules: [Schedule]!
    pet(petId: ID!): Pets
    pets: [Pets]!
    dogService(dogServiceId: ID!): DogServices
    dogServices: [DogServices]!
    catService(catServiceId: ID!): CatServices
    catServices: [CatServices]!
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    addSchedule(
      petName: String!
      day: String!
      time: String!
      service: String!
      owner: String!
    ): Schedule
    removeProfile(profileId: ID!): Profile
    addPet(
      breed: String!
      sex: String!
      weight: String!
      name: String!
      age: String!
      owner: String!
    ): Pets
    removePet(petId: ID!): Pets
    addDogService(
      bathAndBrush: Boolean!
      bathAndClip: Boolean!
      nailGrindingAndSanitation: Boolean!
      topDog: Boolean!
      topDogPlus: Boolean!
      pet: String!
    ): DogServices
    removeDogService(dogServiceId: ID!): DogServices
    addCatService(
      bathAndBrush: Boolean!
      nailFileAndPrep: Boolean!
      topCat: Boolean!
      topCatPlus: Boolean!
      pet: String!
    ): CatServices
    removeCatService(catServiceId: ID!): CatServices
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
