import React, { useEffect, useContext, useRef } from "react";
import Button from "@mui/material/Button";
import "../../Reservation_Customer.css";
import { useNavigate } from "react-router-dom";
import { CustomerContext, VehicleContext, ReservationContext, AlertContext } from "../../Context/AllContexts";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import axios from 'axios'
import { useSelector } from 'react-redux'

import For_Payment_Stripe from "./For_Payment_Stripe";

const Reservation_Vehicle_Customer = () => {
  const [msg, setMsg] = useState("");
  const [messageToSend, setMessageToSend] = useState({
    to: "",
    subject: "Reservation Confirmed!",
    vehicle: "",
    From: "",
    Till: "",
    cost: 0
  });

  // const { to, subject, description } = user;

  



  const navigate = useNavigate();

  const [paymentButton, setPaymentButton] = useState(false)

  const [cost, setCost] = useState(0);
  var starting = null;
  var ending = null;

  const Context = useContext(CustomerContext);
  const vehiclecontext = useContext(VehicleContext);
  const reservationcontext = useContext(ReservationContext)
  const alertcontext = useContext(AlertContext)

  const { showAlert, setShowAlert, alertData, setAlertData } = alertcontext
  const { getCustomer, setGetCustomer, GetCustomerData } = Context;
  const { vehicleForOneDetailedPage, setVehicleForOneDetailedPage, MakePresentVehicleNotAvailable } =
    vehiclecontext;
  const { unConfirmedReservations, setUnConfirmedReservations, addNewReservation } = reservationcontext;

  const [newReservation, setNewReservation] = useState({
    startDate: "",
    endDate: "",
    totalCost: "",
  });

  useEffect(() => {
    if (localStorage.getItem("customerToken")) {
      GetCustomerData();
    } else {
      setShowAlert(true);
        setAlertData({
          severity: "error",
          message: "You have to Logged In into the system!",
        });
        setTimeout(() => {
          setShowAlert(false)
        }, 3000);
      navigate("/Login");
    }
  }, []);

  const OnChange = (e) => {
    setNewReservation({ ...newReservation, [e.target.name]: e.target.value });
  };

  const [open, setOpen] = React.useState(false);
  const dialogRef = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReserve = () => {
    addNewReservation(getCustomer._id, vehicleForOneDetailedPage.id, newReservation.startDate, newReservation.endDate, cost)
    MakePresentVehicleNotAvailable(vehicleForOneDetailedPage.id)
    handleSendEmail();

    setPaymentButton(true)

    setShowAlert(true);
        setAlertData({
          severity: "success",
          message: "Car Reserved Successfully!",
        });
        setTimeout(() => {
          setShowAlert(false)
        }, 3000);
    // console.log(vehicleForOneDetailedPage.id)
    setOpen(false);
  }

  const handleSendEmail = async () => {
    await axios
      .post("http://localhost:5000/api/reservations/sendEmail", {
      to: "",
      subject: "Reservation Applied Successfully!",
      vehicle: vehicleForOneDetailedPage.plateNumber,
      From: newReservation.startDate,
      Till: newReservation.endDate,
      cost: cost
    })
      .then((response) => setMsg(response.data.respMesg));
  };

  const cartItems = [
    {
        product: 'bat',
        price: 300
    },
    {
        product: 'football',
        price: 400
    }
]
// addNewReservation(getCustomer._id, vehicleForOneDetailedPage.id, newReservation.startDate, newReservation.endDate, cost)
  const HandlePayment = () => {
    axios.post('http://localhost:5000/api/stripe/create-checkout-session', {
            completeCost: cost,
            brand: vehicleForOneDetailedPage.brand.name,
            vehicle: vehicleForOneDetailedPage.plateNumber,
            desc: vehicleForOneDetailedPage.description,
            image: vehicleForOneDetailedPage.image,
            // completeCost: 2020,
            // vehicle: "43bnw3",
            userId: getCustomer._id,
        }).then(res => {
            if(res.data.url){
                window.location.href = res.data.url
            }
        }).catch((error)=>{console.log(error.message)})
  }



  return (
    <div>
      <React.Fragment>
        <Button
          variant="outlined"
          ref={dialogRef}
          style={{ display: "none" }}
          onClick={handleClickOpen}
        >
          Open alert dialog
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Total Cost: {cost}</DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} color="error">Cancel</Button>
            <Button onClick={handleReserve} color="error" autoFocus>
              Reserve
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      <h1 style={{ marginLeft: "4%", textAlign: "center", marginTop: "120px" }}>
        Reservation of Car
      </h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (newReservation.endDate > newReservation.startDate) {
            // console.log(newReservation.endDate)
            const d1 = new Date(newReservation.startDate);
            const d2 = new Date(newReservation.endDate);

            // Calculate the difference in milliseconds
            const timeDifference = d2.getTime() - d1.getTime();

            // Convert the difference to days
            const daysDifference = Math.floor(
              timeDifference / (1000 * 60 * 60 * 24)
            );

            console.log(daysDifference);
            var netPrice = vehicleForOneDetailedPage.pricePerDay - vehicleForOneDetailedPage.discount
            console.log(netPrice)
            var totalcost = netPrice * daysDifference
            setCost(totalcost)
            dialogRef.current.click();
          } else {
            setShowAlert(true);
                setAlertData({
                  severity: "error",
                  message: "The End Date must be greater than the Start Date!",
                });
                setTimeout(() => {
                  setShowAlert(false);
                }, 3000);
            // alert("The End Date must be greater than the Start Date.");
          }
        }}
      >
        <div className="Name_Field">
          <h4 className="name_label">Name</h4>
          <input
            className="name_input"
            type="text"
            placeholder="Enter your Name"
            value={getCustomer.name}
            readOnly
          />
        </div>
        <div className="Name_Field">
          <h4 className="email_label">Email</h4>
          <input
            className="name_input"
            type="email"
            placeholder="Enter your Email"
            value={getCustomer.email}
            readOnly
          />
        </div>
        <div className="Name_Field">
          <h4 className="password_label">Plate Number</h4>
          <input
            className="name_input"
            type="text"
            placeholder="Enter the Car Plate Number"
            value={vehicleForOneDetailedPage.plateNumber}
            readOnly
          />
        </div>
        <div className="Name_Field">
          <h4 className="contact_label">Start Date</h4>
          <input
            className="name_input"
            type="date"
            placeholder="Enter the Contact"
            name="startDate"
            value={newReservation.startDate}
            onChange={OnChange}
            required
            style={{ cursor: "pointer" }}
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div className="Name_Field">
          <h4 className="username_label">End Date</h4>
          <input
            className="name_input"
            type="date"
            placeholder="Enter the Username"
            name="endDate"
            value={newReservation.endDate}
            onChange={OnChange}
            required
            style={{ cursor: "pointer" }}
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div className="Name_Field">
          <h4 className="address_label">Price per Day is :</h4>
          <h4 className="price">{vehicleForOneDetailedPage.pricePerDay}</h4>
        </div>
        <div className="button">
          <Button
            // disabled={!paymentButton}
            variant="contained"
            style={{
              backgroundColor: "red",
              fontWeight: "bold",
              paddingLeft: "5%",
              paddingRight: "5%",
              borderRadius: "4px",
              textTransform: "uppercase",
            }}
            onClick={() => {
              navigate("/customer/onevehiclepage");
            }}
          >
            Cancel
          </Button>
          <Button
            disabled={!paymentButton}
            variant="contained"
            style={{
              backgroundColor: "red",
              fontWeight: "bold",
              paddingLeft: "5%",
              paddingRight: "5%",
              borderRadius: "4px",
              textTransform: "uppercase",
            }}
            onClick={()=>{
              HandlePayment()
            }}
          >
            Payment
          </Button>
          {/* <For_Payment_Stripe /> */}
          <Button
            disabled={paymentButton}
            type="submit"
            variant="contained"
            style={{
              backgroundColor: "red",
              fontWeight: "bold",
              paddingLeft: "5%",
              paddingRight: "5%",
              borderRadius: "4px",
              textTransform: "uppercase",
            }}
          >
            Reserve Car
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Reservation_Vehicle_Customer;
