import React, { useContext, useState, useMemo } from "react";
import { useRef } from "react";
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
import { useNavigate } from "react-router-dom";
import Edit_Employee_Admin from "./Edit_Employee_Admin";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "../../edit_employee.css";
import { useEffect } from "react";
import { EmployeeContext } from "../../Context/AllContexts";

import Modal from "react-modal";
import ForEditingModal from "./ForEditingModal";

const Employees_Admin = () => {
  const navigate = useNavigate();
  const modalRef = useRef();

  const [updatedEmployee, setUpdatedEmployee] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    username: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchAllEmployees();
    } else {
      alert("You have to Logged In into the system.");
      navigate("/Login");
    }
  }, []);

  const Context = useContext(EmployeeContext);

  const { employees, fetchAllEmployees, removeEmployee, editEmployee } =
    Context;

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

  // const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  //   "& .MuiDialogContent-root": {
  //     padding: theme.spacing(2),
  //   },
  //   "& .MuiDialogActions-root": {
  //     padding: theme.spacing(1),
  //   },
  // }));

  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // Do something after modal is opened
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const RemoveEmployee = (id) => {
    alert("Deleted Successfully!");
    removeEmployee(id);
  };

  // const OnChange = (e) => {
  //   setUpdatedEmployee({ ...updatedEmployee, [e.target.name]: e.target.value });
  // };

  // const EditPresentEmployee = (e) => {
  //   e.preventDefault();
  //   // editEmployee(
  //   // updatedEmployee.id,
  //   // updatedEmployee.name,
  //   // updatedEmployee.email,
  //   // updatedEmployee.password,
  //   // updatedEmployee.contact,
  //   // updatedEmployee.address,
  //   // updatedEmployee.username
  //   // )
  //   alert("Edited Successfully!");
  //   handleClose();
  // };


  return (
    <div>
      {/* <Edit_Employee_Admin /> */}
      {/* <React.Fragment>
        <Button
          style={{ display: "none" }}
          ref={modalRef}
          variant="outlined"
          onClick={handleClickOpen}
        >
          Open dialog
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              textAlign: "center",
            }}
            sx={{ m: 0, p: 2 }}
            id="customized-dialog-title"
          >
            Edit Employee
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.black,
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <form action="">
              <div
                className="Name_Field"
                style={{
                  display: "flex",
                  width: "100%",
                  marginLeft: "0%",
                  height: "60px",
                  justifyContent: "center",
                  marginRight: "100px",
                }}
              >
                <h4 className="nameeditemplabel">Name</h4>
                <input
                  className="name_input"
                  type="text"
                  placeholder="Enter the Name"
                  // value={updatedEmployee.name}
                  name="name"
                  // onChange={OnChange}
                  // required
                  // minLength={3}
                />
              </div>
              <div className="Name_Field">
                <h4 className="emaileditemp_label">Email</h4>
                <input
                  className="name_input"
                  type="email"
                  placeholder="Enter the Email"
                  // value={updatedEmployee.email}
                  // name="email"
                  // onChange={OnChange}
                  // required
                />
              </div>
              <div className="Name_Field">
                <h4 className="passwordeditemp_label">Password</h4>
                <input
                  className="name_input"
                  type="password"
                  placeholder="Enter the Password"
                  // value={updatedEmployee.password}
                  // name="password"
                  // onChange={OnChange}
                  // required
                  // minLength={3}
                />
              </div>
              <div className="Name_Field">
                <h4 className="contacteditemp_label">Contact</h4>
                <input
                  className="name_input"
                  type="text"
                  placeholder="Enter the Contact"
                  // value={updatedEmployee.contact}
                  name="contact"
                  // onChange={OnChange}
                  // required
                  // minLength={7}
                />
              </div>
              <div className="Name_Field">
                <h4 className="usernameeditemp_label">Username</h4>
                <input
                  className="name_input"
                  type="text"
                  placeholder="Enter the Username"
                  // value={updatedEmployee.username}
                  name="username"
                  // onChange={OnChange}
                  // required
                  // minLength={3}
                />
              </div>
              <div className="Name_Field">
                <h4 className="addresseditemp_label">Address</h4>
                <textarea
                  className="name_input"
                  type="text"
                  placeholder="Enter the Address"
                  // value={updatedEmployee.address}
                  name="address"
                  // onChange={OnChange}
                  // required
                  // minLength={3}
                  style={{ fontFamily: "sans-serif", paddingTop: "4px" }}
                />
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              variant="contained"
              style={{
                background: "red",
                marginRight: "20px",
                paddingLeft: "10%",
                paddingRight: "10%",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              onClick={EditPresentEmployee}
            >
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment> */}

      {modalIsOpen && (
        <ForEditingModal
          isOpen={modalIsOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
          setIsOpen={setIsOpen}
          name={updatedEmployee.name}
          email={updatedEmployee.email}
          password={updatedEmployee.password}
          contact={updatedEmployee.contact}
          id={updatedEmployee.id}
          address={updatedEmployee.address}
          username={updatedEmployee.username}
        />
      )}

      <div className="First_Line">
        <h2 style={{ marginLeft: "4%" }}>Employees</h2>
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
          onClick={() => {
            navigate("/admin/addemployee");
          }}
        >
          Add Employee
        </Button>
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
                  Edit
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "17px", fontWeight: "500" }}
                >
                  Remove
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((row) => (
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
                  <StyledTableCell>
                    {!modalIsOpen&&<Fab
                      style={{
                        backgroundColor: "red",
                        height: "38px",
                        width: "38px",
                      }}
                      aria-label="edit"
                      onClick={() => {
                        closeModal();
                        setUpdatedEmployee({
                          id: row._id,
                          name: row.name,
                          email: row.email,
                          password: row.password,
                          contact: row.contact,
                          address: row.address,
                          username: row.username,
                        });
                        openModal();
                      }}
                    >
                      <EditIcon />
                    </Fab>}
                  </StyledTableCell>
                  <StyledTableCell>
                    {!modalIsOpen&&<Fab
                      style={{
                        backgroundColor: "red",
                        height: "38px",
                        width: "38px",
                      }}
                      aria-label="delete"
                      onClick={() => {
                        RemoveEmployee(row._id);
                      }}
                    >
                      <DeleteIcon />
                    </Fab>}
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

export default Employees_Admin;
