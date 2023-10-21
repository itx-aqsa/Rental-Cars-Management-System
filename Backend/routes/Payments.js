const express = require('express')
const router = express.Router()
const PaymentController = require('../Controllers/PaymentController')


router.post('/addNewPayment', PaymentController.AddNewPayment);

router.get('/getAllPayments', PaymentController.GetAllPayments);

router.delete('/deletePayment/:id', PaymentController.RemovePayment);


module.exports = router;