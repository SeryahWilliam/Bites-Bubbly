const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for special requests and details
const specialRequestSchema = new Schema({
  requestType: {
    type: String,
    enum: ['Allergy', 'Seating Preference', 'Celebration'],
  },
  details: String,
});

const reservationSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    numberOfGuests: { type: Number, required: true, min: 1, max: 20 },
    date: { type: Date, required: true },
    time: { type: String, required: true }, 
    specialRequests: [specialRequestSchema], // embedding special requests schema
});


module.exports = {
  Reservation: mongoose.model('Reservation', reservationSchema),
};
