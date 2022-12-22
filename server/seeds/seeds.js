const db = require("../config/connection");
const { Profile, Pets } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const petSeeds = require("./petSeeds.json");

db.once("open", async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);
    await Pets.deleteMany({});
    await Pets.create(petSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
