const express = require("express");
const router = express.Router();
const EmployeeController = require('../Controllers/EmployeeController')
const fetchUser = require("../middlewares/fetchUser");
const checkRole = require("../middlewares/checkRole");
const sharedRoles = require('../middlewares/sharedRole');



router.post("/addNewEmployee", fetchUser, checkRole('Admin'), EmployeeController.AddNewEmployee);

router.put("/editEmployee/:id", fetchUser, checkRole('Admin'), EmployeeController.EditEmployee);

router.get("/getEmployeeData", fetchUser, checkRole("Employee"), EmployeeController.GetEmployeeData);

router.delete("/removeEmployee/:id", fetchUser, checkRole('Admin'), EmployeeController.RemoveEmployee);

router.get("/getAllEmployees", fetchUser, sharedRoles(['Admin', 'Employee']), EmployeeController.GetAllEmployees);




module.exports = router;
