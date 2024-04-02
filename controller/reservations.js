const Reservations = require('../models/reservations')

exports.create = async (req, res) => {
    try {
      const reservation = await Reservation.findById(req.params.id);
      reservation.tables.push(req.body); 
      await reservation.save();
      res.redirect(`/reservations/${reservation._id}`);
    } catch (error) {
      res.send(error);
    }
  };