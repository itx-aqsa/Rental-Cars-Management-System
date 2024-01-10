import React, { useState, useContext } from "react";
import "../Signup.css";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../Context/AllContexts";
import AlertBar from "./Alert";

const SignUp = () => {
  const navigate = useNavigate();

  const alertcontext = useContext(AlertContext);
  const { alertData, setAlertData, showAlert, setShowAlert } = alertcontext;

  const [credentials, setCredentials] = useState(
    {
      name: "",
      email: "",
      password: "",
      contact: "",
      username: "",
      address: "",
      confirmPassword: ""
    }
  )

  const OnChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }

  const SignUpFunction = async (e) => {
    e.preventDefault();
    console.log(credentials);

    if(credentials.password === credentials.confirmPassword){
      const response = await fetch("http://localhost:5000/api/customers/addNewCustomer", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          contact: credentials.contact,
          address: credentials.address,
          username: credentials.username
        }),
      });

      const json = await response.json()
      console.log(json);

      if(json.Success){
        setShowAlert(true);
        setAlertData({
          severity: "success",
          message: "Account Created Successfully!",
        });
        setTimeout(() => {
          setShowAlert(false)
        }, 3000);
        localStorage.setItem('customerToken', json.customerToken)
        navigate('/')
      }
      else{
        setShowAlert(true);
        setAlertData({
          severity: "error",
          message: "Invalid Details!",
        });
        setTimeout(() => {
          setShowAlert(false)
        }, 3000);
      }
    }
    else{
      setShowAlert(true);
        setAlertData({
          severity: "error",
          message: "Please use the same password as password and confirm password.!",
        });
        setTimeout(() => {
          setShowAlert(false)
        }, 3000);
    }
    
  }

  return (
    <div>
      {showAlert&&<AlertBar />}
      <h1 className="Main_Heading">Rental Cars</h1>
      <div className="Container">
        <h2 className="Container_Heading">Create New Account</h2>
        <form action="" onSubmit={SignUpFunction}>
          <div className="Name_Field">
            <h4 className="namesignup_label">Name</h4>
            <input
              className="name_input"
              name="name"
              type="text"
              placeholder="Enter your Name"
              value={credentials.name}
              required
              minLength={3}
              onChange={OnChange}
            />
          </div>
          <div className="Name_Field">
            <h4 className="emailsignup_label">Email</h4>
            <input
              className="name_input"
              name="email"
              type="email"
              placeholder="Enter your Email"
              value={credentials.email}
              required
              onChange={OnChange}
            />
          </div>
          <div className="Name_Field">
            <h4 className="passwordsignup_label">Password</h4>
            <input
              className="name_input"
              name="password"
              type="password"
              placeholder="Enter your Password"
              value={credentials.password}
              required
              minLength={3}
              onChange={OnChange}
            />
          </div>
          <div className="Name_Field">
            <h4 className="contactsignup_label">Contact</h4>
            <input
              className="name_input"
              name="contact"
              type="text"
              placeholder="Enter your Contact"
              value={credentials.contact}
              required
              minLength={7}
              onChange={OnChange}
            />
          </div>
          <div className="Name_Field">
            <h4 className="usernamesignup_label">Username</h4>
            <input
              className="name_input"
              name="username"
              type="text"
              placeholder="Enter your Username"
              value={credentials.username}
              required
              minLength={3}
              onChange={OnChange}
            />
          </div>
          <div className="Name_Field">
            <h4 className="addresssignup_label">Address</h4>
            <textarea
              className="name_input"
              name="address"
              type="text"
              placeholder="Enter your Address"
              style={{ fontFamily: "sans-serif", paddingTop: "8px" }}
              value={credentials.address}
              required
              minLength={3}
              onChange={OnChange}
            />
          </div>
          <div className="Name_Field">
            <h4 className="confirmationsignup_label">Confirmation</h4>
            <input
              className="name_input"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your Password"
              value={credentials.confirmPassword}
              required
              minLength={3}
              onChange={OnChange}
            />
          </div>
          <div className="buttonsignup">
          <Button type="submit" variant="contained"style={{backgroundColor: 'red', fontWeight: 'bold', paddingLeft: '18%', paddingRight: '18%', borderRadius: '6px', textTransform: 'uppercase'}}>Create Account</Button>
          </div>
        </form>
        <div className="login_line">
          <h4 className="login_label">Already have an Account :- </h4> &nbsp; &nbsp;
          <Link to="/Login" className="login_button">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
