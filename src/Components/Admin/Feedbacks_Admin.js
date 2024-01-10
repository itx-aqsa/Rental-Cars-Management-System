import React, { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { FeedbackContext, AlertContext } from "../../Context/AllContexts";
import { useNavigate } from "react-router-dom";

const Feedbacks_Admin = () => {
  const navigate = useNavigate();

  const Context = useContext(FeedbackContext);
  const alertcontext = useContext(AlertContext)

  const { alertData, setAlertData, showAlert, setShowAlert } = alertcontext
  const { feedbacks, setFeedbacks, fetchAllFeedbacks } = Context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchAllFeedbacks();
    } else {
      setShowAlert(true);
        setAlertData({
          severity: "error",
          message: "You have to Logged In into the system!",
        });
        setTimeout(() => {
          setShowAlert(false)
        }, 3000);
      navigate("/Login");
    }
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div>
      <div className="First_Line">
        <h2 style={{ marginLeft: "4%" }}>Feedbacks</h2>
      </div>
      <div className="">
        <TableContainer
          component={Paper}
          style={{ width: "90%", marginLeft: "4%", marginTop: "50px" }}
        >
          <Table sx={{}} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell
                  style={{ fontSize: "17px", fontWeight: "500" }}
                >
                  Customer
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "17px", fontWeight: "500" }}
                >
                  Vehicle No.
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "17px", fontWeight: "500" }}
                >
                  Date
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "17px", fontWeight: "500" }}
                >
                  Message
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "17px", fontWeight: "500" }}
                >
                  Rating
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {feedbacks.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell
                    style={{ fontSize: "15px" }}
                    component="th"
                    scope="row"
                  >
                    {row.customer.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ fontSize: "15px" }}>
                    {row.vehicle.plateNumber}
                  </StyledTableCell>
                  <StyledTableCell style={{ fontSize: "15px" }}>
                    {row.date}
                  </StyledTableCell>
                  <StyledTableCell style={{ fontSize: "15px" }}>
                    {row.message}
                  </StyledTableCell>
                  <StyledTableCell style={{ fontSize: "15px" }}>
                    {/* {row.rating} */}
                    <Rating name="read-only" value={row.rating} readOnly />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Feedbacks_Admin;
