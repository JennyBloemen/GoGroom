const { Schema, model } = require('mongoose');

const petsSchema = new Schema({
  breed: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
});

const Pets = model('Pets', petsSchema);

module.exports = Pets;
