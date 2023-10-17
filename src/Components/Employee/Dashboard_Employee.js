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

const Dashboard_Employee = () => {

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
    
      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
    
      const rows = [
        {
          _id: "651c2e64a6724252ca540847",
          name: "zain",
          password: "73000",
          email: "zain@gmail.com",
          contact: "030921212",
          address: "Lahore",
          username: "zain",
          role: "Employee",
          active: true,
          createdDate: "2023-10-03T15:08:20.600Z",
          updatedDate: "2023-10-03T15:08:20.601Z",
          __v: 0,
        },
        {
          _id: "651c65cadd36f193bd35e923",
          name: "ahmad",
          password: "123",
          email: "ahmad@gmail.com",
          contact: "030921212",
          address: "Lahore",
          username: "ahmad",
          role: "Employee",
          active: true,
          createdDate: "2023-10-03T19:04:42.987Z",
          updatedDate: "2023-10-03T19:04:42.987Z",
          __v: 0,
        },
        {
          _id: "651c65e5dd36f193bd35e925",
          name: "bilal",
          password: "56464",
          email: "goodbilal@gmail.com",
          contact: "1234567823",
          address: "Multan",
          username: "bilal",
          role: "Employee",
          active: true,
          createdDate: "2023-10-03T19:05:09.112Z",
          updatedDate: "2023-10-07T06:02:28.756Z",
          __v: 0,
        },
      ];

      
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
                  5
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
                <a href="#" className="Card_View_Details">
                  View Details
                </a>
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
                  Generate Reports
                </Typography>
              </div>
              <CardActions>
                <a href="#" className="Card_View_Details">
                  View Details
                </a>
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
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
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
