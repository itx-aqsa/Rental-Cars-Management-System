import React from 'react'
import Button from '@mui/material/Button'
import '../../Adding.css'

const Edit_Customer_Profile_Employee = () => {
  return (
    <div>
        <h2 style={{ marginLeft: "4%", textAlign: 'center' }}>Edit Customer Profile</h2>
      <form action="">
          <div className="Name_Field">
            <h4 className="name_label">Name</h4>
            <input
              className="name_input"
              type="text"
              placeholder="Enter the Name"
            />
          </div>
          <div className="Name_Field">
            <h4 className="email_label">Email</h4>
            <input
              className="name_input"
              type="email"
              placeholder="Enter the Email"
            />
          </div>
          <div className="Name_Field">
            <h4 className="password_label">Password</h4>
            <input
              className="name_input"
              type="password"
              placeholder="Enter the Password"
            />
          </div>
          <div className="Name_Field">
            <h4 className="contact_label">Contact</h4>
            <input
              className="name_input"
              type="text"
              placeholder="Enter the Contact"
            />
          </div>
          <div className="Name_Field">
            <h4 className="username_label">Username</h4>
            <input
              className="name_input"
              type="text"
              placeholder="Enter the Username"
            />
          </div>
          <div className="Name_Field">
            <h4 className="address_label">Address</h4>
            <textarea
              className="name_input"
              type="text"
              placeholder="Enter the Address"
              style={{ fontFamily: "sans-serif", paddingTop: "4px" }}
            />
          </div>
          <div className="button">
          <Button type="submit" variant="contained"style={{backgroundColor: 'red', fontWeight: 'bold', paddingLeft: '6%', paddingRight: '6%', borderRadius: '5px', textTransform: 'uppercase'}}>Cancel</Button>
          <Button type="submit" variant="contained"style={{backgroundColor: 'red', fontWeight: 'bold', paddingLeft: '6%', paddingRight: '6%', borderRadius: '5px', textTransform: 'uppercase'}}>Save Changes</Button>
          </div>
        </form>
    </div>
  )
}

export default Edit_Customer_Profile_Employee
