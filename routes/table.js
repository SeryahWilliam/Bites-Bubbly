const express = require('express');
const router = express.Router();
const tableCtrl = require('../controller/table');


router.get('/table/:id/table/new', tableCtrl.newReservation);

router.post('/table/:id/table', tableCtrl.createReservation);

module.exports = router;