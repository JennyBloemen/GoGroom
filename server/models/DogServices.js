const { Schema, model } = require('mongoose');

const dogServicesSchema = new Schema({
    bathAndBrush: {
      type: Boolean,
      default: false,
    },
    bathAndClip: {
        type: Boolean,
        default: false,
    },
    nailGrindingAndSanitation: {
        type: Boolean,
        default: false,
    },
    topDog: {
        type: Boolean,
        default: false,
    },
    topDogPlus: {
        type: Boolean,
        default: false,
    },
    pet: {
      type: Schema.Types.ObjectId,
      ref: "Pets",
    },
  });
  
  const DogServices = model('DogServices', dogServicesSchema);
  
  module.exports = DogServices;
  