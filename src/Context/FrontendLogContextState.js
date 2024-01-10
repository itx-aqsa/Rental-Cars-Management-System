import react, { useState, useEffect, useContext } from "react";
import { FrontendLogContext } from "./AllContexts";

const FrontendLogContextState = (props) => {
  const logsInitials = [];

  const [logs, setLogs] = useState(logsInitials);

  const addNewFrontEndException = async (fileName, uiScreen, details) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/frontendlog/addNewException",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fileName,
            uiScreen,
            details
          }),
        }
      );

      const json = await response.json();
      console.log(json);

      setLogs(logs.concat(json));

      console.log(logs);
    } catch (error) {
      console.error("Error adding the data:", error);
    }
  };


  return (
    <FrontendLogContext.Provider
      value={{ addNewFrontEndException }}
    >
      {props.children}
    </FrontendLogContext.Provider>
  );
};

export default FrontendLogContextState;
