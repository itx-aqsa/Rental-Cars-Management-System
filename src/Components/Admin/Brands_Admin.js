import React, { useEffect, useState, useContext } from "react";
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
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import "../../edit_brand.css";
import ForEditingBrandModal from "./ForEditingBrand";
import { BrandContext } from "../../Context/AllContexts";

const Brands_Admin = () => {
  const navigate = useNavigate();
  const modalRef = useRef();

  const [updatedBrand, setUpdatedBrand] = useState({
    id: "",
    name: "",
    description: ""
  })

  const Context = useContext(BrandContext);
  const { brands, fetchAllBrands, removeBrand } = Context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchAllBrands();
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

  const [open, setOpen] = React.useState(false);

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

  const RemovePresentBrand = (id) => {
    alert("Deleted Successfully!")
    removeBrand(id)
  }

  return (
    <div>
      {modalIsOpen && (
        <ForEditingBrandModal
          isOpen={modalIsOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
          setIsOpen={setIsOpen}
          id={updatedBrand.id}
          name={updatedBrand.name}
          description={updatedBrand.description}
        />
      )}

      <div className="First_Line">
        <h2 style={{ marginLeft: "4%" }}>Brands</h2>
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
            navigate("/admin/addbrand");
          }}
        >
          Add Brand
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
                  Description
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
              {brands.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    style={{ fontSize: "15px" }}
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ fontSize: "15px" }}>
                    {row.description}
                  </StyledTableCell>
                  <StyledTableCell>
                    {!modalIsOpen && (
                      <Fab
                        style={{
                          backgroundColor: "red",
                          height: "38px",
                          width: "38px",
                        }}
                        aria-label="edit"
                        onClick={() => {
                          closeModal();
                          setUpdatedBrand({
                            id: row._id,
                            name: row.name,
                            description: row.description,
                          });
                          openModal();
                        }}
                      >
                        <EditIcon />
                      </Fab>
                    )}
                  </StyledTableCell>
                  <StyledTableCell>
                    {!modalIsOpen && (
                      <Fab
                        style={{
                          backgroundColor: "red",
                          height: "38px",
                          width: "38px",
                        }}
                        aria-label="edit"
                        onClick={() => {
                          RemovePresentBrand(row._id);
                        }}
                      >
                        <DeleteIcon />
                      </Fab>
                    )}
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

export default Brands_Admin;
