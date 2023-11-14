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

const Reservations_Employee = () => {
  const navigate = useNavigate();

  const Context = useContext(ReservationContext)
  const { unConfirmedReservations, setUnConfirmedReservations, fetchAllUnconfirmedReservations, RemoveReservations, ConfirmReservations } = Context
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      fetchAllUnconfirmedReservations();
    }
    else{
      alert("You have to Logged In into the system.")
      navigate('/Login')
    }
}, [])

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

  const RemovePresentReservation = (id) => {
    RemoveReservations(id);
    alert("Reservation Cancelled Successfully!")
  }

  const ConfirmPresentReservation = (id) => {
    ConfirmReservations(id);
    alert("Reservation Confirmed Successfully!")
  }

return (
<div>
      <div className="First_Line">
        <h2 style={{ marginLeft: "4%" }}>Reservations</h2>
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
                <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Confirm</StyledTableCell>
                <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Cancel</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {unConfirmedReservations.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell style={{fontSize: '15px'}} component="th" scope="row">
                    {row.customer.name}
                  </StyledTableCell>
                  <StyledTableCell style={{fontSize: '15px'}} >{row.vehicle.plateNumber}</StyledTableCell>
                  <StyledTableCell style={{fontSize: '15px'}} >{row.startDate}</StyledTableCell>
                  <StyledTableCell style={{fontSize: '15px'}} >{row.endDate}</StyledTableCell>
                  <StyledTableCell style={{fontSize: '15px'}} >{row.totalCost}</StyledTableCell>
                  <StyledTableCell style={{fontSize: '15px'}} >
                  <Button variant="contained" style={{backgroundColor: 'red', width: '80%', textTransform: 'capitalize'}} onClick={()=>{ConfirmPresentReservation(row._id)}} >Confirm</Button>  
                  </StyledTableCell>
                  <StyledTableCell style={{fontSize: '15px'}} >
                  <Button variant="contained" style={{backgroundColor: 'red', width: '80%', textTransform: 'capitalize'}} onClick={()=>{RemovePresentReservation(row._id)}} >Cancel</Button>    
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default Reservations_Employee
