const express = require("express");
const router = express.Router();
const Brand = require("../models/brand");

const AddNewBrand = async (req, res) => {
  try {
    const brand = await Brand.create({
      name: req.body.name,
      description: req.body.description,
    });

    res.json(brand);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
};

const EditBrand = async (req, res) => {
  try {
    var brandId = req.params.id;
    const updatedData = {};
    if (req.body.name) {
      updatedData.name = req.body.name;
      updatedData.updatedDate = Date.now();
    }
    if (req.body.description) {
      updatedData.description = req.body.description;
      updatedData.updatedDate = Date.now();
    }

    const presentBrand = await Brand.findById(req.params.id);
    if (presentBrand) {
      const item = await Brand.findByIdAndUpdate(
        brandId,
        { $set: updatedData },
        { new: true }
      );

      res.send(item);
    } else {
      res.send("There is an error to edit the data.");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
};

const RemoveBrand = async (req, res) => {
  try {
    const brandId = req.params.id;
    const updatedData = {};
    updatedData.active = false;
    const presentBrand = await Brand.findById(brandId);
    if (presentBrand) {
      const item = await Brand.findByIdAndUpdate(
        brandId,
        { $set: updatedData },
        { new: true }
      );

      res.send(item);
    } else {
      res.send("This brand is not present.");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
};

const GetAllBrands = async (req, res) => {
  try {
    const allBrands = await Brand.find()
    const activeBrands = allBrands.filter((brand)=>{
        return brand.active == true
    })
    res.send(activeBrands)
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
};

router.post("/addNewBrand", async (req, res) => {
  AddNewBrand(req, res);
});

router.put("/editBrand/:id", async (req, res) => {
  EditBrand(req, res);
});

router.delete("/removeBrand/:id", async (req, res) => {
  RemoveBrand(req, res);
});

router.get("/getBrands", async (req, res) => {
  GetAllBrands(req, res);
});

module.exports = router;
