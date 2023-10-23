const express = require('express')
const Notification = require('../models/notification')


const AddNewNotification = async (req, res) => {
    try {
      const newNotification = await Notification.create({
        customer: req.body.customer,
        title: req.body.title,
        message: req.body.message,
      });
  
      res.send(newNotification);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error.");
    }
  };
  
  const GetAllNotifications = async (req, res) => {
    try {
      const allNotifications = await Notification.find()
        .populate("customer", "name")
        .exec();
      const activeNotifications = allNotifications.filter((notification) => {
        return notification.active == true;
      });
      res.send(activeNotifications);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error.");
    }
  };
  
  const RemoveNotification = async (req, res) => {
      try {
          const notificationId = req.params.id;
          const updatedData = {}
          updatedData.active = false
  
          const presentNotification = await Notification.findById(notificationId)
          if(presentNotification){
              const item = await Notification.findByIdAndUpdate(notificationId, {$set: updatedData}, {new: true})
  
              res.send(item)
          }
          else{
              res.send("This notification is not present.");
          }
      } catch (error) {
          console.log(error.message);
          res.status(500).send("Internal Server Error.");
      }
  }
  
  
  module.exports = {
    AddNewNotification,
    GetAllNotifications,
    RemoveNotification
  };
  