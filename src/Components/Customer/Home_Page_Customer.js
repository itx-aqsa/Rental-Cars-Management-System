import * as React from "react";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import "../../Home_Page_Customer.css";
import Home_Section1_Customer from "./Home_Section1_Customer";
import Home_Section2_Customer from "./Home_Section2_Customer";
import Home_Section3_Customer from "./Home_Section3_Customer";
import One_Vehicle_Page_Customer from "./One_Vehicle_Page_Customer";
import Reservation_Vehicle_Customer from "./Reservation_Vehicle_Customer";
import Contact_Us_Customer from "./Contact_Us_Customer";
import Rules_Insurance_Customer from "./Rules_Insurance_Customer";
import Help_Center_Customer from "./Help_Center_Customer";
import About_Us_Customer from "./About_Us_Customer";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import Customer_Main_Section from "./Customer_Main_Section";
import { AlertContext } from "../../Context/AllContexts";
import AlertBar from "../Alert";

const Home_Page_Customer = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const alertcontext = useContext(AlertContext)
  const { showAlert, setShowAlert, alertData, setAlertData } = alertcontext

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    // if (event.type === "click") {
    //   // Check if the click occurred outside the drawer content
    //   const drawerElement = document.getElementById(anchor);
    //   if (drawerElement && !drawerElement.contains(event.target)) {
    //     setState({ ...state, [anchor]: false });
    //     return;
    //   }
    // }

    setState({ ...state, [anchor]: open });
  };

  const handleListItemClick = () => {
    // Display the alert when the list item is clicked
    alert("List item clicked!");
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem style={{ marginTop: "30px" }}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="/"
              style={{
                color: "red",
                textDecoration: "none",
                fontWeight: "bold",
                marginLeft: "30px",
              }}
            >
              Rental Cars
            </Link>
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={handleListItemClick}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={handleListItemClick}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={handleListItemClick}>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={handleListItemClick}>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Help & Policies" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider style={{ marginTop: "130px" }} />
      <List>
        <ListItem>
          <ListItemButton onClick={handleListItemClick}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Up" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={handleListItemClick}>
            <ListItemIcon>
              <VpnKeyIcon />
            </ListItemIcon>
            <ListItemText primary="Log In" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {/* <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup> */}

      {showAlert&&<AlertBar />}

      <Customer_Main_Section />
      <Outlet />
     
    </div>
  );
};

export default Home_Page_Customer;
