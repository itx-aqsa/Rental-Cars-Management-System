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
import { useNavigate } from 'react-router-dom';
import { VehicleContext } from '../../Context/AllContexts';

const Vehicles_Admin = () => {
    const navigate = useNavigate();

    const Context = useContext(VehicleContext)
    const { vehicles, setVehicles, fetchAllVehicles, removeVehicle, vehicleToBeEdited, setVehicleToBeEdited } = Context


    useEffect(() => {
      if (localStorage.getItem("token")) {
        fetchAllVehicles()
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


      const RemovePresentVehicle = (id) => {
        // alert(id)
        alert("Deleted Successfully!")
        removeVehicle(id)
      }


  return (
    <div>
          <div className="First_Line">
            <h2 style={{ marginLeft: "4%" }}>Vehicles</h2>
            <Button
              type="submit"
              variant="contained"
              style={{
                fontSize: "18px",
                backgroundColor: "red",
                fontWeight: "bold",
                paddingLeft: "4%",
                paddingRight: "4%",
                borderRadius: "6px",
                textTransform: "capitalize",
                height: "46px",
                marginTop: "36px",
                marginRight: "6%",
              }}
              onClick={()=>{navigate('/admin/addvehicle')}}
            >
              Add Vehicle
            </Button>
          </div>
          <div className="">
            <TableContainer component={Paper} style={{width: '90%', marginLeft: '4%', marginTop: '50px'}} >
              <Table sx={{ }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Brand</StyledTableCell>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Year</StyledTableCell>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Status</StyledTableCell>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Plate No.</StyledTableCell>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Discount</StyledTableCell>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Edit</StyledTableCell>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Remove</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {vehicles.map((row) => (
                    <StyledTableRow key={row._id}>
                      <StyledTableCell style={{fontSize: '15px'}} component="th" scope="row">
                        {row.brand.name}
                      </StyledTableCell>
                      <StyledTableCell style={{fontSize: '15px'}} >{row.year}</StyledTableCell>
                      <StyledTableCell style={{fontSize: '15px'}} >{row.status}</StyledTableCell>
                      <StyledTableCell style={{fontSize: '15px'}} >{row.plateNumber}</StyledTableCell>
                      <StyledTableCell style={{fontSize: '15px'}} >{row.discount}</StyledTableCell>
                      <StyledTableCell>
                        <Fab
                          style={{
                            backgroundColor: "red",
                            height: "38px",
                            width: "38px",
                          }}
                          aria-label="edit"
                          onClick={()=>{
                            setVehicleToBeEdited({
                              id: row._id,
                              brand: row.brand,
                              year: row.year,
                              plateNumber: row.plateNumber,
                              image: row.image,
                              description: row.description,
                              status: row.status,
                              discount: row.discount
                            })
                            console.log(vehicleToBeEdited)
                            navigate('/admin/editVehicle')
                            
                          }
                          }
                        >
                          <EditIcon />
                        </Fab>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Fab
                          style={{
                            backgroundColor: "red",
                            height: "38px",
                            width: "38px",
                          }}
                          aria-label="edit"
                          onClick={()=>{RemovePresentVehicle(row._id)}}
                        >
                          <DeleteIcon />
                        </Fab>
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

export default Vehicles_Admin
