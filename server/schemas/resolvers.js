const { AuthenticationError } = require("apollo-server-express");
const { Profile, Pets, DogServices, CatServices } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    profiles: async () => {
      return Profile.find();
    },
    pet: async (parent, { petId }) => {
      return Pets.findOne({ _id: petId });
    },
    pets: async () => {
      return Pets.find();
    },
    dogService: async (parent, { dogServiceId }) => {
      return DogServices.findOne({ _id: dogServiceId });
    },
    dogServices: async () => {
      return DogServices.find();
    },
    catService: async (parent, { catServiceId }) => {
      return CatServices.findOne({ _id: catServiceId });
    },
    catServices: async () => {
      return CatServices.find();
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
<<<<<<< HEAD
    addPet: async (parent, { breed, sex, weight, name, age, owner}) => {
      const pet = await Pets.create({ breed, sex, weight, name, age, owner});
=======
    addPet: async (parent, { breed, sex, weight, name, owner }) => {
      const pet = await Pets.create({ breed, sex, weight, name, owner });
>>>>>>> origin

      return { pet };
    },
    removePet: async (parent, { petId }) => {
      return Pets.findOneAndDelete({ _id: petId });
    },
    addDogService: async (
      parent,
      {
        bathAndBrush,
        bathAndClip,
        nailGringdingAndSanitation,
        topDog,
        topDogPlus,
        pet,
      }
    ) => {
      const dogService = await DogServices.create({
        bathAndBrush,
        bathAndClip,
        nailGringdingAndSanitation,
        topDog,
        topDogPlus,
        pet,
      });

      return { dogService };
    },
    removeDogService: async (parent, { dogServiceId }) => {
      return DogServices.findOneAndDelete({ _id: dogServiceId });
    },
    addCatService: async (
      parent,
      { bathAndBrush, nailFileAndPrep, topCat, topCatPlus, pet }
    ) => {
      const catService = await CatServices.create({
        bathAndBrush,
        nailFileAndPrep,
        topCat,
        topCatPlus,
        pet,
      });

      return { catService };
    },
    removeCatService: async (parent, { catServiceId }) => {
      return CatServices.findOneAndDelete({ _id: catServiceId });
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },
  },
};

module.exports = resolvers;
