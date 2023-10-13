import React from 'react'
import "../Login.css"
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <div>
      <h1 className="Main_Heading">Rental Cars</h1>
      <div className="Container">
        <h2 className="Container_Heading">Log In</h2>
        <form action="">
          
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
          
          <div className="button">
          <Button type="submit" variant="contained"style={{backgroundColor: 'red', fontWeight: 'bold', paddingLeft: '20%', paddingRight: '20%', borderRadius: '6px', textTransform: 'uppercase'}}>Log In</Button>
          </div>
        </form>
        <div className="login_line">
          <h4 className="login_label">Don't have an Account :- </h4> &nbsp; &nbsp;
          <a href="#" className="login_button">Sign Up</a>
        </div>
      </div>
    </div>
  )
}

export default Login
