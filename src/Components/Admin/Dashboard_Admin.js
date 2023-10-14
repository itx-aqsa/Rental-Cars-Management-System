import React from 'react'
import "../../home_page.css"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Dashboard_Admin = () => {
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
                  5
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
                <a href="#" className="Card_View_Details">
                  View Details
                </a>
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
                  2
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
                <a href="#" className="Card_View_Details">
                  View Details
                </a>
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
                  4
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
                <a href="#" className="Card_View_Details">
                  View Details
                </a>
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
                  1
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
                <a href="#" className="Card_View_Details">
                  View Details
                </a>
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
                  6
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
                <a href="#" className="Card_View_Details">
                  View Details
                </a>
              </CardActions>
            </Card>
          </div>
        </div>
  )
}

export default Dashboard_Admin
