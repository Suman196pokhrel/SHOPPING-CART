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
import React, { useState } from "react";

// MUI Icons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <AppBar>
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
            <Typography variant="h6">Side Pannel</Typography>
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
            <HomeIcon fontSize="medium" />
          </IconButton>

          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon fontSize="medium" />
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
