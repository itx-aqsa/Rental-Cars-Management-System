import React from "react";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "../../Help_Center.css";
import image from "../../Images/tow.jpeg";

const About_Us_Customer = () => {
  return (
    <div className="Main_Page">
      <div className="one_portion">
        <h2 className="Contact_Us_Heading">About Us :- </h2>
        <p className="First_Paragraph">
          Welcome to Rental Cars, your trusted partner in car rentals and
          transportation solutions. We're passionate about providing you with
          the ultimate driving experience and making your journeys memorable.
          Get to know us better!
        </p>
        <p className="First_Paragraph">
          At Rental Cars, we believe that every journey should be more than just
          a ride from point A to B—it should be an adventure. Our story began
          2003, driven by a vision to redefine the car rental industry. Founded
          by Zaeem, a seasoned traveler and car enthusiast, we set out to create
          a car rental experience that goes beyond the ordinary.
        </p>
        <p className="First_Paragraph">
          Our mission is simple yet powerful: to provide our customers with
          safe, reliable, and affordable transportation solutions while
          exceeding their expectations in every way. We're committed to
          delivering top-notch customer service, maintaining a diverse and
          well-maintained fleet of vehicles, and ensuring that your journey is
          smooth, hassle-free, and enjoyable.
        </p>
        <p className="First_Paragraph">
          We put our customers at the heart of everything we do. Your
          satisfaction is our priority, and we work tirelessly to meet your
          needs.
        </p>
        <p className="First_Paragraph">
          Our fleet comprises a wide range of vehicles, from compact cars to
          luxury SUVs, all meticulously maintained to ensure your safety and
          comfort.
        </p>
        <p className="First_Paragraph">
          We believe in transparent pricing with no hidden fees. You'll always
          know what you're paying for.
        </p>
        <p className="First_Paragraph">
          Our dedicated customer support team is available around the clock to
          assist you, answer your questions, and provide assistance when you
          need it.
        </p>
        <p className="First_Paragraph">
          If you have any questions or need assistance, our customer support
          team is available 24/7. You can reach us at:
        </p>

        <div className="For_Phone">
          <h4 className="Phonename">Phone : </h4>
          <h4 className="Phonenumber">12345678</h4>
        </div>
        <div className="For_Email">
          <h4 className="Emailname">Email : </h4>
          <h4 className="Emailaddress">RentalCars@gmail.com</h4>
        </div>
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
            marginTop: "50px",
            marginLeft: "10%",
          }}
        >
          Cancel
        </Button>
      </div>
      <div className="contact_portion">
        <img src={image} className="Image" alt="Image is not found." />
      </div>
    </div>
  );
};

export default About_Us_Customer;
