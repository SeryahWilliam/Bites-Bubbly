const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
    tableNumber: { type: Number, required: true },
    seatingCapacity: { type: Number, required: true, min: 1, max: 12 },
    location: { type: String, enum: ['Indoor', 'Outdoor'], required: true },
    reservation: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reservation',
      required: false,
    }
})

module.exports = {
Table: mongoose.model('Table', tableSchema)
};