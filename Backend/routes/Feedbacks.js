const express = require('express')
const router = express.Router()
const FeedbackController = require('../Controllers/FeedbackController')

router.post('/addNewFeedback', FeedbackController.AddNewFeedback);

router.get('/getAllFeedbacks', FeedbackController.GetAllFeedbacks);

router.delete('/deleteFeedback/:id', FeedbackController.RemoveFeedback);


module.exports = router