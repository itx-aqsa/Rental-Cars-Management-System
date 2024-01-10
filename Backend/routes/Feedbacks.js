const express = require('express')
const router = express.Router()
const FeedbackController = require('../Controllers/FeedbackController')
const fetchUser = require("../middlewares/fetchUser");
const checkRole = require("../middlewares/checkRole");
const sharedRoles = require('../middlewares/sharedRole');

router.post('/addNewFeedback', fetchUser, checkRole('Customer'), FeedbackController.AddNewFeedback);

router.get('/getAllFeedbacks', fetchUser, sharedRoles(['Admin', 'Employee']), FeedbackController.GetAllFeedbacks);

router.delete('/deleteFeedback/:id', fetchUser, checkRole('Employee'), FeedbackController.RemoveFeedback);


module.exports = router