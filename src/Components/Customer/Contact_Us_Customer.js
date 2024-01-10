import React, { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import "../../ContactUs.css";
import { useNavigate } from "react-router-dom";
import { VehicleContext, FeedbackContext, CustomerContext, AlertContext } from "../../Context/AllContexts";
import Rating from '@mui/material/Rating';

const Contact_Us_Customer = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(1);

  const [newFeedback, setNewFeedback] = useState({
    vehicle: "",
    rating: "",
    message: "",
  });

  const vehiclecontext = useContext(VehicleContext);
  const feedbackcontext = useContext(FeedbackContext);
  const customercontext = useContext(CustomerContext)
  const alertcontext = useContext(AlertContext)

  const { setShowAlert, setAlertData } = alertcontext
  const { vehicles, fetchAllVehicles } = vehiclecontext;
  const { addNewFeedback } = feedbackcontext;
  const { getCustomer, GetCustomerData } = customercontext;

  useEffect(() => {
    if (localStorage.getItem("customerToken")) {
      GetCustomerData();
      fetchAllVehicles();
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

  const dropdownFunction = (event) => {
    vehicles.map((item) => {
      if (item.plateNumber === event.target.value) {
        setNewFeedback({...newFeedback, vehicle: item._id})
      }
    });
  };

  const OnChange = (e) => {
    setNewFeedback({...newFeedback, [e.target.name]: e.target.value})
  }

  const handleContactUs = (e) => {
    e.preventDefault();
    addNewFeedback(getCustomer._id, newFeedback.vehicle, newFeedback.rating, newFeedback.message)
    setShowAlert(true);
        setAlertData({
          severity: "success",
          message: "Feedback Send Successfully!",
        });
        setTimeout(() => {
          setShowAlert(false)
        }, 3000);
    setNewFeedback({
      vehicle: "",
      rating: "",
      message: "",
    })
  }

  return (
    <div className="Main_Page">
      <div className="one2_portion">
        <h2 className="Contact_Us_Heading">Contact Us :- </h2>
        <h5 className="Contact_Us_Paragaraph">
          If you want to get in touch with or contact us or give your feedback
          to us, then please fill out this form, so that we can get your
          feedback and your message. You can also give your feedback on our
          services. If you use our car earlier, then you can also give your
          feedback on the performance of the car.
        </h5>
      </div>
      <div className="contact2_portion">
        <div>
          <h2 style={{ marginLeft: "4%", textAlign: "center" }}>
            Form for Contact Us
          </h2>
          <form action="" onSubmit={handleContactUs}>
            <div className="Name_Field">
              <h4 className="namecontact_label">Name</h4>
              <input
                className="name_input"
                type="text"
                placeholder="Enter your Name"
                value={getCustomer.name}
                required
                readOnly
                name="customer"
              />
            </div>
            <div className="Name_Field">
              <h4 className="emailcontact_label">Email</h4>
              <input
                className="name_input"
                type="email"
                placeholder="Enter your Email"
                value={getCustomer.email}
                required
                readOnly
                name="email"
              />
            </div>
            <div className="Name_Field">
              <h4 className="carno_label">Car No.</h4>
              <select onChange={dropdownFunction} className="name_input">
                <option value="" disabled selected>
                  Select the Car Plate No.
                </option>
                {vehicles.map((element) => {
                  return <option key={element._id}>{element.plateNumber}</option>;
                })}
              </select>
            </div>
            <div className="Name_Field">
              <h4 className="ratingcontact_label">Rating</h4>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                  setNewFeedback({...newFeedback, rating: newValue})
                }}
                required
                size="100px"
                style={{ marginTop: "22px" }}
              />
            </div>
            <div className="Name_Field">
              <h4 className="message_label">Message</h4>
              <textarea
                className="name_input"
                type="text"
                placeholder="Enter your Message"
                name="message"
                required
                value={newFeedback.message}
                onChange={OnChange}
                style={{ fontFamily: "sans-serif", paddingTop: "4px" }}
              />
            </div>

            <div className="button">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "red",
                  fontWeight: "bold",
                  paddingLeft: "6%",
                  paddingRight: "6%",
                  borderRadius: "5px",
                  textTransform: "uppercase",
                }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "red",
                  fontWeight: "bold",
                  paddingLeft: "6%",
                  paddingRight: "6%",
                  borderRadius: "5px",
                  textTransform: "uppercase",
                }}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us_Customer;
