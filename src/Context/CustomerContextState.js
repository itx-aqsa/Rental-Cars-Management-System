import react, { useState, useEffect } from "react";
import { CustomerContext } from "./AllContexts";

const CustomerContextState = (props) => {
  const customersInitial = [];
  const [customers, setCustomers] = useState(customersInitial);

  const [customerToBeEdited, setCustomerToBeEdited] = useState({
    id: "",
    name: "",
    password: "",
    contact: "",
    username: "",
    address: "",
  });

  const [getCustomer, setGetCustomer] = useState({});

  const fetchAllCustomers = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/customers/getAllCustomers",
        {
          method: "GET",
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      const allCustomers = await response.json();
      setCustomers(allCustomers);
      //   console.log(customers)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const editCustomer = async (
    id,
    name,
    password,
    contact,
    username,
    address
  ) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/customers/editCustomer/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({
            name,
            password,
            contact,
            username,
            address,
          }),
        }
      );

      const json = await response.json();
      console.log(json);

      let newCustomers = JSON.parse(JSON.stringify(customers));
      for (let index = 0; index < newCustomers.length; index++) {
        const element = customers[index];
        if (element._id === id) {
          newCustomers[index].name = name;
          newCustomers[index].password = password;
          newCustomers[index].contact = contact;
          newCustomers[index].username = username;
          newCustomers[index].address = address;
          break;
        }
      }
      // console.log(newNotes)
      setCustomers(newCustomers);
    } catch (error) {
      // alert("Error editing the item.");
      console.log("Error editing the customer: ", error);
    }
  };

  const GetCustomerData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/customers/getCustomer",
        {
          method: "GET",
          headers: {
            "auth-token": localStorage.getItem("customerToken"),
          },
        }
      );

      const thisCustomer = await response.json();
      setGetCustomer(thisCustomer);
      // console.log(thisCustomer)
    } catch (error) {
      console.log("Error getting the customer data: ", error);
    }
  };

  return (
    <CustomerContext.Provider
      value={{
        customers,
        setCustomers,
        fetchAllCustomers,
        customerToBeEdited,
        setCustomerToBeEdited,
        editCustomer,
        getCustomer,
        setGetCustomer,
        GetCustomerData
      }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextState;
