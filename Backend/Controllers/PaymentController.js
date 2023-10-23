const express = require('express')
const Payment = require('../models/payment')


const AddNewPayment = async (req, res) => {
    try {
      const newPayment = await Payment.create({
        customer: req.body.customer,
        method: req.body.method,
        amount: req.body.amount,
      });
  
      res.send(newPayment);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error.");
    }
  };
  
  const GetAllPayments = async (req, res) => {
    try {
      const allPayments = await Payment.find()
        .populate("customer", "name")
        .exec();
      const activePayments = allPayments.filter((payment) => {
        return payment.active == true;
      });
      res.send(activePayments);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error.");
    }
  };
  
  const RemovePayment = async (req, res) => {
      try {
          const paymentId = req.params.id;
          const updatedData = {}
          updatedData.active = false
  
          const presentPayment = await Payment.findById(paymentId)
          if(presentPayment){
              const item = await Payment.findByIdAndUpdate(paymentId, {$set: updatedData}, {new: true})
  
              res.send(item)
          }
          else{
              res.send("This payment is not present.");
          }
      } catch (error) {
          console.log(error.message);
          res.status(500).send("Internal Server Error.");
      }
  }
  
  
  module.exports = {
    AddNewPayment,
    GetAllPayments,
    RemovePayment
  };
  