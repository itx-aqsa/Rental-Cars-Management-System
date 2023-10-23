const express = require('express')
const Report = require('../models/report')


const AddNewReport = async (req, res) => {
    try {
      const newReport = await Report.create({
        employee: req.body.employee,
        type: req.body.type,
      });
  
      res.send(newReport);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error.");
    }
  };
  
  const GetAllReports = async (req, res) => {
    try {
      const allReports = await Report.find()
        .populate("employee", "name")
        .exec();
      const activeReports = allReports.filter((report) => {
        return report.active == true;
      });
      res.send(activeReports);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error.");
    }
  };
  
  const RemoveReport = async (req, res) => {
      try {
          const reportId = req.params.id;
          const updatedData = {}
          updatedData.active = false
  
          const presentReport = await Report.findById(reportId)
          if(presentReport){
              const item = await Report.findByIdAndUpdate(reportId, {$set: updatedData}, {new: true})
  
              res.send(item)
          }
          else{
              res.send("This report is not present.");
          }
      } catch (error) {
          console.log(error.message);
          res.status(500).send("Internal Server Error.");
      }
  }
  
  
  module.exports = {
    AddNewReport,
    GetAllReports,
    RemoveReport
  };
  