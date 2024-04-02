const express = require('express');
const router = express.Router();
const destinationsController = require('../controllers/specialRequestsController');

router.post('/specialRequests/:id/specialRequests', specialRequestsController.create);
