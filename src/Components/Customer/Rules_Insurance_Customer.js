import React from "react";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "../../Rules_Insurance.css";
import image from '../../Images/tow.jpeg'

const Rules_Insurance_Customer = () => {
  return (
    <div className="Main_Page">
      <div className="one_portion">
        <h2 className="Contact_Us_Heading">Rules and Insurance Policies :- </h2>
        <p className="Contact_Us_Paragaraph">
          Only individuals aged 21 and above are eligible to rent a car. Drivers
          under 25 may be subject to a young driver's surcharge. A major credit
          card in the renter's name is required for payment and security deposit
          purposes.
        </p>
        <p className="Contact_Us_Paragaraph">
          Reservations should be made in advance. Walk-in rentals are subject to
          availability.
        </p>
        <p className="Contact_Us_Paragaraph">
          Cancellation of reservations should be made at least 24 hours in
          advance to avoid cancellation fees.
        </p>
        <p className="Contact_Us_Paragaraph">
          Provides coverage for bodily injury and property damage to third
          parties in the event of an accident caused by the renter.
        </p>
        <p className="Contact_Us_Paragaraph">
          Provides assistance in case of breakdowns, flat tires, or other
          non-accident-related issues.
        </p>
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
                  marginTop: '50px',
                  marginLeft: '10%'
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

export default Rules_Insurance_Customer;
