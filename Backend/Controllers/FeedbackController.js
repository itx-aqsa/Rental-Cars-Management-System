const express = require("express");
const Feedback = require("../models/feedback");

const AddNewFeedback = async (req, res) => {
  try {
    const newFeedback = await Feedback.create({
      customer: req.body.customer,
      vehicle: req.body.vehicle,
      rating: req.body.rating,
      message: req.body.message,
    });

    res.send(newFeedback);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
};

const GetAllFeedbacks = async (req, res) => {
  try {
    const allFeedbacks = await Feedback.find()
      .populate("customer", "name")
      .populate("vehicle", "plateNumber")
      .exec();
    const activeFeedbacks = allFeedbacks.filter((feedback) => {
      return feedback.active == true;
    });
    res.send(activeFeedbacks);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
};

const RemoveFeedback = async (req, res) => {
    try {
        const feedbackId = req.params.id;
        const updatedData = {}
        updatedData.active = false

        const presentFeedback = await Feedback.findById(feedbackId)
        if(presentFeedback){
            const item = await Feedback.findByIdAndUpdate(feedbackId, {$set: updatedData}, {new: true})

            res.send(item)
        }
        else{
            res.send("This feedback is not present.");
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error.");
    }
}


module.exports = {
  AddNewFeedback,
  GetAllFeedbacks,
  RemoveFeedback
};
