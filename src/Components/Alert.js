import React, { useEffect, useRef, useContext } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from '@mui/material/Alert';
import { AlertContext } from "../Context/AllContexts";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertBar = (props) => {
  const [open, setOpen] = React.useState(true);
  const showRef = useRef();

  const alertcontext = useContext(AlertContext)
  const { alertData, setAlertData } = alertcontext

  useEffect(() => {
    // showRef.current.click();
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        style={{ display: "none" }}
        ref={showRef}
        onClick={handleClick}
      >
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertData.severity} sx={{ width: "100%" }}>
          {alertData.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlertBar;
