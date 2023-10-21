const express = require('express');
const router = express.Router();
const ReservationController = require('../Controllers/ReservationController');


router.post('/addNewReservation', ReservationController.AddNewReservation);

router.get('/getAllReservations', ReservationController.GetAllReservations);

router.delete('/removeReservation/:id', ReservationController.RemoveReservation);

router.put('/confirmReservation/:id', ReservationController.ConfirmReservation);

router.get('/confirmedReservations', ReservationController.GetConfirmedReservations);



module.exports = router