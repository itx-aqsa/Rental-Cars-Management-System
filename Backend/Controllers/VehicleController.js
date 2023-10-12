const Vehicle = require("../models/vehicle");
const Brand = require("../models/brand");

const AddNewVehicle = async (req, res) => {
  try {
    const presentBrand = await Brand.findById(req.body.brand);

    // if (presentBrand) {
    //   if (presentBrand.active === true) {
    //     var NewVehicle = await Vehicle.create({
    //       brand: req.body.brand,
    //       year: req.body.year,
    //       plateNumber: req.body.plateNumber,
    //       image: req.body.image,
    //       description: req.body.description,
    //     });
    //   }
    //   else{
    //     res.send("This brand is no more active.")
    //   }
    // } else {
    //   res.send("This brand is not present.");
    // }

    var NewVehicle = await Vehicle.create({
              brand: presentBrand.id,
              year: req.body.year,
              plateNumber: req.body.plateNumber,
              image: req.body.image,
              description: req.body.description,
            });

    res.json(NewVehicle);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
};

const RemoveVehicle = async (req, res) => {
  try {
    const vehicleId = req.params.id;
    const updatedData = {};
    updatedData.active = false;

    const PresentVehicle = await Vehicle.findById(vehicleId);
    if (PresentVehicle) {
      const item = await Vehicle.findByIdAndUpdate(
        vehicleId,
        { $set: updatedData },
        { new: true }
      );
      res.send(item);
    } else {
      res.send("This vehicle is not present.");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
};

const EditVehicle = async (req, res) => {
  try {
    const vehicleId = req.params.id;
    const updatedData = {};

    if (req.body.brand) {
      updatedData.brand = req.body.brand;
    }
    if (req.body.year) {
      updatedData.year = req.body.year;
    }
    if (req.body.plateNumber) {
      updatedData.plateNumber = req.body.plateNumber;
    }
    if (req.body.image) {
      updatedData.image = req.body.image;
    }
    if (req.body.description) {
      updatedData.description = req.body.description;
    }
    if (req.body.status) {
      updatedData.status = req.body.status;
    }
    if (req.body.discount) {
      updatedData.discount = req.body.discount;
    }
    
    const presentVehicle = await Vehicle.findById(vehicleId);
    if (presentVehicle) {
      const item = await Vehicle.findByIdAndUpdate(
        vehicleId,
        { $set: updatedData },
        { new: true }
      );

      res.json(item);
    } else {
      res.send("This vehicle is not present.");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
};

const GetAllVehicles = async (req, res) => {
  try {
    const allVehicles = await Vehicle.find().populate('brand', 'name').exec();
    const activeVehicles = allVehicles.filter((vehicle) => {
      return vehicle.active == true;
    });
    res.send(activeVehicles);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
};

module.exports = {
  AddNewVehicle,
  EditVehicle,
  RemoveVehicle,
  GetAllVehicles,
};
