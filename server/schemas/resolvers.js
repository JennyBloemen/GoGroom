//code copied from 21/21 MERN JWT

const { AuthenticationError } = require("apollo-server-express");
const { Profile } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
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

    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
  },
};

module.exports = resolvers;

//code that may be reused for pets

// removeSkill: async (parent, { profileId, skill }) => {
//   return Profile.findOneAndUpdate(
//     { _id: profileId },
//     { $pull: { skills: skill } },
//     { new: true }
//   );
// },

// addSkill: async (parent, { profileId, skill }) => {
//   return Profile.findOneAndUpdate(
//     { _id: profileId },
//     {
//       $addToSet: { skills: skill },
//     },
//     {
//       new: true,
//       runValidators: true,
//     }
//   );
// },
