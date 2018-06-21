/**
 * Model of Events
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Mongoose assigns ID by default to all schemas
// TODO: Add registration start date
const EventSchema = new Schema({
  title: String,
  teacher: String,
  description: String,
  startDate: Date,
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String
  },
  maxSlots: Number,
  courses: [{ label: String }]
});

module.exports = mongoose.model("Event", EventSchema);
