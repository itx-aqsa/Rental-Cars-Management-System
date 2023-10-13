import React from "react";
import "../Signup.css";
import Button from '@mui/material/Button';

const SignUp = () => {
  return (
    <div>
      <h1 className="Main_Heading">Rental Cars</h1>
      <div className="Container">
        <h2 className="Container_Heading">Create New Account</h2>
        <form action="">
          <div className="Name_Field">
            <h4 className="name_label">Name</h4>
            <input
              className="name_input"
              type="text"
              placeholder="Enter your Name"
            />
          </div>
          <div className="Name_Field">
            <h4 className="email_label">Email</h4>
            <input
              className="name_input"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="Name_Field">
            <h4 className="password_label">Password</h4>
            <input
              className="name_input"
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          <div className="Name_Field">
            <h4 className="contact_label">Contact</h4>
            <input
              className="name_input"
              type="text"
              placeholder="Enter your Contact"
            />
          </div>
          <div className="Name_Field">
            <h4 className="username_label">Username</h4>
            <input
              className="name_input"
              type="text"
              placeholder="Enter your Username"
            />
          </div>
          <div className="Name_Field">
            <h4 className="address_label">Address</h4>
            <textarea
              className="name_input"
              type="text"
              placeholder="Enter your Address"
              style={{ fontFamily: "sans-serif", paddingTop: "8px" }}
            />
          </div>
          <div className="Name_Field">
            <h4 className="confirmation_label">Confirmation</h4>
            <input
              className="name_input"
              type="password"
              placeholder="Confirm your Password"
            />
          </div>
          <div className="button">
          <Button type="submit" variant="contained"style={{backgroundColor: 'red', fontWeight: 'bold', paddingLeft: '18%', paddingRight: '18%', borderRadius: '6px', textTransform: 'uppercase'}}>Create Account</Button>
          </div>
        </form>
        <div className="login_line">
          <h4 className="login_label">Already have an Account :- </h4> &nbsp; &nbsp;
          <a href="#" className="login_button">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
