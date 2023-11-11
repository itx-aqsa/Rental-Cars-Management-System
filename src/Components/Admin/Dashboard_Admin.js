import React, { useContext } from 'react'
import "../../home_page.css"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FeedbackContext } from "../../Context/AllContexts";
import { CustomerContext } from "../../Context/AllContexts";
import { VehicleContext } from "../../Context/AllContexts";
import { ReservationContext } from "../../Context/AllContexts";
import { BrandContext } from "../../Context/AllContexts";

const Dashboard_Admin = () => {
  const navigate = useNavigate();

  const feedbackscontext = useContext(FeedbackContext)
  const customerscontext = useContext(CustomerContext)
  const vehiclescontext = useContext(VehicleContext)
  const reservationscontext = useContext(ReservationContext)
  const brandscontext = useContext(BrandContext)

  const { feedbacks, setFeedbacks, fetchAllFeedbacks } = feedbackscontext;
  const { confirmedReservations, setConfirmedReservations, fetchAllConfirmedReservations } = reservationscontext;
  const { customers, setCustomers, fetchAllCustomers } = customerscontext;
  const { vehicles, setVehicles, fetchAllVehicles, removeVehicle, vehicleToBeEdited, setVehicleToBeEdited } = vehiclescontext;
  const { brands, fetchAllBrands, removeBrand } = brandscontext;
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      fetchAllCustomers();
      fetchAllBrands();
      fetchAllVehicles();
      fetchAllConfirmedReservations();
      fetchAllFeedbacks();
    }
    else{
      alert("You have to Logged In into the system.")
      navigate('/Login')
    }
}, [])


  return (
    <div>
          <h2 style={{ marginLeft: "4%" }}>Dashboard</h2>
          <div className="Dashboard_Cards_Portion">
            <Card className="One_Card">
              <div className="Card_Portion">
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  className="Card_Portion_Number"
                >
                  {/* 5 */}
                  {customers.length}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="Card_Portion_Heading"
                >
                  Reg Customers
                </Typography>
              </div>
              <CardActions>
                <Link to="/admin/customers" className="Card_View_Details">
                  View Details
                </Link>
              </CardActions>
            </Card>
            <Card className="One_Card">
              <div className="Card_Portion">
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  className="Card_Portion_Number"
                >
                  {/* 2 */}
                  {vehicles.length}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="Card_Portion_Heading"
                >
                  Listed Vehicles
                </Typography>
              </div>
              <CardActions>
                <Link to="/admin/vehicles" className="Card_View_Details">
                  View Details
                </Link>
              </CardActions>
            </Card>
            <Card className="One_Card">
              <div className="Card_Portion">
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  className="Card_Portion_Number"
                >
                  {/* 4 */}
                  {confirmedReservations.length}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="Card_Portion_Heading"
                >
                  Total Bookings
                </Typography>
              </div>
              <CardActions>
                <Link to="/admin/bookings" className="Card_View_Details">
                  View Details
                </Link>
              </CardActions>
            </Card>
            <Card className="One_Card">
              <div className="Card_Portion">
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  className="Card_Portion_Number"
                >
                  {/* 1 */}
                  {brands.length}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="Card_Portion_Heading"
                >
                  Total Brands
                </Typography>
              </div>
              <CardActions>
                <Link to="/admin/brands" className="Card_View_Details">
                  View Details
                </Link>
              </CardActions>
            </Card>
            {/* sx={{ maxWidth: 240 }} */}
            <Card className="One_Card">
              <div className="Card_Portion">
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  className="Card_Portion_Number"
                >
                  {/* 6 */}
                  {feedbacks.length}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="Card_Portion_Heading"
                >
                  Customer Reviews
                </Typography>
              </div>
              <CardActions>
                <Link to="/admin/feedbacks" className="Card_View_Details">
                  View Details
                </Link>
              </CardActions>
            </Card>
          </div>
        </div>
  )
}

export default Dashboard_Admin
