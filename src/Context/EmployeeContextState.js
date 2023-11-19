import react, { useState, useEffect } from "react";
import { EmployeeContext } from "./AllContexts";

const EmployeeContextState = (props) => {
  const employeesInitials = [];

  const [employees, setEmployees] = useState(employeesInitials);

  const fetchAllEmployees = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/employees/getAllEmployees",
        {
          method: "GET",
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      const allEmployees = await response.json();
      setEmployees(allEmployees);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addNewEmployee = async (
    name,
    email,
    password,
    contact,
    address,
    username
  ) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/employees/addNewEmployee",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({
            name,
            email,
            password,
            contact,
            address,
            username,
          }),
        }
      );

      const json = await response.json();
      console.log(json);

      setEmployees(employees.concat(json));

      console.log(employees);
    } catch (error) {
      console.error("Error adding the data:", error);
    }
  };

  const removeEmployee = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/employees/removeEmployee/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      const json = await response.json();
      console.log(json);

      const newEmployees = employees.filter((emp) => {
        return emp._id !== id;
      });

      setEmployees(newEmployees);
    } catch (error) {
      console.error("Error removing the data:", error);
    }
  };

  const editEmployee = async (
    id,
    name,
    email,
    password,
    contact,
    address,
    username
  ) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/employees/editEmployee/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token":
            localStorage.getItem('token')
          },
          body: JSON.stringify({ name,
            email,
            password,
            contact,
            address,
            username, }),
        }
      );

      const json = await response.json();
      console.log(json);

      let newEmployees = JSON.parse(JSON.stringify(employees))
      for (let index = 0; index < newEmployees.length; index++) {
        const element = employees[index];
        if (element._id === id) {
          newEmployees[index].name = name;
          newEmployees[index].email = email;
          newEmployees[index].password = password;
          newEmployees[index].contact = contact;
          newEmployees[index].address = address;
          newEmployees[index].username = username;
          break;
        }
      }
      // console.log(newNotes)
      setEmployees(newEmployees)


    } catch (error) {
      // alert("Error editing the item.");
      console.log("Error editing the employee: ", error);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, fetchAllEmployees, addNewEmployee, removeEmployee, editEmployee }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextState;
