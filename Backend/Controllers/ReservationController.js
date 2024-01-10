const Reservation = require("../models/reservation");
const Vehicle = require("../models/vehicle");
var nodemailer = require("nodemailer");
const path = require("path")
const BackendLogController = require("./BackendLogController")

const AddNewReservation = async (req, res) => {
  try {
    const newReservation = await Reservation.create({
      customer: req.body.customer,
      vehicle: req.body.vehicle,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      totalCost: req.body.totalCost,
    });

    // const vehicleId = req.body.vehicle;
    // const updatedData = {};
    // updatedData.status = 'Not Available'

    // const presentVehicle = await Vehicle.findById(vehicleId);
    // if (presentVehicle) {
    //   const item = await Vehicle.findByIdAndUpdate(
    //     vehicleId,
    //     { $set: updatedData },
    //     { new: true }
    //   );

    //   res.json(item);
    // } else {
    //   res.send("This vehicle is not present.");
    // }

    res.json(newReservation);
  } catch (error) {
    console.log(error.message);
    BackendLogController.AddNewBackEndException("ReservationController.js", "AddNewReservation", error.message)
    res.status(500).send("Internal Server Error.");
  }
};

const RemoveReservation = async (req, res) => {
  try {
    const reservationId = req.params.id;
    const updatedData = {};
    updatedData.active = false;

    const presentReservation = await Reservation.findById(reservationId);
    if (presentReservation) {
      const item = await Reservation.findByIdAndUpdate(
        reservationId,
        { $set: updatedData },
        { new: true }
      );

      res.send(item);
    } else {
      res.send("This reservation is not present.");
    }
  } catch (error) {
    console.log(error.message);
    BackendLogController.AddNewBackEndException("ReservationController.js", "RemoveReservation", error.message)
    res.status(500).send("Internal Server Error.");
  }
};

const ConfirmReservation = async (req, res) => {
  try {
    const reservationId = req.params.id;
    const updatedData = {};
    updatedData.confirmation = true;

    const presentReservation = await Reservation.findById(reservationId);
    if (presentReservation) {
      const item = await Reservation.findByIdAndUpdate(
        reservationId,
        { $set: updatedData },
        { new: true }
      );

      res.send(item);
    } else {
      res.send("This reservation is not present.");
    }
  } catch (error) {
    console.log(error.message);
    BackendLogController.AddNewBackEndException("ReservationController.js", "ConfirmReservation", error.message)
    res.status(500).send("Internal Server Error.");
  }
};

const GetAllReservations = async (req, res) => {
  try {
    const allReservations = await Reservation.find()
      .populate("customer", "name")
      .populate("vehicle", "plateNumber")
      .exec();
    const activeReservations = allReservations.filter((reservation) => {
      return reservation.active == true && reservation.confirmation == false;
    });
    res.send(activeReservations);
  } catch (error) {
    console.log(error.message);
    BackendLogController.AddNewBackEndException("ReservationController.js", "GetAllReservations", error.message)
    res.status(500).send("Internal Server Error.");
  }
};

const GetConfirmedReservations = async (req, res) => {
  try {
    const allReservations = await Reservation.find()
      .populate("customer", "name")
      .populate("vehicle", "plateNumber")
      .exec();
    const confirmedReservations = allReservations.filter((reservation) => {
      return reservation.active == true && reservation.confirmation == true;
    });
    res.send(confirmedReservations);
  } catch (error) {
    console.log(error.message);
    BackendLogController.AddNewBackEndException("ReservationController.js", "GetConfirmedReservations", error.message)
    res.status(500).send("Internal Server Error.");
  }
};

const SendEmail = async (req, res) => {
  try {
    console.log(req.body)
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ammarfarooq207@gmail.com",
        pass: "wtkyhcsfepzlvwgs",
      },
    });
    // console.log(transporter.auth)
    var mailOptions = {
      from: "ammarfarooq207@gmail.com",
      to: "zaeemahmad2603@gmail.com",
      subject: req.body.subject,
      text: 'Your reservation in Rental Cars company become successfully!',
      html: `
        <ul>
          <li>Vehicle: ${req.body.vehicle}</li>
          <li>Starting Date: ${req.body.From}</li>
          <li>Ending Date: ${req.body.Till}</li>
          <li>Total Cost: ${req.body.cost}</li>
        </ul>
      `

    };
    // console.log(mailOptions)
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.send("Email does not sent successfully!")
        console.log(error);
      } else {
        res.send("Email sent successfully!")
      }
    });



    // res.send("I am ready")
  } catch (error) {
    console.log(error.message);
    BackendLogController.AddNewBackEndException("ReservationController.js", "SendEmail", error.message)
    res.status(500).send("Internal Server Error.");
  }
};

module.exports = {
  AddNewReservation,
  GetAllReservations,
  RemoveReservation,
  ConfirmReservation,
  GetConfirmedReservations,
  SendEmail,
};
