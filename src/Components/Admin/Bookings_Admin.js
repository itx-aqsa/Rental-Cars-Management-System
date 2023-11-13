import React, { useState, useEffect, useContext } from 'react'
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
import DeleteIcon from '@mui/icons-material/Delete';
import { ReservationContext } from '../../Context/AllContexts';
import { useNavigate } from 'react-router-dom';

const Bookings_Admin = () => {
    const navigate = useNavigate();

    const Context = useContext(ReservationContext)
    const { confirmedReservations, setConfirmedReservations, fetchAllConfirmedReservations } = Context

    useEffect(() => {
      if (localStorage.getItem("token")) {
        fetchAllConfirmedReservations();
      } else {
        alert("You have to Logged In into the system.");
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
            <h2 style={{ marginLeft: "4%" }}>Bookings</h2>
          </div>
          <div className="">
            <TableContainer component={Paper} style={{width: '90%', marginLeft: '4%', marginTop: '50px'}} >
              <Table sx={{ }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Customer</StyledTableCell>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Vehicle No.</StyledTableCell>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Start Date</StyledTableCell>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >End Date</StyledTableCell>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Total Cost</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {confirmedReservations.map((row) => (
                    <StyledTableRow key={row._id}>
                      <StyledTableCell style={{fontSize: '15px'}} component="th" scope="row">
                        {row.customer.name}
                      </StyledTableCell>
                      <StyledTableCell style={{fontSize: '15px'}} >{row.vehicle.plateNumber}</StyledTableCell>
                      <StyledTableCell style={{fontSize: '15px'}} >{row.startDate}</StyledTableCell>
                      <StyledTableCell style={{fontSize: '15px'}} >{row.endDate}</StyledTableCell>
                      <StyledTableCell style={{fontSize: '15px'}} >{row.totalCost}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
  )
}

export default Bookings_Admin
