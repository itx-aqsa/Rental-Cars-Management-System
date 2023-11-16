import React from "react";
import "../../Home_Page_Customer.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

const Home_Section1_Customer = () => {
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState({
    to: "",
    subject: "",
    description: "",
  });

  const { to, subject, description } = user;

  const handleGetStarted = async () => {
    await axios
      .post("http://localhost:5000/api/reservations/sendEmail", user)
      .then((response) => setMsg(response.data.respMesg));
  };

  const navigate = useNavigate();

  return (
    <div className="Section1">
      <div>
        <h1 className="Section1_First">Find The Right Car For You</h1>
        <h4 className="Section1_Second">
          Discover your perfect ride. Choose from a diverse selection of cars
          tailored to your needs. Easy booking, seamless travel.
        </h4>
        <div>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            className="Section1_Button"
            style={{
              backgroundColor: "red",
              paddingLeft: "3%",
              paddingRight: "3%",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            onClick={() => {
              navigate('Login')
              // handleGetStarted();
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home_Section1_Customer;
