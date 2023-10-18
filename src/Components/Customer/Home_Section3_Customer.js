import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Avatar from '@mui/material/Avatar';
import "../../Home_Page_Customer.css";

const Home_Section3_Customer = () => {
  return (
    <div className="Bottom_Navbar">
      <div className="Bottom_navbar_content">
        <h3 className="Bottom_navbar_contactus">Contact Us At :-</h3>
        <a href="#"><i style={{color:"white", cursor: 'pointer', marginTop: '32px', marginLeft: '28px'}} className="fa-brands fa-facebook fa-xl"></i></a>
        <a href="#"><i style={{color:"white", cursor: 'pointer', marginTop: '32px', marginLeft: '28px'}} className="fa-brands fa-twitter fa-xl"></i></a>
      </div>
    </div>
  );
};

export default Home_Section3_Customer;
