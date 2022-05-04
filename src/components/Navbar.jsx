import {
  AppBar,
  Badge,
  Box,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState,useEffect } from "react";

// MUI Icons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";



// Redux 
import { useSelector } from "react-redux";
import SidePannelOne from "./SidePannelOne";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [value, setValue] = useState(0)
  const products = useSelector(state=>state.cart)


  const calcValue=(products)=>{
    let temp =0
    for(let i=0;i<products.length;i++){
      temp += products[i].quantity 
    }
    return temp
  }

    useEffect(()=>{
     setValue(calcValue(products))
    },[products])

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Drawer Buttom  */}
        <IconButton color="inherit" sx={{ flexGrow: 0 }} onClick={()=>setIsDrawerOpen(true)}>
          <MenuIcon fontSize="large"/>
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
          
            <IconButton color="inherit">
              <Link to="/" className="navLink">
              <HomeIcon fontSize="medium"/>
              </Link>
            </IconButton>
          
          

          <IconButton color="inherit">
            <Badge badgeContent={value} color="error">
              <Link to="/cart" className="navLink">
                <ShoppingCartIcon fontSize="medium" />
              </Link>
              
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <AccountCircleIcon fontSize="medium" />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
