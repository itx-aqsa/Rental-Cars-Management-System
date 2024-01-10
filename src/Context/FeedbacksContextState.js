import react, { useState, useEffect, useContext } from "react";
import { FeedbackContext } from "./AllContexts";
import { AlertContext, FrontendLogContext } from "./AllContexts";

const FeedbackContextState = (props) => {
  const feedbacksInitial = [];
  const [feedbacks, setFeedbacks] = useState(feedbacksInitial);

  const alertcontext = useContext(AlertContext);

  const { showAlert, setShowAlert, alertData, setAlertData } = alertcontext;

  const frontendlogcontext = useContext(FrontendLogContext)
  const { addNewFrontEndException } = frontendlogcontext

  const fetchAllFeedbacks = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/feedbacks/getAllFeedbacks",
        {
          method: "GET",
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      const allFeedbacks = await response.json();
      setFeedbacks(allFeedbacks);
    } catch (error) {
      addNewFrontEndException("FeedbackContextState.js", "Feedbacks_Admin_Screen", error.message)
      console.error("Error fetching data:", error);
    }
  };

  const addNewFeedback = async (customer, vehicle, rating, message) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/feedbacks/addNewFeedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("customerToken"),
          },
          body: JSON.stringify({
            customer,
            vehicle,
            rating,
            message,
          }),
        }
      );

      const json = await response.json();
      console.log(json);

      setFeedbacks(feedbacks.concat(json));

      if (json.Success) {
        // alert("Submitted Feedback Successfully!")
      } else {
        setShowAlert(true);
        setAlertData({
          severity: "error",
          message: "Invalid Details, as all the fields are Compulsory!",
        });
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    } catch (error) {
      addNewFrontEndException("FeedbackContextState.js", "Feedbacks_Customer_Screen", error.message)
      console.error("Error adding the data:", error);
    }
  };

  return (
    <FeedbackContext.Provider
      value={{ feedbacks, setFeedbacks, fetchAllFeedbacks, addNewFeedback }}
    >
      {props.children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContextState;
