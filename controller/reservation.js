const Reservation = require('../models/reservation');
const Table = require('../models/table');

const index = async (req, res) => {
    const reservation = await Reservation.find({});
    console.log(reservation);
    res.render('reservation/index', { reservation });
};

function newReservation(req, res) {
  let newRes = new Reservation();
    const dt = newRes.date; 
    let reservationDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    reservationDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('reservation/new', { reservationDate });
}

const create = async (req, res) => {
    await Reservation.create(req.body);
    res.redirect('/reservation');
};

const show = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        const tables = await Table.find({reservation: reservation._id}); 
        res.render('reservations/show', { reservation, tables }); 
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    index,
    new: newReservation,
    create,
    show
};
