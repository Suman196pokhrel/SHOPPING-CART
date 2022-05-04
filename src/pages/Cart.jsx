import {
  Card,
  CardHeader,
  Stack,
  Divider,
  Grid,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useMediaQuery } from "@mui/material";
import MyCart from "../components/MyCart";
import PriceDetails from "../components/PriceDetails";

function Cart() {
  const value = useSelector((state) => state.cart.length);
  const products = useSelector((state) => state.cart);


 

  return (
    <Grid
      container
      spacing={5}
      sx={{
        padding:"70px 0 0 100px"
      }}
    >
      {/* Product Details  */}
      <Grid item sm={12} md={5} lg={8} container boxShadow={5}>
        <MyCart />
      </Grid>

      {/* Price Details  */}
      <Grid item sm={12} md={4} lg={4} >
        {
          products.length >0 ? (<PriceDetails />):(<></>)
        }
        </Grid>
      
    </Grid>
  );
}

export default Cart;
