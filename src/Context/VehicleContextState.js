import react, { useState, useEffect, useContext } from "react";
import { VehicleContext } from "./AllContexts";

const VehicleContextState = (props) => {
  const vehiclesInitials = [];

  const [vehicles, setVehicles] = useState(vehiclesInitials);
  const [vehicleToBeEdited, setVehicleToBeEdited] = useState({
    id: "",
    brand: "",
    year: "",
    plateNumber: "",
    image: [],
    description: "",
    status: "",
    discount: 0,
    pricePerDay: 0,
  });

  const [vehicleForOneDetailedPage, setVehicleForOneDetailedPage] = useState({
    id: "",
    brand: "",
    year: "",
    plateNumber: "",
    image: [],
    description: "",
    status: "",
    discount: 0,
    pricePerDay: 0,
  });

  const fetchAllVehicles = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/vehicles/getVehicles",
        {
          method: "GET",
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      const allVehicles = await response.json();
      setVehicles(allVehicles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addNewVehicle = async (
    brand,
    year,
    plateNumber,
    image,
    description,
    pricePerDay
  ) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/vehicles/addNewVehicle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({
            brand,
            year,
            plateNumber,
            image,
            description,
            pricePerDay,
          }),
        }
      );

      const json = await response.json();
      console.log(json);

      setVehicles(vehicles.concat(json));

      console.log(vehicles);
    } catch (error) {
      console.error("Error adding the data:", error);
    }
  };

  const removeVehicle = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/vehicles/removeVehicle/${id}`,
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

      const newVehicles = vehicles.filter((vehicle) => {
        return vehicle._id !== id;
      });

      setVehicles(newVehicles);
    } catch (error) {
      console.error("Error removing the data:", error);
    }
  };

  const editVehicle = async (
    id,
    brand,
    year,
    plateNumber,
    description,
    image,
    status,
    discount,
    pricePerDay
  ) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/vehicles/editVehicle/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({
            brand,
            year,
            plateNumber,
            pricePerDay,
            description,
            image,
            status,
            discount,
          }),
        }
      );

      const json = await response.json();
      console.log(json);

      let newVehicles = JSON.parse(JSON.stringify(vehicles));
      for (let index = 0; index < newVehicles.length; index++) {
        const element = vehicles[index];
        if (element._id === id) {
          newVehicles[index].brand = brand;
          newVehicles[index].year = year;
          newVehicles[index].plateNumber = plateNumber;
          newVehicles[index].description = description;
          newVehicles[index].image = image;
          newVehicles[index].status = status;
          newVehicles[index].discount = discount;
          break;
        }
      }
      // console.log(newNotes)
      setVehicles(newVehicles);
    } catch (error) {
      // alert("Error editing the item.");
      console.log("Error editing the employee: ", error);
    }
  };

  const MakePresentVehicleNotAvailable = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/vehicles/notAvailableVehicle/${id}`,
        {
          method: "PUT",
          headers: {
            // "auth-token": localStorage.getItem("token"),
          },
        }
      );

      const json = await response.json();
      // setVehicles(allVehicles);
    } catch (error) {
      console.log("Error editing the employee: ", error);
    }
  }

  return (
    <VehicleContext.Provider
      value={{
        vehicles,
        setVehicles,
        fetchAllVehicles,
        addNewVehicle,
        removeVehicle,
        vehicleToBeEdited,
        setVehicleToBeEdited,
        editVehicle,
        vehicleForOneDetailedPage,
        setVehicleForOneDetailedPage,
        MakePresentVehicleNotAvailable
      }}
    >
      {props.children}
    </VehicleContext.Provider>
  );
};

export default VehicleContextState;
