const express = require("express");
const router = express.Router();
const fetchUser = require("../middlewares/fetchUser");
const checkRole = require("../middlewares/checkRole");
const sharedRoles = require('../middlewares/sharedRole');
const CustomerController = require('../Controllers/CustomerController')



router.post("/addNewCustomer", CustomerController.AddNewCustomer);

router.post("/login", CustomerController.LoginCustomer);

router.get("/getCustomer", fetchUser, checkRole('Customer'), CustomerController.GetCustomerData);

router.put("/editCustomer/:id", fetchUser, checkRole('Employee'), CustomerController.EditCustomer);

router.get("/getAllCustomers", fetchUser, sharedRoles(['Employee', 'Admin']), CustomerController.GetAllCustomers);






module.exports = router;
