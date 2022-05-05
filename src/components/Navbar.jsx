import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  Divider,
  ListItemIcon
} from "@mui/material";
import React, { useState, useEffect } from "react";

// MUI Icons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
// Redux
import { useDispatch, useSelector } from "react-redux";
import SidePannelOne from "./SidePannelOne";

import Zoom from "@mui/material/Zoom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { logout } from "../store/authSlice";
import { GoogleLogout } from "react-google-login";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [value, setValue] = useState(0);
  const products = useSelector((state) => state.cart);
  const authStatus = useSelector((state) => state.auth.status);
  const userDetails = useSelector((state) => state.auth.data);
  const dispatch= useDispatch()
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const calcValue = (products) => {
    let temp = 0;
    for (let i = 0; i < products.length; i++) {
      temp += products[i].quantity;
    }
    return temp;
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler =()=>{
   
  }

  const onLogoutSuccess =(response)=>{
    console.log(response)
    dispatch(logout())
  }

  useEffect(() => {
    setValue(calcValue(products));
  }, [products]);

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Drawer Buttom  */}
        <IconButton
          color="inherit"
          sx={{ flexGrow: 0 }}
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box p={2} width="250px" textAlign="center" role="presentatation">
            <SidePannelOne />
          </Box>
        </Drawer>

        {/* brand Name  */}
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{ marginLeft: "40%", flexGrow: 5 }}
        >
          SHOP-CART
        </Typography>

        <Stack direction="row" spacing={1}>
          <Tooltip title="Home" TransitionComponent={Zoom} leaveDelay={200}>
            <IconButton color="inherit">
              <Link to="/" className="navLink">
                <HomeIcon fontSize="medium" />
              </Link>
            </IconButton>
          </Tooltip>

          <Tooltip title="Cart" TransitionComponent={Zoom} leaveDelay={200}>
            <IconButton color="inherit">
              <Badge badgeContent={value} color="error">
                <Link to="/cart" className="navLink">
                  <ShoppingCartIcon fontSize="medium" />
                </Link>
              </Badge>
            </IconButton>
          </Tooltip>

          {authStatus ? (
            <>
              <Tooltip
                title={userDetails.name}
                TransitionComponent={Zoom}
                leaveDelay={200}
              >
                <IconButton color="inherit" onClick={handleMenuClick}>
                  {/* <LogoutIcon fontSize="large" /> */}
                  <Avatar
                    alt={userDetails.googleId}
                    src={`${userDetails.imageUrl}`}
                  />
                </IconButton>
              </Tooltip>
              <Menu
              
                anchorEl={anchorEl}
                id="account-menu"
                open={openMenu}
                onClose={handleMenuClose}
                onClick={handleMenuClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <Avatar 
                  alt={userDetails.googleId}
                  src={`${userDetails.imageUrl}`}
                  /> {userDetails.name}
                </MenuItem>
                
                <Divider />
                <MenuItem>
                  <ListItemIcon >
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem>
                  <ListItemIcon
                  onClick={logoutHandler}
                  >
                    <GoogleLogout
                    clientId={"379238654079-j8p4i0e1t2ge50ua0likduopc720phei.apps.googleusercontent.com"}
                    buttonText={"Logout"}
                    onLogoutSuccess={onLogoutSuccess}
                    />
                      {/* <Logout 
                    fontSize="small" 
                    /> */}
                    
                    
                  </ListItemIcon>
                 
                </MenuItem>
              </Menu>
            </>
          ) : (
            <></>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
