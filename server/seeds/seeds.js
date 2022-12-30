const db = require("../config/connection");
const { Profile, Pets } = require("../models");

db.once("open", async () => {
  await Profile.deleteMany();

  const profiles = await Profile.insertMany([
    {
      name: "Jenny Bloemen",
      email: "jennyb@gmail.com",
      password: "password01",
    },
    {
      name: "Kezie Stewart",
      email: "kstew@moo.com",
      password: "password02",
    },
    {
      name: "Emmalee Anderson",
      email: "emander@qiz.com",
      password: "password03",
    },
    {
      name: "Ashley Bostrom",
      email: "itsAsh@bamf.com",
      password: "password04",
    },
  ]);
  console.log("Users now seeded");

  await Pets.deleteMany();

  const pets = await Pets.insertMany([
    {
      breed: "Poodle",
      sex: "Male",
      weight: "65lbs",
      name: "Winston",
    },
    {
      breed: "Yorkie",
      sex: "Female",
      weight: "7lbs",
      name: "Lola",
    },
    {
      breed: "Great Dane",
      sex: "Male",
      weight: "200lbs",
      name: "Megalatron",
    },
    {
      breed: "Mastiff",
      sex: "Male",
      weight: "150lbs",
      name: "Tiny",
    },
  ]);
  console.log("All pets seeded");

  for (newPet of pets) {
    const tempProfile = profiles[Math.floor(Math.random() * profiles.length)];
    newPet.owner = tempProfile._id;
    await newPet.save();
  }
  console.log("User added to pet");

  process.exit();
});
