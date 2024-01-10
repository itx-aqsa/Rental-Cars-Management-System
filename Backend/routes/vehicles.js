const express = require("express");
const router = express.Router();
const VehicleController = require('../Controllers/VehicleController')
const fetchUser = require("../middlewares/fetchUser");
const checkRole = require("../middlewares/checkRole");
const sharedRoles = require('../middlewares/sharedRole');



// router.get("/getVehicles", fetchUser, sharedRoles(['Admin', 'Employee', 'Customer']), VehicleController.GetAllVehicles);

router.get("/getVehicles", VehicleController.GetAllVehicles);

router.post("/addNewVehicle", fetchUser, checkRole('Admin'), VehicleController.AddNewVehicle);

router.delete("/removeVehicle/:id", fetchUser, checkRole('Admin'), VehicleController.RemoveVehicle);

router.put("/editVehicle/:id", fetchUser, checkRole('Admin'), VehicleController.EditVehicle);

router.put("/notAvailableVehicle/:id", VehicleController.MakeVehicleNotAvailable);




module.exports = router;
