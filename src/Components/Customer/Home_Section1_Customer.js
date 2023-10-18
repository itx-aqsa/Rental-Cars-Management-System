import React from "react";
import "../../Home_Page_Customer.css";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const Home_Section1_Customer = () => {
  return (
    <div className="Section1">
        <div>
      <h1 className="Section1_First">Find The Right Car For You</h1>
      <h4 className="Section1_Second">
        Discover your perfect ride. Choose from a diverse selection of cars
        tailored to your needs. Easy booking, seamless travel.
      </h4>
      <div>
      <Button variant="contained" endIcon={<SendIcon />} className="Section1_Button" style={{backgroundColor: 'red', paddingLeft: '3%', paddingRight: '3%', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '18px'}}>
        Get Started
      </Button>
      </div>
      </div>
    </div>
  );
};

export default Home_Section1_Customer;
