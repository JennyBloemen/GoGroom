const { Schema, model } = require("mongoose");

const scheduleSchema = new Schema({
  petName: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
});

const Schedule = model("Pets", scheduleSchema);

module.exports = Schedule;
