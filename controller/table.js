const Reservation = require('../models/reservation');
const Table = require('../models/table'); 

async function newReservation(req, res) {
  try {
    const tables = await Table.find({ available: true }); // to find tables that are marked as available
    res.render('reservations/new', { tables }); // to pass available tables to the view
  } catch (err) {
    console.error(err);
    res.redirect('/reservations');
  }
}

async function createReservation(req, res) {
  const tableId = req.body.table; 
  const specialRequests = req.body.specialRequests; 
  
  try {
    // to create the reservation with the received info
    const reservation = await Reservation.create({
      ...req.body,
      table: tableId, 
      specialRequests: specialRequests 
    });

    // to update the table's availability
    await Table.findByIdAndUpdate(tableId, { available: false });

    res.redirect('/reservations');
  } catch (err) {
    console.error(err);
    res.redirect('/reservations/new'); // to redirect back to the form in case of error
  }
}

module.exports = {
  newReservation,
  createReservation,
};
