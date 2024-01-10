const express = require("express");
const router = express.Router();
const BrandController = require('../Controllers/BrandController')
const fetchUser = require("../middlewares/fetchUser");
const checkRole = require("../middlewares/checkRole");
const sharedRoles = require('../middlewares/sharedRole');



router.post("/addNewBrand", fetchUser, checkRole('Admin'), BrandController.AddNewBrand);

router.put("/editBrand/:id", fetchUser, checkRole('Admin'), BrandController.EditBrand);

router.delete("/removeBrand/:id", fetchUser, checkRole('Admin'), BrandController.RemoveBrand);

router.get("/getBrands", fetchUser, sharedRoles(['Admin', 'Employee']), BrandController.GetAllBrands);




module.exports = router;
