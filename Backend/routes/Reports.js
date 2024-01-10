const express = require('express')
const router = express.Router()
const ReportController = require('../Controllers/ReportController')
const fetchUser = require("../middlewares/fetchUser");
const checkRole = require("../middlewares/checkRole");
const sharedRoles = require('../middlewares/sharedRole');


router.post('/addNewReport', fetchUser, checkRole('Employee'), ReportController.AddNewReport);

router.get('/getAllReports', fetchUser, sharedRoles(['Admin', 'Employee']), ReportController.GetAllReports);

router.delete('/deleteReport/:id', fetchUser, checkRole('Employee'), ReportController.RemoveReport);


module.exports = router;