const { Schema, model } = require('mongoose');

const catServicesSchema = new Schema({
    bathAndBrush: {
      type: Boolean,
      default: false,
    },
    nailFileAndPrep: {
        type: Boolean,
        default: false,
    },
    topCat: {
        type: Boolean,
        default: false,
    },
    topCatPlus: {
        type: Boolean,
        default: false,
    },
    pet: {
      type: Schema.Types.ObjectId,
      ref: "Pets",
    },
  });
  
  const CatServices = model('CatServices', catServicesSchema);
  
  module.exports = CatServices;
  