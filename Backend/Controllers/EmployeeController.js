const Employee = require("../models/employee");
const jwt = require("jsonwebtoken");
const BackendLogController = require("./BackendLogController");

const JWT_Secret = "Iamaboy.";

const AddNewEmployee = async (req, res) => {
  let Success = false;
  try {
    const newEmployee = await Employee.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      contact: req.body.contact,
      address: req.body.address,
      username: req.body.username,
    });

    const data = {
      employee: {
        id: newEmployee.id,
        role: "Employee",
      },
    };

    const employeeToken = jwt.sign(data, JWT_Secret);
    Success = true;
    res.json({ Success, newEmployee, employeeToken });
  } catch (error) {
    Success = false;
    console.log(error.message);
    BackendLogController.AddNewBackEndException(
      "EmployeeController.js",
      "AddNewEmployee",
      error.message
    );
    res.status(500).json({ Success, message: "Internal Server Error." });
  }
};

const EditEmployee = async (req, res) => {
  try {
    var employeeId = req.params.id;
    const updatedData = {};
    if (req.body.name) {
      updatedData.name = req.body.name;
    }
    if (req.body.email) {
      updatedData.email = req.body.email;
    }
    if (req.body.password) {
      updatedData.password = req.body.password;
    }
    if (req.body.username) {
      updatedData.username = req.body.username;
    }
    if (req.body.contact) {
      updatedData.contact = req.body.contact;
    }
    if (req.body.address) {
      updatedData.address = req.body.address;
    }

    const presentEmployee = await Employee.findById(employeeId);
    if (presentEmployee) {
      // const item = await Employee.findByIdAndUpdate(
      //   employeeId,
      //   { $set: updatedData },
      //   { new: true }
      // );

      const item = await Employee.findOneAndUpdate(
        { _id: employeeId },
        { $set: updatedData },
        { new: true }
      );

      res.send(item);
    } else {
      res.send("There is an error to edit the data.");
    }
  } catch (error) {
    console.log(error.message);
    BackendLogController.AddNewBackEndException(
      "EmployeeController.js",
      "EditEmployee",
      error.message
    );
    res.status(500).send("Internal Server Error.");
  }
};

const GetEmployeeData = async (req, res) => {
  try {
    var employeeId = req.user.id;
    const presentEmployee = await Employee.findById(employeeId).select("-password");
    res.json(presentEmployee);
  } catch (error) {
    console.log(error.message);
    BackendLogController.AddNewBackEndException(
      "EmployeeController.js",
      "GetEmployeeData",
      error.message
    );
    res.status(500).send("Internal Server Error.");
  }
};

const GetAllEmployees = async (req, res) => {
  try {
    var employeesData = await Employee.find();
    employeesData = employeesData.filter((emp) => {
      return emp.role != "Admin" && emp.active == true;
    });
    res.send(employeesData);
  } catch (error) {
    console.log(error.message);
    BackendLogController.AddNewBackEndException(
      "EmployeeController.js",
      "GetAllEmployees",
      error.message
    );
    res.status(500).send("Internal Server Error.");
  }
};

const RemoveEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;

    const updatedData = {};
    updatedData.active = false;

    const presentEmployee = await Employee.findById(employeeId);
    if (presentEmployee) {
      // const item = await Employee.findByIdAndDelete(employeeId);
      const item = await Employee.findByIdAndUpdate(
        employeeId,
        { $set: updatedData },
        { new: true }
      );

      res.send(item);
    } else {
      res.send("This employee is not present.");
    }
  } catch (error) {
    console.log(error.message);
    BackendLogController.AddNewBackEndException(
      "EmployeeController.js",
      "RemoveEmployee",
      error.message
    );
    res.status(500).send("Internal Server Error.");
  }
};

module.exports = {
  AddNewEmployee,
  EditEmployee,
  GetAllEmployees,
  RemoveEmployee,
  GetEmployeeData
};
