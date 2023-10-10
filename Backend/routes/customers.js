const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");
const Employee = require("../models/employee");
var jwt = require("jsonwebtoken");
const fetchUser = require("../middlewares/fetchUser");

const JWT_Secret = "Iamaboy.";

const AddNewCustomer = async (req, res) => {
  try {
    const newCustomer = await Customer.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      contact: req.body.contact,
      address: req.body.address,
      username: req.body.username,
    });

    const data = {
      customer: {
        id: newCustomer.id,
      },
    };

    var customerToken = jwt.sign(data, JWT_Secret);

    res.json({ newCustomer, customerToken });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
}

const LoginCustomer = async (req, res) => {
  try {
    if (
      req.body.email == "zaeemahmad2603@gmail.com" &&
      req.body.password == "713000"
    ) {
      const foundedAdmin = await Employee.findOne({ email: req.body.email });
      const data = {
        admin: {
          id: foundedAdmin.id,
        },
      };
      const adminToken = jwt.sign(data, JWT_Secret);
      res.json({ foundedAdmin, adminToken });
    } else {
      const foundedEmployee = await Employee.findOne({ email: req.body.email });
      if (foundedEmployee) {
        console.log("This is an Employee.");
        console.log(foundedEmployee);
        if (foundedEmployee.password == req.body.password) {
          const data = {
            employee: {
              id: foundedEmployee.id,
            },
          };
          const employeeToken = jwt.sign(data, JWT_Secret);
          res.json({ foundedEmployee, employeeToken });
        } else {
          res.json({ Failure: "Please Enter the right password." });
        }
      } else {
        const foundedCustomer = await Customer.findOne({
          email: req.body.email,
        });
        if (foundedCustomer) {
          console.log("This is a Customer.");
          console.log(foundedCustomer);
          if (foundedCustomer.password == req.body.password) {
            const data = {
              customer: {
                id: foundedCustomer.id,
              },
            };
            const customerToken = jwt.sign(data, JWT_Secret);
            res.json({ foundedCustomer, customerToken });
          } else {
            res.json({ Failure: "Please Enter the right password." });
          }
        } else {
          res.status(400);
          res.json({ error: "User for this email is not present." });
        }
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
}

const GetAllCustomers = async (req, res) => {
  try {
    var userId = req.user.id;
    const presentCustomer = await Customer.findById(userId).select("-password");
    res.json(presentCustomer);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
}

const EditCustomer = async (req, res) => {
  try {
    var userId = req.params.id;
    const presentCustomer = await Customer.findById(userId);

    const updatedData = {};
    if (req.body.name) {
      updatedData.name = req.body.name;
      updatedData.updatedDate = Date.now();
    }
    if (req.body.password) {
      updatedData.password = req.body.password;
      updatedData.updatedDate = Date.now();
    }
    if (req.body.contact) {
      updatedData.contact = req.body.contact;
      updatedData.updatedDate = Date.now();
    }
    if (req.body.username) {
      updatedData.username = req.body.username;
      updatedData.updatedDate = Date.now();
    }
    if (req.body.address) {
      updatedData.address = req.body.address;
      updatedData.updatedDate = Date.now();
    }

    if (presentCustomer) {
      const item = await Customer.findByIdAndUpdate(
        userId,
        { $set: updatedData },
        { new: true }
      );
      res.send(item);
      // res.send(updatedData)
    } else {
      res.send("There is an error to edit the data.");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
}





router.post("/addNewCustomer", async (req, res) => {
  AddNewCustomer(req, res);
});

router.post("/login", async (req, res) => {
  LoginCustomer(req, res);
});

router.get("/getCustomer", fetchUser, async (req, res) => {
  GetAllCustomers(req, res);
});

router.put("/editCustomer/:id", async (req, res) => {
  EditCustomer(req, res);
});

module.exports = router;
