const Reservation = require("../models/reservation");

const AddNewReservation = async (req, res) => {
  try {
    const newReservation = await Reservation.create({
      customer: req.body.customer,
      vehicle: req.body.vehicle,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      totalCost: req.body.totalCost,
    });

    res.json(newReservation);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
};

const RemoveReservation = async (req, res) => {
    try {
        const reservationId = req.params.id;
        const updatedData = {}
        updatedData.active = false

        const presentReservation = await Reservation.findById(reservationId)
        if(presentReservation){
            const item = await Reservation.findByIdAndUpdate(reservationId, {$set: updatedData}, {new: true})

            res.send(item)
        }
        else{
            res.send("This reservation is not present.");
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error.");
    }
}

const ConfirmReservation = async (req, res) => {
    try {
        const reservationId = req.params.id;
        const updatedData = {}
        updatedData.confirmation = true

        const presentReservation = await Reservation.findById(reservationId)
        if(presentReservation){
            const item = await Reservation.findByIdAndUpdate(reservationId, {$set: updatedData}, {new: true})

            res.send(item)
        }
        else{
            res.send("This reservation is not present.");
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error.");
    }
}

const GetAllReservations = async (req, res) => {
  try {
    const allReservations = await Reservation.find().populate('customer', 'name').populate('vehicle', 'plateNumber').exec();
    const activeReservations = allReservations.filter((reservation) => {
      return reservation.active == true;
    });
    res.send(activeReservations);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
};

const GetConfirmedReservations = async (req, res) => {
    try {
        const allReservations = await Reservation.find().populate('customer', 'name').populate('vehicle', 'plateNumber').exec();
        const confirmedReservations = allReservations.filter((reservation) => {
          return reservation.active == true && reservation.confirmation == false;
        });
        res.send(confirmedReservations);
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error.");
      }
}






module.exports = {
  AddNewReservation,
  GetAllReservations,
  RemoveReservation,
  ConfirmReservation,
  GetConfirmedReservations
};
