import react, { useState, useEffect, useContext } from "react";
import { BrandContext, FrontendLogContext } from "./AllContexts";

const BrandContextState = (props) => {
  const brandsInitials = [];

  const [brands, setBrands] = useState(brandsInitials);

  const frontendlogcontext = useContext(FrontendLogContext)
  const { addNewFrontEndException } = frontendlogcontext

  const fetchAllBrands = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/brands/getBrands",
        {
          method: "GET",
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      const allBrands = await response.json();
      setBrands(allBrands);
    } catch (error) {
      addNewFrontEndException("BrandContextState.js", "Brands_Screen", error.message)
      console.error("Error fetching data:", error);
    }
  };

  const addNewBrand = async (name, description) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/brands/addNewBrand",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({
            name,
            description,
          }),
        }
      );

      const json = await response.json();
      console.log(json);

      setBrands(brands.concat(json));

      console.log(brands);
    } catch (error) {
      addNewFrontEndException("BrandContextState.js", "Add_Brand_Admin_Screen", error.message)
      console.error("Error adding the data:", error);
    }
  };

  const removeBrand = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/brands/removeBrand/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      const json = await response.json();
      console.log(json);

      const newBrands = brands.filter((brand) => {
        return brand._id !== id;
      });

      setBrands(newBrands);
    } catch (error) {
      addNewFrontEndException("BrandContextState.js", "Brands_Admin_Screen", error.message)
      console.error("Error removing the data:", error);
    }
  };

  const editBrand = async (id, name, description) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/brands/editBrand/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ name, description }),
        }
      );

      const json = await response.json();
      console.log(json);

      let newBrands = JSON.parse(JSON.stringify(brands));
      for (let index = 0; index < newBrands.length; index++) {
        const element = brands[index];
        if (element._id === id) {
          newBrands[index].name = name;
          newBrands[index].description = description;
          break;
        }
      }
      // console.log(newNotes)
      setBrands(newBrands);
    } catch (error) {
      // alert("Error editing the item.");
      addNewFrontEndException("BrandContextState.js", "Brands_Admin_Screen", error.message)
      console.log("Error editing the employee: ", error);
    }
  };

  return (
    <BrandContext.Provider
      value={{ brands, setBrands, fetchAllBrands, addNewBrand, removeBrand, editBrand }}
    >
      {props.children}
    </BrandContext.Provider>
  );
};

export default BrandContextState;
