import React, { useState, useEffect, useContext } from 'react'
import Button from '@mui/material/Button'
import '../../Adding.css'
import { useNavigate } from 'react-router-dom'
import { EmployeeContext } from '../../Context/AllContexts'

const Add_Employee_Admin = () => {
  const navigate = useNavigate();
  const Context = useContext(EmployeeContext)

  const { employees, addNewEmployee } = Context

  const [newEmployee, setNewEmployee] = useState({ 
    name: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    username: "",
  })

  useEffect(() => {
    if(localStorage.getItem('token')){
      
    }
    else{
      alert("You have to Logged In into the system.")
      navigate('/Login')
    }
  }, [])

  const OnChange = (e) => {
    setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
  }

  const AddNewEmployee = (e) => {
    e.preventDefault();
    addNewEmployee(newEmployee.name, newEmployee.email, newEmployee.password, newEmployee.contact, newEmployee.address, newEmployee.username )
    alert("Employee Added Successfully!")
    navigate('/admin/employees')
  }

  return (
    <div>
        <h2 style={{ marginLeft: "4%", textAlign: 'center' }}>Add Employee</h2>
      <form action="" onSubmit={AddNewEmployee}>
          <div className="Name_Field">
            <h4 className="nameaddemp_label">Name</h4>
            <input
              className="name_input"
              type="text"
              name='name'
              placeholder="Enter the Name"
              required
              value={newEmployee.name}
              onChange={OnChange}
              minLength={3}
            />
          </div>
          <div className="Name_Field">
            <h4 className="emailaddemp_label">Email</h4>
            <input
              className="name_input"
              type="email"
              name='email'
              placeholder="Enter the Email"
              required
              value={newEmployee.email}
              onChange={OnChange}
            />
          </div>
          <div className="Name_Field">
            <h4 className="passwordaddemp_label">Password</h4>
            <input
              className="name_input"
              type="password"
              name='password'
              placeholder="Enter the Password"
              required
              value={newEmployee.password}
              onChange={OnChange}
              minLength={3}
            />
          </div>
          <div className="Name_Field">
            <h4 className="contactaddemp_label">Contact</h4>
            <input
              className="name_input"
              type="text"
              name='contact'
              placeholder="Enter the Contact"
              required
              value={newEmployee.contact}
              onChange={OnChange}
              minLength={7}
            />
          </div>
          <div className="Name_Field">
            <h4 className="usernameaddemp_label">Username</h4>
            <input
              className="name_input"
              type="text"
              name='username'
              placeholder="Enter the Username"
              required
              value={newEmployee.username}
              onChange={OnChange}
              minLength={3}
            />
          </div>
          <div className="Name_Field">
            <h4 className="addressaddemp_label">Address</h4>
            <textarea
              className="name_input"
              type="text"
              name='address'
              placeholder="Enter the Address"
              required
              value={newEmployee.address}
              onChange={OnChange}
              minLength={3}
              style={{ fontFamily: "sans-serif", paddingTop: "4px" }}
            />
          </div>
          <div className="buttonaddemp">
          <Button variant="contained"style={{backgroundColor: 'red', fontWeight: 'bold', paddingLeft: '6%', paddingRight: '6%', borderRadius: '5px', textTransform: 'uppercase'}} onClick={()=>{navigate('/admin/employees')}} >Cancel</Button>
          <Button type="submit" variant="contained"style={{backgroundColor: 'red', fontWeight: 'bold', paddingLeft: '6%', paddingRight: '6%', borderRadius: '5px', textTransform: 'uppercase'}}>Add Employee</Button>
          </div>
        </form>
    </div>
  )
}

export default Add_Employee_Admin
