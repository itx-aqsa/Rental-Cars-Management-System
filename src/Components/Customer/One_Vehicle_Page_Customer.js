import React, { useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import image from "../../Images/one.jpg";
import image2 from "../../Images/tow.jpeg";
import image3 from "../../Images/home_page_car.png";
import "../../One_Vehicle_Page.css";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { VehicleContext } from "../../Context/AllContexts";

const One_Vehicle_Page_Customer = () => {
  const navigate = useNavigate();

  const Context = useContext(VehicleContext);
  const { vehicleForOneDetailedPage, setVehicleForOneDetailedPage } = Context;

  useEffect(() => {
    if (localStorage.getItem("customerToken")) {
      
    } else {
      alert("You have to Logged In into the system.");
      navigate("/Login");
    }
  }, []);

  return (
    <div className="Main_Page">
      <div className="image_portion">
        <Carousel infiniteLoop>
          {vehicleForOneDetailedPage.image.map((img) => {
            return (
              <div>
                <img src={img} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="information_portion">
        <div className="first_line">
          <h2 className="brand">{vehicleForOneDetailedPage.brand.name}</h2>
          <h4 className="year">{vehicleForOneDetailedPage.year}</h4>
        </div>
        <p className="description">{vehicleForOneDetailedPage.description}</p>
        <div className="second_line">
          <h3 className="BrandName">Brand : </h3>
          <h3>{vehicleForOneDetailedPage.brand.name}</h3>
        </div>
        <div className="second_line">
          <h3 className="pricename">Price per Day : </h3>
          <h3>{vehicleForOneDetailedPage.pricePerDay}</h3>
        </div>
        <div className="second_line">
          <h3 className="discountname">Discount on Car : </h3>
          <h3>{vehicleForOneDetailedPage.discount}</h3>
        </div>
        <div className="second_line">
          <h3 className="statusname">Availability Status : </h3>
          <h3>{vehicleForOneDetailedPage.status}</h3>
        </div>
        <div className="second_line">
          <h3 className="platename">Plate Number : </h3>
          <h3>{vehicleForOneDetailedPage.plateNumber}</h3>
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
            onClick={() => {
              navigate("/");
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
            onClick={() => {
              if(vehicleForOneDetailedPage.status === 'Not Available'){
                alert("This car is not available this time.")
              }
              else{
                navigate("/customer/reservationvehicle");
              }
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
