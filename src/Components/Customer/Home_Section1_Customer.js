import React from "react";
import "../../Home_Page_Customer.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Slide, Fade } from "@mui/material";

import axios from "axios";

const Home_Section1_Customer = () => {
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState({
    to: "",
    subject: "",
    description: "",
  });

  const [open, setOpen] = React.useState(true);
  const [show, setShow] = React.useState(true);

  const handleToggleFade = () => {
    setShow(!show);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

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
        <Slide
          direction="right"
          in={open}
          timeout={500}
          mountOnEnter
          unmountOnExit
        >
          <h1 className="Section1_First">Find The Right Car For You</h1>
        </Slide>
        <Slide direction="left" in={open} timeout={500}>
          <h4 className="Section1_Second">
            Discover your perfect ride. Choose from a diverse selection of cars
            tailored to your needs. Easy booking, seamless travel.
          </h4>
        </Slide>
        <div>
          <Fade in={show} timeout={1000}>
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
                navigate("Login");
                // handleGetStarted();
              }}
            >
              Get Started
            </Button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home_Section1_Customer;
