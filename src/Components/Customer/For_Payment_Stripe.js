import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Button from "@mui/material/Button";

const For_Payment_Stripe = () => {

    const cartItems = [
        {
            product: 'bat',
            price: 300
        },
        {
            product: 'football',
            price: 400
        }
    ]

    const HandleCheckout = () => {
        axios.post('http://localhost:5000/api/stripe/create-checkout-session', {
            cartItems,
            userId: "653921a242a2f0a84b5e7565"
        }).then(res => {
            if(res.data.url){
                window.location.href = res.data.url
            }
        }).catch((error)=>{console.log(error.message)})
    }

  return (
    <div>
      <Button
            variant="contained"
            style={{
              backgroundColor: "red",
              fontWeight: "bold",
              paddingLeft: "5%",
              paddingRight: "5%",
              borderRadius: "4px",
              textTransform: "uppercase",
              marginTop: '200px'
            }}
            onClick={()=>{
              HandleCheckout()
            }}
          >
            Check Out
          </Button>
    </div>
  )
}

export default For_Payment_Stripe
