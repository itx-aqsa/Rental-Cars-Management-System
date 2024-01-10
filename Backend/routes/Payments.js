const express = require('express')
const router = express.Router()
const PaymentController = require('../Controllers/PaymentController')
const fetchUser = require("../middlewares/fetchUser");
const checkRole = require("../middlewares/checkRole");
const sharedRoles = require('../middlewares/sharedRole');


router.post('/addNewPayment', fetchUser, checkRole('Customer'), PaymentController.AddNewPayment);

router.get('/getAllPayments', fetchUser, sharedRoles(['Admin', 'Employee', 'Customer']), PaymentController.GetAllPayments);

router.delete('/deletePayment/:id', fetchUser, checkRole('Employee'), PaymentController.RemovePayment);


module.exports = router;