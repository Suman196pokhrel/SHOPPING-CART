import { Button, Grid, Modal, Box, Typography, Card, Paper, Divider } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalOne from "../components/ModalOne";

import MyCart from "../components/MyCart";
import PriceDetails from "../components/PriceDetails";
import { clearCart } from "../store/cartSlice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {motion} from "framer-motion"



function Cart() {
  const products = useSelector((state) => state.cart);

    const dispatch = useDispatch();

  const notify= () => {
    toast.info("Order placed sucessfully")
    console.log("Toast initiated")
    dispatch(clearCart());
  };

  return (
    <Grid
      container
      spacing={5}
      sx={{
        padding: "70px",
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
          margin: "0",
          padding: "0",
          opacity:0
          
        }}
        component={motion.div}
        initial={{x:"-400px"}}
        animate={{x:"0px",opacity:1}}
        transition={{ duration: 0.6 }}
        
      >
        <MyCart />
      </Grid>

      {/* Price Details  */}
      <Grid 
      item 
      sm={12} 
      md={4} 
      lg={4}
      sx={{
        opacity:0
      }}
      component={motion.div}
        initial={{y:"400px"}}
        animate={{y:"0px",opacity:1}}
        transition={{ duration: 0.6 }}
      >
        {products.length > 0 ? (
          <>
            <PriceDetails />
            <Button
              fullWidth
              sx={{ marginTop: "20px", height: "60px", fontSize: "20px" }}
              variant="contained"
              color="warning"
              
              onClick={notify}

            >
              Place Order
            </Button>
            
            
          </>
        ) : (
          <Paper
          sx={{
            height:"400px"
          }}
          elevation={3}
          >
            <Typography variant="h6" color="text.secondary" padding={3}>
              No products in cart
            </Typography>
            <Divider />
          </Paper>
        )}
      </Grid>
            
      <ToastContainer 
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
    </Grid>
  );
}

export default Cart;
