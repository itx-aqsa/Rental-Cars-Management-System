import React, { useContext, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CustomerContext, AlertContext } from "../../Context/AllContexts";
import { useNavigate } from "react-router-dom";

const Customers_Admin = () => {
  const navigate = useNavigate()

  const Context = useContext(CustomerContext);
  const alertcontext = useContext(AlertContext)

  const { alertData, setAlertData, showAlert, setShowAlert } = alertcontext
  const { customers, setCustomers, fetchAllCustomers } = Context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchAllCustomers();
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
        <h2 style={{ marginLeft: "4%" }}>Customers</h2>
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
                  Name
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "17px", fontWeight: "500" }}
                >
                  Email
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "17px", fontWeight: "500" }}
                >
                  Contact
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "17px", fontWeight: "500" }}
                >
                  Username
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "17px", fontWeight: "500" }}
                >
                  Address
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "17px", fontWeight: "500" }}
                >
                  Created Date
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.length!=0?customers.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell
                    style={{ fontSize: "15px" }}
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ fontSize: "15px" }}>
                    {row.email}
                  </StyledTableCell>
                  <StyledTableCell style={{ fontSize: "15px" }}>
                    {row.contact}
                  </StyledTableCell>
                  <StyledTableCell style={{ fontSize: "15px" }}>
                    {row.username}
                  </StyledTableCell>
                  <StyledTableCell style={{ fontSize: "15px" }}>
                    {row.address}
                  </StyledTableCell>
                  <StyledTableCell style={{ fontSize: "15px" }}>
                    {row.createdAt}
                  </StyledTableCell>
                </StyledTableRow>
              )): ""}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Customers_Admin;
