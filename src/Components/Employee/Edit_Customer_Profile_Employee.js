import React, { useState, useEffect, useContext } from 'react'
import Button from '@mui/material/Button'
import '../../edit_customer_profile.css'
import { useNavigate } from 'react-router-dom'
import { CustomerContext } from '../../Context/AllContexts'

const Edit_Customer_Profile_Employee = () => {
  const navigate = useNavigate();

  const Context = useContext(CustomerContext)
  const { customers, setCustomers, fetchAllCustomers, customerToBeEdited, setCustomerToBeEdited, editCustomer } = Context

  const [newCustomer, setNewCustomer] = useState({
    name: customerToBeEdited.name,
    password: customerToBeEdited.password,
    contact: customerToBeEdited.contact,
    username: customerToBeEdited.username,
    address: customerToBeEdited.address
  })
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      fetchAllCustomers();
    }
    else{
      alert("You have to Logged In into the system.")
      navigate('/Login')
    }
}, [])


  const EditPresentCustomer = (e) => {
    e.preventDefault();
    editCustomer(customerToBeEdited.id, newCustomer.name, newCustomer.password, newCustomer.contact, newCustomer.username, newCustomer.address)
    alert("Customer Edited Successfully!");
    navigate("/employee/customers")
  }

  const OnChange = (e) =>{
    setNewCustomer({...newCustomer, [e.target.name]: e.target.value})
  }



  return (
    <div>
        <h2 style={{ marginLeft: "4%", textAlign: 'center' }}>Edit Customer Profile</h2>
      <form action="" onSubmit={EditPresentCustomer} >
          <div className="Name_Field">
            <h4 className="nameeditcust_label">Name</h4>
            <input
              className="name_input"
              type="text"
              placeholder="Enter the Name"
              name='name'
              required
              value={newCustomer.name}
              onChange={OnChange}
              minLength={3}
            />
          </div>
          <div className="Name_Field">
            <h4 className="passwordeditcust_label">Password</h4>
            <input
              className="name_input"
              type="password"
              placeholder="Enter the Password"
              name='password'
              required
              value={newCustomer.password}
              onChange={OnChange}
              minLength={3}
            />
          </div>
          <div className="Name_Field">
            <h4 className="contacteditcust_label">Contact</h4>
            <input
              className="name_input"
              type="text"
              placeholder="Enter the Contact"
              name='contact'
              required
              value={newCustomer.contact}
              onChange={OnChange}
              minLength={7}
            />
          </div>
          <div className="Name_Field">
            <h4 className="usernameeditcust_label">Username</h4>
            <input
              className="name_input"
              type="text"
              placeholder="Enter the Username"
              name='username'
              required
              value={newCustomer.username}
              onChange={OnChange}
              minLength={3}
            />
          </div>
          <div className="Name_Field">
            <h4 className="addresseditcust_label">Address</h4>
            <textarea
              className="name_input"
              type="text"
              placeholder="Enter the Address"
              name='address'
              required
              value={newCustomer.address}
              onChange={OnChange}
              minLength={3}
              style={{ fontFamily: "sans-serif", paddingTop: "4px" }}
            />
          </div>
          <div className="buttoneditcust">
          <Button variant="contained"style={{backgroundColor: 'red', fontWeight: 'bold', paddingLeft: '6%', paddingRight: '6%', borderRadius: '5px', textTransform: 'uppercase'}} onClick={()=>{navigate('/employee/customers')}} >Cancel</Button>
          <Button type="submit" variant="contained"style={{backgroundColor: 'red', fontWeight: 'bold', paddingLeft: '6%', paddingRight: '6%', borderRadius: '5px', textTransform: 'uppercase'}}>Save Changes</Button>
          </div>
        </form>
    </div>
  )
}

export default Edit_Customer_Profile_Employee
