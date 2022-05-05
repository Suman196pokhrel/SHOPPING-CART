import { Button, Grid, Modal, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalOne from "../components/ModalOne";

import MyCart from "../components/MyCart";
import PriceDetails from "../components/PriceDetails";
import { clearCart } from "../store/cartSlice";

import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart() {
  const products = useSelector((state) => state.cart);

  // For Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const notify= () => {
    toast("Order Placed SucessFully",{

    });

    // For Toast 
    // const notify("Order Placed")

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
        }}
      >
        <MyCart />
      </Grid>

      {/* Price Details  */}
      <Grid item sm={12} md={4} lg={4}>
        {products.length > 0 ? (
          <>
            <PriceDetails />
            <Button
              fullWidth
              sx={{ marginTop: "20px", height: "60px", fontSize: "20px" }}
              variant="contained"
              color="warning"
              // onClick={handleOrder}
              onClick={notify}

            >
              Place Order
            </Button>
            
          </>
        ) : (
          <><h4>No Products Added</h4></>
        )}
      </Grid>
      <ToastContainer 
            draggable
            autoClose={2500}
            />
      <ModalOne open={open} handleClose={handleClose} />
    </Grid>
  );
}

export default Cart;
