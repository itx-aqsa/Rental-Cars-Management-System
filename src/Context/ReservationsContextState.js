import react, { useState, useEffect } from "react";
import { ReservationContext } from "./AllContexts";

const ReservationContextState = (props) => {
  const confirmedReservationsInitial = [];
  const unConfirmedReservationsInitial = [];
  const [confirmedReservations, setConfirmedReservations] = useState(
    confirmedReservationsInitial
  );
  const [unConfirmedReservations, setUnConfirmedReservations] = useState(
    unConfirmedReservationsInitial
  );

  const fetchAllConfirmedReservations = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/reservations/confirmedReservations",
        {
          method: "GET",
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      const allConfirmedReservations = await response.json();
      setConfirmedReservations(allConfirmedReservations);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchAllUnconfirmedReservations = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/reservations/getAllReservations",
        {
          method: "GET",
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      const allUnConfirmedReservations = await response.json();
      setUnConfirmedReservations(allUnConfirmedReservations);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const RemoveReservations = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/reservations/removeReservation/${id}`,
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

      const newReservations = unConfirmedReservations.filter((reservation) => {
        return reservation._id !== id;
      });

      setUnConfirmedReservations(newReservations);
    } catch (error) {
      console.error("Error removing the data:", error);
    }
  };

  const ConfirmReservations = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/reservations/confirmReservation/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      const json = await response.json();
      console.log(json);

      const newReservations = unConfirmedReservations.filter((reservation) => {
        return reservation._id !== id;
      });

      setUnConfirmedReservations(newReservations);
    } catch (error) {
      console.error("Error removing the data:", error);
    }
  };

  const SendEmailToCustomer = async () => {
    try {
      
    } catch (error) {
      console.error("Error removing the data:", error);
    }
  }

  const addNewReservation = async (
    customer,
    vehicle,
    startDate,
    endDate,
    totalCost
  ) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/reservations/addNewReservation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("customerToken"),
          },
          body: JSON.stringify({
            customer,
            vehicle,
            startDate,
            endDate,
            totalCost,
          }),
        }
      );

      const json = await response.json();
      console.log(json);

      setUnConfirmedReservations(unConfirmedReservations.concat(json));

      console.log(unConfirmedReservations);
    } catch (error) {
      console.error("Error adding the data:", error);
    }
  };

  return (
    <ReservationContext.Provider
      value={{
        confirmedReservations,
        setConfirmedReservations,
        fetchAllConfirmedReservations,
        unConfirmedReservations,
        setUnConfirmedReservations,
        fetchAllUnconfirmedReservations,
        RemoveReservations,
        ConfirmReservations,
        addNewReservation
      }}
    >
      {props.children}
    </ReservationContext.Provider>
  );
};

export default ReservationContextState;
