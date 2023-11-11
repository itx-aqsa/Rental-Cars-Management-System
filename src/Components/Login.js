import React, { useState } from 'react'
import "../Login.css"
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const LogInFunction = async (e) => {
    e.preventDefault();
    console.log(credentials);

    const response = await fetch("http://localhost:5000/api/customers/login", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await response.json()
      console.log(json)

      if(json.Success){
        alert('Logged In Successfully!');
        if(json.role === 'Admin'){
          localStorage.setItem('token', json.adminToken)
          navigate('/admin')
        }
        else if(json.role === 'Employee'){
          localStorage.setItem('token', json.employeeToken)
          navigate('/employee')
        }
        else if(json.role === 'Customer'){
          localStorage.setItem('customerToken', json.customerToken)
          navigate('/')
        }
      }
      else{
        alert("Invalid Details!")
      }
  }

  const OnChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }
  return (
    <div>
      <h1 className="Main_Heading">Rental Cars</h1>
      <div className="Container">
        <h2 className="Container_Heading">Log In</h2>
        <form action="" onSubmit={LogInFunction}>
          
          <div className="Name_Field">
            <h4 className="emaillogin_label">Email</h4>
            <input
              className="name_input"
              name= "email"
              type="email"
              placeholder="Enter your Email"
              required
              value={credentials.email}
              onChange={OnChange}
            />
          </div>
          <div className="Name_Field">
            <h4 className="passwordlogin_label">Password</h4>
            <input
              className="name_input"
              name='password'
              type="password"
              placeholder="Enter your Password"
              required
              minLength={3}
              value={credentials.password}
              onChange={OnChange}
            />
          </div>
          
          <div className="buttonlogin">
          <Button type="submit" variant="contained"style={{backgroundColor: 'red', fontWeight: 'bold', paddingLeft: '20%', paddingRight: '20%', borderRadius: '6px', textTransform: 'uppercase'}}>Log In</Button>
          </div>
        </form>
        <div className="login_line">
          <h4 className="login_label">Don't have an Account :- </h4> &nbsp; &nbsp;
          <Link to="/Signup" className="login_button">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
