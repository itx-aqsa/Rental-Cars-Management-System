import react, { useState, useEffect } from "react"
import { AlertContext } from "./AllContexts"

const AlertContextState = (props) => {

    const [showAlert, setShowAlert] = useState(false)

    const [alertData, setAlertData] = useState({
        severity: "",
        message: ""
    })

    return (
        <AlertContext.Provider value={{ alertData, setAlertData, showAlert, setShowAlert }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertContextState;




