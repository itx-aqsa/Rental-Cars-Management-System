import React, { useState, useEffect, useContext }  from 'react'
import Button from "@mui/material/Button";
import '../../Add_Brand.css'
import { useNavigate } from 'react-router-dom';
import { BrandContext } from '../../Context/AllContexts'

const Add_Brand_Admin = () => {
  const navigate = useNavigate();
  const Context = useContext(BrandContext)
  const { brands, addNewBrand } = Context;

  const [newBrand, setNewBrand] = useState({
    name: "",
    description: ""
  })

  useEffect(() => {
    if(localStorage.getItem('token')){
      
    }
    else{
      alert("You have to Logged In into the system.")
      navigate('/Login')
    }
  }, [])

  const AddNewBrand = (e) => {
    e.preventDefault();
    addNewBrand(newBrand.name, newBrand.description)
    alert("Brand Added Successfully!")
    navigate('/admin/brands')
  }

  const OnChange = (e) => {
    setNewBrand({...newBrand, [e.target.name]: e.target.value })
  }



    return (
        <div>
          <h2 style={{ marginLeft: "4%", textAlign: "center", marginBottom: '60px' }}>Add Brand</h2>
          <form action="" onSubmit={AddNewBrand}>
            <div className="Name_Field">
              <h4 className="nameaddbrand_label">Name</h4>
              <input
                className="name_input"
                type="text"
                placeholder="Enter the Name"
                value={newBrand.name}
                name='name'
                onChange={OnChange}
                required
                minLength={3}
              />
            </div>
            
            <div className="Name_Field">
              <h4 className="descriptionaddbrand_label">Description</h4>
              <textarea
                className="name_input"
                type="text"
                placeholder="Enter the Description"
                value={newBrand.description}
                name='description'
                onChange={OnChange}
                required
                minLength={3}
                style={{ fontFamily: "sans-serif", paddingTop: "4px" }}
              />
            </div>
            
            <div className="buttonaddbrand">
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
                onClick={()=>{navigate('/admin/brands')}}
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
