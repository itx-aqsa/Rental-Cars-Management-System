import React from 'react'
import Button from '@mui/material/Button'
import '../../Reservation_Customer.css'

const Reservation_Vehicle_Customer = () => {
  return (
    <div>
        <h1 style={{ marginLeft: "4%", textAlign: 'center', marginTop: '60px' }}>Reservation of Car</h1>
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
            <h4 className="password_label">Plate Number</h4>
            <input
              className="name_input"
              type="text"
              placeholder="Enter the Car Plate Number"
            />
          </div>
          <div className="Name_Field">
            <h4 className="contact_label">Start Date</h4>
            <input
              className="name_input"
              type="date"
              placeholder="Enter the Contact"
            />
          </div>
          <div className="Name_Field">
            <h4 className="username_label">End Date</h4>
            <input
              className="name_input"
              type="date"
              placeholder="Enter the Username"
            />
          </div>
          <div className="Name_Field">
            <h4 className="address_label">Total Price is :</h4>
            <h4 className='price'>$200</h4>
          </div>
          <div className="button">
          <Button type="submit" variant="contained"style={{backgroundColor: 'red', fontWeight: 'bold', paddingLeft: '5%', paddingRight: '5%', borderRadius: '4px', textTransform: 'uppercase'}}>Cancel</Button>
          <Button type="submit" variant="contained"style={{backgroundColor: 'red', fontWeight: 'bold', paddingLeft: '5%', paddingRight: '5%', borderRadius: '4px', textTransform: 'uppercase'}}>Payment</Button>
          <Button type="submit" variant="contained"style={{backgroundColor: 'red', fontWeight: 'bold', paddingLeft: '5%', paddingRight: '5%', borderRadius: '4px', textTransform: 'uppercase'}}>Reserve Car</Button>
          </div>
        </form>
    </div>
  )
}

export default Reservation_Vehicle_Customer
