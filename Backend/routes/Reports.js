const express = require('express')
const router = express.Router()
const ReportController = require('../Controllers/ReportController')


router.post('/addNewReport', ReportController.AddNewReport);

router.get('/getAllReports', ReportController.GetAllReports);

router.delete('/deleteReport/:id', ReportController.RemoveReport);


module.exports = router;