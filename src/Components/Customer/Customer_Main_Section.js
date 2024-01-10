import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import "../../Home_Page_Customer.css";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { AlertContext } from "../../Context/AllContexts";

const Customer_Main_Section = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const alertcontext = useContext(AlertContext);
  const { setShowAlert, setAlertData } = alertcontext;

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

    if (event.type === "click") {
      // Check if the click occurred outside the drawer content
      const drawerElement = document.getElementById(anchor);
      if (drawerElement && !drawerElement.contains(event.target)) {
        setState({ ...state, [anchor]: false });
        return;
      }
    }

    setState({ ...state, [anchor]: open });
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleAboutUsClick = () => {
    navigate("/customer/aboutus");
  };

  const handleContactUsClick = () => {
    navigate("/customer/contactus");
  };

  const handleHelpClick = () => {
    navigate("/customer/helpandpolicies");
  };
  const handleSignUpClick = () => {
    navigate("/signup");
  };
  const handleLogInClick = () => {
    navigate("/login");
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
          <ListItemButton onClick={handleHomeClick}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={handleAboutUsClick}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={handleContactUsClick}>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={handleHelpClick}>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Help & Policies" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider style={{ marginTop: "130px" }} />
      <List>
        {!localStorage.getItem("customerToken") ? (
          <ListItem>
            <ListItemButton onClick={handleSignUpClick}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Up" />
            </ListItemButton>
          </ListItem>
        ) : (
          ""
        )}
        {!localStorage.getItem("customerToken") ? (
          <ListItem>
            <ListItemButton onClick={handleLogInClick}>
              <ListItemIcon>
                <VpnKeyIcon />
              </ListItemIcon>
              <ListItemText primary="Log In" />
            </ListItemButton>
          </ListItem>
        ) : (
          ""
        )}
        {localStorage.getItem("customerToken") ? (
          <ListItem>
            <ListItemButton
              onClick={() => {
                localStorage.removeItem("customerToken");
                setShowAlert(true);
                setAlertData({
                  severity: "success",
                  message: "Logged Out Successfully!",
                });
                setTimeout(() => {
                  setShowAlert(false);
                }, 3000);
                navigate("/Login");
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItemButton>
          </ListItem>
        ) : (
          ""
        )}
      </List>
    </Box>
  );

  return (
    <div>
      {/* <FormGroup style={{ marginTop: '100px'}}>
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
      <AppBar
        position="fixed"
        style={{ backgroundColor: "rgb(245, 243, 243)", position: "" }}
      >
        <Toolbar>
          <div className="Hamburger">
            <IconButton
              size="large"
              edge="start"
              color="dark"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer("left", true)}
            >
              <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
              <MenuIcon />
            </IconButton>
          </div>
          <div className="navbar_items">
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" className="Company_Heading">
                Rental Cars
              </Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/" style={{color: location.pathname=="/"?"red":""}} className="navbar_item">
                Home
              </Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/customer/aboutus" style={{color: location.pathname=="/customer/aboutus"?"red":""}} className="navbar_item">
                About Us
              </Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/customer/contactus" style={{color: location.pathname=="/customer/contactus"?"red":""}} className="navbar_item">
                Contact Us
              </Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/customer/helpandpolicies"style={{color: location.pathname=="/customer/helpandpolicies"?"red":""}} className="navbar_item">
                Help & Policies
              </Link>
            </Typography>
          </div>
          <div className="navbar_auth">
            {!localStorage.getItem("customerToken") ? (
              <Typography variant="h6" component="div">
                <Link to="/signup" className="navbar_auth_item">
                  Sign Up
                </Link>
              </Typography>
            ) : (
              ""
            )}
            {!localStorage.getItem("customerToken") ? (
              <Typography variant="h6" component="div">
                <Link to="/login" className="navbar_auth_item">
                  Log In
                </Link>
              </Typography>
            ) : (
              ""
            )}
            {localStorage.getItem("customerToken") ? (
              <Typography variant="h6" component="div">
                <Button
                  variant="text"
                  color="error"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "8px",
                  }}
                  onClick={() => {
                    localStorage.removeItem("customerToken");
                    setShowAlert(true);
                    setAlertData({
                      severity: "success",
                      message: "Logged Out Successfully!",
                    });
                    setTimeout(() => {
                      setShowAlert(false);
                    }, 3000);
                    navigate("/Login");
                  }}
                >
                  Log Out
                </Button>
              </Typography>
            ) : (
              ""
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Customer_Main_Section;
