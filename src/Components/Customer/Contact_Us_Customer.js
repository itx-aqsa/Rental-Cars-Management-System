import React from "react";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "../../ContactUs.css";

const Contact_Us_Customer = () => {
  return (
    <div className="Main_Page">
      <div className="one_portion">
        <h2 className="Contact_Us_Heading">Contact Us :- </h2>
        <h5 className="Contact_Us_Paragaraph">
          If you want to get in touch with or contact us or give your feedback
          to us, then please fill out this form, so that we can get your
          feedback and your message. You can also give your feedback on our
          services. If you use our car earlier, then you can also give your
          feedback on the performance of the car.
        </h5>
      </div>
      <div className="contact_portion">
        <div>
          <h2 style={{ marginLeft: "4%", textAlign: "center" }}>
            Form for Contact Us
          </h2>
          <form action="">
            <div className="Name_Field">
              <h4 className="name_label">Name</h4>
              <input
                className="name_input"
                type="text"
                placeholder="Enter your Name"
              />
            </div>
            <div className="Name_Field">
              <h4 className="email_label">Email</h4>
              <input
                className="name_input"
                type="email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="Name_Field">
              <h4 className="carno_label">Car No.</h4>
              <input
                className="name_input"
                type="text"
                placeholder="Enter the Car Plate Number"
              />
            </div>
            <div className="Name_Field">
              <h4 className="rating_label">Rating</h4>
              {/* <FormControl className="radio_forms"> */}
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  style={{marginTop: '12px'}}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="1"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="2"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="3"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="4"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio />}
                    label="5"
                  />
                  
                </RadioGroup>
              {/* </FormControl> */}
            </div>
            <div className="Name_Field">
              <h4 className="message_label">Message</h4>
              <textarea
                className="name_input"
                type="text"
                placeholder="Enter your Message"
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
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us_Customer;
