const Reservation = require('../models/reservation');
const Table = require('../models/table');

const index = async (req, res) => {
    const reservation = await Reservation.find({});
    res.render('reservation/index', { title: 'reservation',reservation });
};

function newReservation(req, res) {
    res.render('reservation/new', {title:'Make A Reservation'});
}

const create = async (req, res) => {
    await Reservation.create(req.body);
    res.redirect('/reservations');
};

const show = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        const table = await Table.find({reservation: reservation._id}); 
        res.render('reservation/show', { reservation, table }); 
    } catch (error) {
        res.send(error);
    }
};

const deleteReservation = async (req, res) => {
    try {
        const {id} = req.params;
        await Reservation.findByIdAndDelete(id);
        res.send({message: 'Reservation successfully deleted'});
    } catch (err) {
        console.error('Error deleting reservation:' , err);
        res.status(500).send({error: 'An error occurred while deleting the reservation'});
        }
    };


module.exports = {
    index,
    new: newReservation,
    create,
    show,
    delete: deleteReservation
};
