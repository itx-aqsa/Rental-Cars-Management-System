const express = require("express");
const router = express.Router();
const FrontendLogController = require('../Controllers/FrontendLogController');


router.post("/addNewException", FrontendLogController.AddNewFrontEndException);



module.exports = router;
