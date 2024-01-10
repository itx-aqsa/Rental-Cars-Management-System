import React, { useContext, useEffect } from "react";
import "../../Home_Page_Customer.css";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Image from "../../Images/one.jpg";
import { useNavigate } from "react-router-dom";
import { VehicleContext } from "../../Context/AllContexts";

const Home_Section2_Customer = () => {
  const navigate = useNavigate();

  const Context = useContext(VehicleContext);
  const {
    vehicles,
    setVehicles,
    fetchAllVehicles,
    vehicleForOneDetailedPage,
    setVehicleForOneDetailedPage,
  } = Context;

  useEffect(() => {
    fetchAllVehicles();
  }, []);

  return (
    <div className="Section2">
      <h1 className="Section2_Heading">Find The Best Car For You</h1>
      <div className="Section2_Vehicles_Portion">
        {vehicles.length!=0?vehicles.map((car) => {
          return (
            <Card className="One_Card" key={car._id}>
              <div className="card_portion">
                <img
                  src={car.image[0]}
                  alt="Image is not Found."
                  className="Card_Image"
                />
                <div className="Card_Content_FirstLine">
                  <h2 className="vehicle_Brand">{car.brand.name}</h2>
                  <h4 className="vehicle_year">{car.year}</h4>
                </div>
                <div>
                  <div className="Card_Content_SecondLine">
                    <h4 className="vehicle_price_per_day">Price Per Day : </h4>
                    <h4 className="vehicle_price">{car.pricePerDay}</h4>
                  </div>
                  <div className="Card_Content_SecondLine">
                    <h4 className="vehicle_price_per_day">
                      Discount On Car :{" "}
                    </h4>
                    <h4 className="vehicle_price">{car.discount}</h4>
                  </div>
                  <div className="Card_Content_SecondLine">
                    <h4 className="vehicle_price_per_day">Status : </h4>
                    <h4 className="vehicle_price">{car.status}</h4>
                  </div>
                </div>
              </div>
              <CardActions>
                <div className="Card_Button">
                  <Button
                    variant=""
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      paddingLeft: "16%",
                      paddingRight: "16%",
                      fontSize: "16px",
                    }}
                    onClick={()=>{
                      setVehicleForOneDetailedPage({
                        id: car._id,
                        brand: car.brand,
                        year: car.year,
                        plateNumber: car.plateNumber,
                        image: car.image,
                        description: car.description,
                        status: car.status,
                        discount: car.discount,
                        pricePerDay: car.pricePerDay,
                      })
                      navigate("/customer/onevehiclepage")
                    }}
                  >
                    Read More
                  </Button>
                </div>
              </CardActions>
            </Card>
          );
        }): ""}
      </div>
    </div>
  );
};

export default Home_Section2_Customer;
