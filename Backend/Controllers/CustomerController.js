const Customer = require("../models/customer");
const Employee = require("../models/employee");
var jwt = require("jsonwebtoken");
const BackendLogController = require("./BackendLogController")

const JWT_Secret = "Iamaboy.";


const AddNewCustomer = async (req, res) => {
    try {
      let Success = false;
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
          role: "Customer",
        },
      };
  
      var customerToken = jwt.sign(data, JWT_Secret);
  
      Success = true
      res.json({ Success, customerToken });
    } catch (error) {
      console.log(error.message);
      BackendLogController.AddNewBackEndException("CustomerController.js", "AddNewCustomer", error.message)
      Success = false
      res.status(500).json({Success, message: "Internal Server Error."});
    }
  }
  
  const LoginCustomer = async (req, res) => {
    try {
      let Success = false
      if (
        req.body.email == "zaeemahmad2603@gmail.com" &&
        req.body.password == "713000"
      ) {
        const foundedAdmin = await Employee.findOne({ email: req.body.email });
        const data = {
          admin: {
            id: foundedAdmin.id,
            role: "Admin"
          },
        };
        const adminToken = jwt.sign(data, JWT_Secret);
        Success = true
        res.json({ Success, role: "Admin", adminToken });
      } else {
        const foundedEmployee = await Employee.findOne({ email: req.body.email });
        if (foundedEmployee) {
          console.log("This is an Employee.");
          console.log(foundedEmployee);
          if (foundedEmployee.password == req.body.password) {
            const data = {
              employee: {
                id: foundedEmployee.id,
                role: "Employee"
              },
            };
            const employeeToken = jwt.sign(data, JWT_Secret);
            Success = true
            res.json({ Success, role: "Employee", employeeToken });
          } else {
            Success = false
            res.json({ Success, Failure: "Please Enter the right password." });
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
                  role: "Customer"
                },
              };
              const customerToken = jwt.sign(data, JWT_Secret);
              Success = true
              res.json({ Success, role: "Customer", customerToken });
            } else {
              Success = false
              res.json({ Success, Failure: "Please Enter the right password." });
            }
          } else {
            res.status(400);
            Success = false
            res.json({ Success, error: "User for this email is not present." });
          }
        }
      }
    } catch (error) {
      console.log(error.message);
      BackendLogController.AddNewBackEndException("CustomerController.js", "LoginCustomer", error.message)
      Success = false
      res.status(500).json({Success, message: "Internal Server Error."});
    }
  }
  
  const GetCustomerData = async (req, res) => {
    try {
      var userId = req.user.id;
      const presentCustomer = await Customer.findById(userId).select("-password");
      res.json(presentCustomer);
    } catch (error) {
      console.log(error.message);
      BackendLogController.AddNewBackEndException("CustomerController.js", "GetCustomerData", error.message)
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
      }
      if (req.body.password) {
        updatedData.password = req.body.password;
      }
      if (req.body.contact) {
        updatedData.contact = req.body.contact;
      }
      if (req.body.username) {
        updatedData.username = req.body.username;
      }
      if (req.body.address) {
        updatedData.address = req.body.address;
      }
  
      if (presentCustomer) {
        // const item = await Customer.findByIdAndUpdate(
        //   userId,
        //   { $set: updatedData },
        //   { new: true }
        // );

        const item = await Customer.findOneAndUpdate(
          { _id: userId },
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
      BackendLogController.AddNewBackEndException("CustomerController.js", "EditCustomer", error.message)
      res.status(500).send("Internal Server Error");
    }
  }

  const GetAllCustomers = async (req, res) => {
    try {
        var customersData = await Customer.find();
        customersData = customersData.filter((cust)=>{
          return cust.active == true
        })
        res.send(customersData);
      } catch (error) {
        console.log(error.message);
        BackendLogController.AddNewBackEndException("CustomerController.js", "GetAllCustomers", error.message)
        res.status(500).send("Internal Server Error.");
      }
  }




module.exports = {
    AddNewCustomer,
    EditCustomer,
    GetCustomerData,
    LoginCustomer,
    GetAllCustomers
}
