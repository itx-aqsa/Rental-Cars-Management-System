import react, { useState, useEffect } from "react"
import { FeedbackContext } from "./AllContexts"

const FeedbackContextState = (props) => {

    const feedbacksInitial = []
    const [feedbacks, setFeedbacks] = useState(feedbacksInitial)

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
            console.error("Error fetching data:", error);
        }
    }

    const addNewFeedback = async (
        customer,
        vehicle,
        rating,
        message,
      ) => {
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
          
          if(json.Success){
            alert("Submitted Feedback Successfully!")
          }
          else{
            alert("Invalid Details, as all the fields are compulsory.")
          }
        } catch (error) {
          console.error("Error adding the data:", error);
        }
      };

    return (
        <FeedbackContext.Provider value={{ feedbacks, setFeedbacks, fetchAllFeedbacks, addNewFeedback }}>
            {props.children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContextState;




