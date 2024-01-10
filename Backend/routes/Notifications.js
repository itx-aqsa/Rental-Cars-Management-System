const express = require('express')
const router = express.Router()
const NotificationController = require('../Controllers/NotificationController')
const fetchUser = require("../middlewares/fetchUser");
const checkRole = require("../middlewares/checkRole");
const sharedRoles = require('../middlewares/sharedRole');


router.post('/addNewNotification', fetchUser, checkRole('Customer'), NotificationController.AddNewNotification);

router.get('/getAllNotifications', fetchUser, sharedRoles(['Admin', 'Employee']), NotificationController.GetAllNotifications);

router.delete('/deleteNotification/:id', fetchUser, checkRole('Employee'), NotificationController.RemoveNotification);


module.exports = router;