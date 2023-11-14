import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import '../../Home_Page_Employee.css'
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeContext, ReservationContext  } from "../../Context/AllContexts";

const Dashboard_Employee = () => {
  const navigate = useNavigate();

  const Context = useContext(EmployeeContext)
  const reservationscontext = useContext(ReservationContext)
  const { unConfirmedReservations, fetchAllUnconfirmedReservations } = reservationscontext
  const { employees, fetchAllEmployees, removeEmployee, editEmployee } =
    Context;

  useEffect(() => {
    if(localStorage.getItem('token')){
      fetchAllEmployees();
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
      
  return (
    <div>
      <div className="Main_Portion">
        <div>
          <h2 style={{ marginLeft: "4%" }}>Dashboard</h2>
          <div className="Dashboard_Cards_Portion">
            <Card className="One_Card">
              <div className="Card_Portion">
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  className="Card_Portion_Number"
                >
                  {/* 5 */}
                  {unConfirmedReservations.length}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="Card_Portion_Heading"
                >
                  Total Bookings
                </Typography>
              </div>
              <CardActions>
                <Link to="/employee/reservations" className="Card_View_Details">
                  View Details
                </Link>
              </CardActions>
            </Card>
            <Card className="One_Card">
              <div className="Card_Portion">
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  className="Card_Portion_Number"
                >
                  2
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="Card_Portion_Heading"
                >
                  Generate Report
                </Typography>
              </div>
              <CardActions>
                <Link to="/employee/reports" className="Card_View_Details">
                  View Details
                </Link>
              </CardActions>
            </Card>
            
          </div>
        </div>

        <div className="">
            <TableContainer component={Paper} style={{width: '80%', marginLeft: '8%', marginTop: '80px'}} >
              <Table sx={{ }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Name</StyledTableCell>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Email</StyledTableCell>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Contact</StyledTableCell>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Username</StyledTableCell>
                    <StyledTableCell style={{fontSize: '17px', fontWeight: '500'}} >Address</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employees.map((row) => (
                    <StyledTableRow key={row._id}>
                      <StyledTableCell style={{fontSize: '15px'}} component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell style={{fontSize: '15px'}} >{row.email}</StyledTableCell>
                      <StyledTableCell style={{fontSize: '15px'}} >{row.contact}</StyledTableCell>
                      <StyledTableCell style={{fontSize: '15px'}} >{row.username}</StyledTableCell>
                      <StyledTableCell style={{fontSize: '15px'}} >{row.address}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
    </div>
  )
}

export default Dashboard_Employee
