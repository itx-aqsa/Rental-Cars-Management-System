import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "../../Add_Vehicle.css";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState, useEffect, useContext } from "react";
import { TextField, List, ListItem, ListItemText } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import firstimage from "../../Images/home_page_car.png";
// import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { VehicleContext, BrandContext } from "../../Context/AllContexts";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Add_Vehicle_Admin = () => {
  const navigate = useNavigate();
  const modalRef = useRef();


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

  const Context = useContext(VehicleContext)
  const brandsContext = useContext(BrandContext)
  const { brands, fetchAllBrands } = brandsContext
  const { vehicles, addNewVehicle } = Context

  const [newVehicle, setNewVehicle] = useState({
    brand: "",
    year: "",
    plateNumber: "",
    image: [],
    description: "",
  })

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchAllBrands()
    } else {
      alert("You have to Logged In into the system.");
      navigate("/Login");
    }
  }, []);

  const [imageLink, setImageLink] = useState("");
  const [imageLinks, setImageLinks] = useState([]);

  const dropdownFunction = (event) => {
    // alert(event.target.value);
    // const brandId = 
    brands.map((item)=>{
      if(item.name === event.target.value){
        setNewVehicle({...newVehicle, brand: item._id})
        // alert(item._id)
      }
    })
  };

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
      // setImageLinks([...imageLinks, {img: imageLink}]);
      setImageLinks([...imageLinks, imageLink]);
      setImageLink("");
      handleClose();
    }
  };

  const OnChange = (e) => {
    setNewVehicle({...newVehicle, [e.target.name]: e.target.value})
  }

  const AddNewVehicle = (e) => {
    e.preventDefault()
    setNewVehicle({...newVehicle, image: imageLinks})
    console.log(newVehicle)
    addNewVehicle(newVehicle.brand, newVehicle.year, newVehicle.plateNumber, imageLinks, newVehicle.description)
    alert("Vehicle Added Successfully!")
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
                className="Name_Field"
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
                  className="nameaddvehicle_input"
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

      <h2 style={{ marginLeft: "4%", textAlign: "center" }}>Add Vehicle</h2>
      <form action="" onSubmit={AddNewVehicle}>
        <div className="Name_Field">
          <h4 className="brandaddvehicle_label">Brand</h4>
          <select
            // value={this.state.selectedOption}
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
            {/* <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option> */}
          </select>
        </div>
        <div className="Name_Field">
          <h4 className="yearaddvehicle_label">Year</h4>
          <input
            className="name_input"
            type="text"
            placeholder="Enter the Year"
            required
            name="year"
            value={newVehicle.year}
            onChange={OnChange}
          />
        </div>
        <div className="Name_Field">
          <h4 className="plateaddvehicle_label">Plate No.</h4>
          <input
            className="name_input"
            type="text"
            placeholder="Enter the Plate Number"
            required
            name="plateNumber"
            value={newVehicle.plateNumber}
            onChange={OnChange}
            minLength={4}
          />
        </div>
        <div className="Name_Field">
          <h4 className="descriptionaddvehicle_label">Description</h4>
          <textarea
            className="name_input"
            type="text"
            placeholder="Enter the Description"
            required
            name="description"
            value={newVehicle.description}
            onChange={OnChange}
            minLength={3}
            style={{ fontFamily: "sans-serif", paddingTop: "4px" }}
          />
        </div>
        {/* <div className="Name_Field">
          <h4 className="discountaddvehicle_label">Discount</h4>
          <input
            className="name_input"
            type="text"
            placeholder="Enter the Discount"
          />
        </div> */}
        <div className="Upload_Button">
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
                <IconButton aria-label="delete" size="large" onClick={(e)=>{
                  const updatedImages = imageLinks.filter((image)=>{
                    return image != img
                  })
                  setImageLinks(updatedImages);
                }}>
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="buttonaddvehicle">
          <Button
            // type="submit"
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
            Add Vehicle
          </Button>
        </div>
      </form>
    </div>
  );
};

// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//   },
// ];

export default Add_Vehicle_Admin;
