const express = require('express');
const router = express.Router();
const ReservationController = require('../Controllers/ReservationController');
const fetchUser = require("../middlewares/fetchUser");
const checkRole = require("../middlewares/checkRole");
const sharedRoles = require('../middlewares/sharedRole');


router.post('/addNewReservation', fetchUser, checkRole('Customer'), ReservationController.AddNewReservation);

router.get('/getAllReservations', fetchUser, sharedRoles(['Admin', 'Employee', 'Customer']), ReservationController.GetAllReservations);

router.delete('/removeReservation/:id', fetchUser, checkRole('Employee'), ReservationController.RemoveReservation);

router.put('/confirmReservation/:id', fetchUser, checkRole('Employee'), ReservationController.ConfirmReservation);

router.get('/confirmedReservations', fetchUser, sharedRoles(['Admin', 'Employee']), ReservationController.GetConfirmedReservations);

router.post('/sendEmail', ReservationController.SendEmail);



module.exports = router