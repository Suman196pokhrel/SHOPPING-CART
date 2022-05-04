import {

  Button,
  Grid,

} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";


import MyCart from "../components/MyCart";
import PriceDetails from "../components/PriceDetails";

function Cart() {
  const products = useSelector((state) => state.cart);


 

  return (
    <Grid
      container
      spacing={5}
      sx={{
        padding:"70px"
      }}
    >
      {/* Product Details  */}
      <Grid 
      item 
      sm={12} 
      md={8} 
      lg={8} 
      container 
      boxShadow={5}
      padding={0}
      margin={0}
      alignItems="flex-start"
      justifyContent={"center"}
      columnSpacing={0}
      sx={{
        margin:"0",
        padding:"0"
      }}
      >
        <MyCart />
      </Grid>

      {/* Price Details  */}
      <Grid item sm={12}  md={4} lg={4} >
        {
          products.length >0 ? (<PriceDetails />):(<></>)
        }
        <Button fullWidth sx={{marginTop:"20px",height:"60px",fontSize:"20px"}} variant="contained" color="warning">Place Order</Button>
        </Grid>
      
    </Grid>
  );
}

export default Cart;
