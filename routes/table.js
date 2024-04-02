const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controller/table');

// for a new Ticket Form
router.get('/table/:id/tickets/new', tableCtrl.newTable);

// for creating a Ticket
router.post('/table/:id/table', tableCtrl.createTable);

module.exports = router;