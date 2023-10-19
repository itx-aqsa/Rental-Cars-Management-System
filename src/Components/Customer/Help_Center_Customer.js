import React from "react";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "../../Help_Center.css";
import image from "../../Images/tow.jpeg";

const Help_Center_Customer = () => {
  return (
    <div className="Main_Page">
      <div className="one_portion">
        <h2 className="Contact_Us_Heading">Help Center :- </h2>
        <p className="First_Paragraph">
          Welcome to our Help Center! We're here to assist you with any
          questions or concerns you may have about our car rental service.
          Below, you'll find answers to frequently asked questions and helpful
          resources to make your rental experience smooth and enjoyable.
        </p>
        <p className="Contact_Us_Paragaraph">
          To make a reservation, simply visit our website and use our
          user-friendly booking system. Select your pickup and drop-off
          locations, choose your preferred car, and enter your rental dates.
          Follow the prompts to complete your reservation.
        </p>
        <p className="Contact_Us_Paragaraph">
          You can cancel your reservation up to 24 hours in advance to avoid
          cancellation fees. Please refer to our cancellation policy for more
          details.
        </p>
        <p className="Contact_Us_Paragaraph">
          If you need to extend your rental, please contact our customer support
          team as soon as possible. We'll do our best to accommodate your
          request, subject to availability.
        </p>
        <p className="First_Paragraph">
          If you have any questions or need assistance, our customer support
          team is available 24/7. You can reach us at:
        </p>

        <div className="For_Phone">
            <h4 className="Phonename">Phone : </h4>
            <h4 className="Phonenumber">12345678</h4>
        </div>
        <div className="For_Email">
            <h4 className="Emailname">Email : </h4>
            <h4 className="Emailaddress">RentalCars@gmail.com</h4>
        </div>
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
            marginTop: "50px",
            marginLeft: "10%",
          }}
        >
          Cancel
        </Button>
      </div>
      <div className="contact_portion">
        <img src={image} className="Image" alt="Image is not found." />
      </div>
    </div>
  );
};

export default Help_Center_Customer;
