const express = require('express')
const router = express.Router()
const NotificationController = require('../Controllers/NotificationController')


router.post('/addNewNotification', NotificationController.AddNewNotification);

router.get('/getAllNotifications', NotificationController.GetAllNotifications);

router.delete('/deleteNotification/:id', NotificationController.RemoveNotification);


module.exports = router;