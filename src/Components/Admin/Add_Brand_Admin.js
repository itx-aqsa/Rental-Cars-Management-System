import React from 'react'
import Button from "@mui/material/Button";
import '../../Add_Brand.css'

const Add_Brand_Admin = () => {
    return (
        <div>
          <h2 style={{ marginLeft: "4%", textAlign: "center", marginBottom: '60px' }}>Add Brand</h2>
          <form action="">
            <div className="Name_Field">
              <h4 className="name_label">Name</h4>
              <input
                className="name_input"
                type="text"
                placeholder="Enter the Name"
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
                Add Brand
              </Button>
            </div>
          </form>
        </div>
  )
}

export default Add_Brand_Admin
