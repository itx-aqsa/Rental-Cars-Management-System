import React from "react";
import Button from "@mui/material/Button";
import image from "../../Images/one.jpg";
import "../../One_Vehicle_Page.css";

const One_Vehicle_Page_Customer = () => {
  return (
    <div className="Main_Page">
      <div className="image_portion">
        <img src={image} alt="Image is not found." className="Image" />
      </div>
      <div className="information_portion">
        <div className="first_line">
          <h2 className="brand">Toyoto Model</h2>
          <h4 className="year">2022</h4>
        </div>
        <p className="description">
          This is the toyota model car whose mileage is very good and it also
          has the music system and also a wifi network system.
        </p>
        <div className="second_line">
          <h3 className="BrandName">Brand : </h3>
          <h3>Toyota</h3>
        </div>
        <div className="second_line">
          <h3 className="pricename">Price per Day : </h3>
          <h3>$200</h3>
        </div>
        <div className="second_line">
          <h3 className="discountname">Discount on Car : </h3>
          <h3>$0</h3>
        </div>
        <div className="second_line">
          <h3 className="statusname">Availability Status : </h3>
          <h3>Available</h3>
        </div>
        <div className="second_line">
          <h3 className="platename">Plate Number : </h3>
          <h3>1234</h3>
        </div>
        <div className="button_line">
          <Button
            variant=""
            style={{
              backgroundColor: "red",
              color: "white",
              fontWeight: "bold",
              textTransform: "uppercase",
              paddingLeft: "8%",
              paddingRight: "8%",
              fontSize: "16px",
            }}
          >
            Cancel
          </Button>
          <Button
            variant=""
            style={{
              backgroundColor: "red",
              color: "white",
              fontWeight: "bold",
              textTransform: "uppercase",
              paddingLeft: "8%",
              paddingRight: "8%",
              fontSize: "16px",
            }}
          >
            Reserve Car
          </Button>
        </div>
      </div>
    </div>
  );
};

export default One_Vehicle_Page_Customer;
