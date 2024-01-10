const Brand = require("../models/brand");
const BackendLogController = require("./BackendLogController")

// Function to add new brand in database
const AddNewBrand = async (req, res) => {
  try {
    // In case of no exception, following code will run

    // Create a new brand and save it in database
    const brand = await Brand.create({
      name: req.body.name,
      description: req.body.description,
    });

    res.json(brand);
  } catch (error) {
    // In case of any exception, following code will run
    console.log(error.message);
    BackendLogController.AddNewBackEndException("BrandController.js", "AddNewBrand", error.message)
    res.status(500).send("Internal Server Error.");
  }
};

// Function to upadate any brand in database
const EditBrand = async (req, res) => {
  try {
    // In case of no exception, following code will run

    // Get the id of that brand which we want to update
    var brandId = req.params.id;
    const updatedData = {};
    if (req.body.name) {
      updatedData.name = req.body.name;
    }
    if (req.body.description) {
      updatedData.description = req.body.description;
    }

    const presentBrand = await Brand.findById(req.params.id);
    if (presentBrand) {
      // const item = await Brand.findByIdAndUpdate(
      //   brandId,
      //   { $set: updatedData },
      //   { new: true }
      // );

      const item = await Brand.findOneAndUpdate(
        { _id: brandId },
        { $set: updatedData },
        { new: true }
      );

      // const item = await Brand.updateOne({ _id: brandId }, { $set: updatedData }, {new: true});

      res.send(item);
    } else {
      res.send("There is an error to edit the data.");
    }
  } catch (error) {
    console.log(error.message);
    BackendLogController.AddNewBackEndException("BrandController.js", "EditBrand", error.message)
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

      // const item = await Brand.updateOne({ _id: brandId }, { $set: updatedData }, {new: true});

      

      res.send(item);
    } else {
      res.send("This brand is not present.");
    }
  } catch (error) {
    console.log(error.message);
    BackendLogController.AddNewBackEndException("BrandController.js", "RemoveBrand", error.message)
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
    BackendLogController.AddNewBackEndException("BrandController.js", "GetAllBrands", error.message)
    res.status(500).send("Internal Server Error.");
  }
};





module.exports = {
    AddNewBrand,
    EditBrand,
    RemoveBrand,
    GetAllBrands
}