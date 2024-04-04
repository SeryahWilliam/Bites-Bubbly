var express = require('express');
var router = express.Router();
const reservationCtrl = require('../controller/reservation')

router.get('/', reservationCtrl.index);

router.get('/new', reservationCtrl.new);

router.post('/', reservationCtrl.create)

// route to reservation's detail page
router.get('/:id', reservationCtrl.show);

router.delete('/:id', reservationCtrl.delete);

module.exports = router;
