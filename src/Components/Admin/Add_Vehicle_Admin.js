import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "../../Add_Vehicle.css";

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

  const dropdownFunction = (event) => {
    alert(event.target.value)
  }
  return (
    <div>
      <h2 style={{ marginLeft: "4%", textAlign: "center" }}>Add Vehicle</h2>
      <form action="">
        <div className="Name_Field">
          <h4 className="brand_label">Brand</h4>
          {/* <input
            className="name_input"
            type="text"
            placeholder="Enter the Brand"
          /> */}
          <select
            // value={this.state.selectedOption}
            onChange={dropdownFunction}
            className="name_input"
          >
            <option value="" disabled selected>Select the Brand</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
        <div className="Name_Field">
          <h4 className="year_label">Year</h4>
          <input
            className="name_input"
            type="email"
            placeholder="Enter the Year"
          />
        </div>
        <div className="Name_Field">
          <h4 className="plate_label">Plate No.</h4>
          <input
            className="name_input"
            type="password"
            placeholder="Enter the Plate Number"
          />
        </div>
        <div className="Name_Field">
          <h4 className="description_label">Description</h4>
          <textarea
            className="name_input"
            type="text"
            placeholder="Enter the Description"
            style={{ fontFamily: "sans-serif", paddingTop: "4px" }}
          />
        </div>
        <div className="Name_Field">
          <h4 className="discount_label">Discount</h4>
          <input
            className="name_input"
            type="text"
            placeholder="Enter the Discount"
          />
        </div>
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
          >
            Upload Image
            <VisuallyHiddenInput type="file" />
          </Button>
        </div>
        <div className="button">
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

export default Add_Vehicle_Admin;
