import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "../../Edit_Vehicle.css";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState, useEffect, useContext } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { VehicleContext, BrandContext, AlertContext } from "../../Context/AllContexts";

const Edit_Vehicle_Admin = () => {
  const navigate = useNavigate();
  const modalRef = useRef();

  const Context = useContext(VehicleContext)
  const brandsContext = useContext(BrandContext)
  const alertcontext = useContext(AlertContext)

  const { alertData, setAlertData, showAlert, setShowAlert } = alertcontext
  const { brands, fetchAllBrands } = brandsContext
  const { vehicles, addNewVehicle, vehicleToBeEdited, setVehicleToBeEdited, editVehicle } = Context


  // {
  //   img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
  // },

  const [imageLink, setImageLink] = useState("");
  const [imageLinks, setImageLinks] = useState([]);

  const [newVehicle, setNewVehicle] = useState({
    brand: vehicleToBeEdited.brand,
    year: vehicleToBeEdited.year,
    plateNumber: vehicleToBeEdited.plateNumber,
    image: vehicleToBeEdited.image,
    pricePerDay: vehicleToBeEdited.pricePerDay,
    description: vehicleToBeEdited.description,
    status: vehicleToBeEdited.status,
    discount: vehicleToBeEdited.discount
  })

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchAllBrands()
      setImageLinks(vehicleToBeEdited.image)
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

  const dropdownFunction = (event) => {
    // alert(event.target.value);
    brands.map((item)=>{
      if(item.name === event.target.value){
        setNewVehicle({...newVehicle, brand: item._id})
        // alert(item._id)
      }
    })
  };

  const dropdownFunctionStatus = (event) => {
    // alert(event.target.value)
    setNewVehicle({...newVehicle, status: event.target.value})
  }

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log("After");
    console.log(imageLinks);
  }, [imageLinks]);

  const addImageLink = () => {
    if (imageLink) {
      setImageLinks([...imageLinks, imageLink ]);
      setImageLink("");
      handleClose();
    }
  };

  const OnChange = (e) => {
    setNewVehicle({...newVehicle, [e.target.name]: e.target.value})
  }

  const EditPresentVehicle = (e) => {
    e.preventDefault()
    editVehicle(
      vehicleToBeEdited.id,
      newVehicle.brand,
      newVehicle.year,
      newVehicle.plateNumber,
      newVehicle.description,
      imageLinks,
      newVehicle.status,
      newVehicle.discount,
      newVehicle.pricePerDay
    )
    setShowAlert(true);
        setAlertData({
          severity: "success",
          message: "Vehicle Updated Successfully!",
        });
        setTimeout(() => {
          setShowAlert(false)
        }, 3000);
    navigate('/admin/vehicles')
  }

  return (
    <div>
      <React.Fragment>
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
            Upload Image Link
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
                className="NameeditVehicle_Field"
                style={{
                  display: "flex",
                  width: "100%",
                  marginLeft: "0%",
                  /* border: 1px solid red; */
                  height: "60px",
                  justifyContent: "center",
                  marginRight: "100px",
                }}
              >
                {/* <h4 className="nameeditemplabel">Name</h4> */}
                <input
                  className="nameeditvehicle_label"
                  type="text"
                  placeholder="Paste link of your Image"
                  value={imageLink}
                  onChange={(e) => setImageLink(e.target.value)}
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
              onClick={addImageLink}
            >
              Add Image
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>

      <h2 style={{ marginLeft: "4%", textAlign: "center" }}>
        Edit the Vehicle
      </h2>
      <form action="" onSubmit={EditPresentVehicle}>
        <div className="NameeditVehicle_Field">
          <h4 className="brandeditvehicle_label">Brand</h4>
          <select
            onChange={dropdownFunction}
            className="name_input"
          >
            <option value="" disabled selected>
              Select the Brand
            </option>
            {
              brands.map((element)=>{
                return <option>{element.name}</option>
              })
            }
          </select>
        </div>
        <div className="NameeditVehicle_Field">
          <h4 className="yeareditvehicle_label">Year</h4>
          <input
            className="name_input"
            type="text"
            placeholder="Enter the Year"
            value={newVehicle.year}
            onChange={OnChange}
            name="year"
            required
          />
        </div>
        <div className="NameeditVehicle_Field">
          <h4 className="plateeditvehicle_label">Plate No.</h4>
          <input
            className="name_input"
            type="text"
            placeholder="Enter the Plate Number"
            value={newVehicle.plateNumber}
            onChange={OnChange}
            name="plateNumber"
            required
            minLength={4}
          />
        </div>
        <div className="Name_Field">
          <h4 className="pricePerDayeditvehicle_label">Price Per Day</h4>
          <input
            className="name_input"
            type="number"
            placeholder="Enter the Price For One Day"
            required
            name="pricePerDay"
            value={newVehicle.pricePerDay}
            onChange={OnChange}
          />
        </div>
        <div className="NameeditVehicle_Field">
          <h4 className="descriptioneditvehicle_label">Description</h4>
          <textarea
            className="name_input"
            type="text"
            placeholder="Enter the Description"
            value={newVehicle.description}
            onChange={OnChange}
            name="description"
            required
            minLength={3}
            style={{ fontFamily: "sans-serif", paddingTop: "4px" }}
          />
        </div>
        <div className="NameeditVehicle_Field">
          <h4 className="brandeditvehicle_label">Status</h4>
          <select
            onChange={dropdownFunctionStatus}
            className="name_input"
          >
            <option value="" disabled selected>
              Select the Status
            </option>
            <option>Available</option>
            <option>Not Available</option>
              
          </select>
        </div>
        <div className="NameeditVehicle_Field">
          <h4 className="discounteditvehicle_label">Discount</h4>
          <input
            className="name_input"
            type="text"
            placeholder="Enter the Discount"
            onChange={OnChange}
            name="discount"
            required
            value={newVehicle.discount}
          />
        </div>
        <div className="Uploadeditvehicle_Button">
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            style={{
              backgroundColor: "red",
              fontWeight: "bold",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
            onClick={() => {
              modalRef.current.click();
            }}
          >
            Upload Image
            {/* <VisuallyHiddenInput type="file" /> */}
          </Button>
        </div>
        <div>
          {/* <List style={{border: '1px solid red'}}>
            {imageLinks.map((link, index) => (
              <ListItem key={index}>
                <ListItemText primary={link} />
                
              </ListItem>
            ))}
          </List> */}
          {/* <ImageList sx={{ width: 500, height: 450 }}> */}
          <ImageList
            style={{
              marginLeft: "12%",
              marginRight: "12%",
              marginTop: "40px",
              marginBottom: "100px",
            }}
          >
            {imageLinks.map((img) => (
              <ImageListItem key={img}>
                <img
                  srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${img}?w=248&fit=crop&auto=format`}
                  alt="Image is not found."
                  loading="lazy"
                  style={{ width: "90%", height: "100%" }}
                />
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={(e) => {
                    const updatedImages = imageLinks.filter((image) => {
                      return image != img;
                    });
                    setImageLinks(updatedImages);
                  }}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="buttoneditvehicle">
          <Button
            variant="contained"
            style={{
              backgroundColor: "red",
              fontWeight: "bold",
              paddingLeft: "6%",
              paddingRight: "6%",
              borderRadius: "5px",
              textTransform: "uppercase",
            }}
            onClick={() => {
              navigate("/admin/vehicles");
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            style={{
              backgroundColor: "red",
              fontWeight: "bold",
              paddingLeft: "6%",
              paddingRight: "6%",
              borderRadius: "5px",
              textTransform: "uppercase",
            }}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Edit_Vehicle_Admin;
