import React, { useEffect, useRef, useState, useContext } from "react";
import Modal from "react-modal";
import { BrandContext } from "../../Context/AllContexts";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "../../edit_employee.css";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ForEditingBrandModal = (props) => {
  const ref = useRef();
  const closeRef = useRef();
  const Context = useContext(BrandContext);

  const { editBrand } = Context;

  const [updatedBrand, setUpdatedBrand] = useState({
    id: "",
    name: "",
    description: "",
    });

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    setUpdatedBrand({
      id: props.id,
      name: props.name,
      description: props.description,
    });
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    ref.current.click();
  }, []);

  const EditPresentBrand = (e) => {
    e.preventDefault();
    editBrand(
    updatedBrand.id,
    updatedBrand.name,
    updatedBrand.description,
    )
    alert("Edited Successfully!");
    closeRef.current.click();
  };

  const OnChange = (e) => {
    setUpdatedBrand({ ...updatedBrand, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <button onClick={openModal} style={{ display: "none" }} ref={ref}>
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ marginTop: "0" }}>
          <DialogTitle
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              textAlign: "center",
            }}
            sx={{ m: 0, p: 2 }}
            id="customized-dialog-title"
          >
            Edit Brand
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={()=>{
                closeModal();
                closeRef.current.click();
            }}
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
          <form action="" onSubmit={EditPresentBrand}>
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
                <h4 className="nameeditbrand_label">Name</h4>
                <input
                  className="name_input"
                  type="text"
                  placeholder="Enter the Name"
                  name="name"
                  value={updatedBrand.name}
                  onChange={OnChange}
                  required
                  minLength={3}
                />
              </div>
              <div className="Name_Field">
                <h4 className="descriptioneditbrand_label">Description</h4>
                <textarea
                  className="name_input"
                  type="text"
                  placeholder="Enter the Description"
                  name="description"
                  value={updatedBrand.description}
                  onChange={OnChange}
                  required
                  minLength={3}
                  style={{ fontFamily: "sans-serif", paddingTop: "4px" }}
                />
              </div>
            <Button
              autoFocus
              variant="contained"
              ref={closeRef}
              style={{
                background: "red",
                marginRight: "40px",
                paddingLeft: "8%",
                paddingRight: "8%",
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "10%",
              }}
              onClick={() => {
                closeModal();
                props.setIsOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button
              autoFocus
              variant="contained"
              type="submit"
              style={{
                background: "red",
                marginRight: "20px",
                paddingLeft: "8%",
                paddingRight: "8%",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Save changes
            </Button>
          </form>
          </DialogContent>
        </div>
      </Modal>
    </div>
  );
};

export default ForEditingBrandModal;
