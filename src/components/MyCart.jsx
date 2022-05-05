import React, { useEffect,useState } from "react";
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

import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { addToCart, clearCart,increment,decrement,removeFromCart } from "../store/cartSlice";
import { Box } from "@mui/system";

function MyCart() {
  const [value, setValue] = useState(0)
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch()


  const handleClickRem =(productId)=>{
     dispatch(removeFromCart(productId))
  }

  const handlePlus = (product)=>{
    dispatch(increment(product))
  }

  const handleMinus = (product)=>{
    dispatch(decrement(product))
  }

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
    <>
      <Grid item md={12}>
        <Box
        sx={{
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between",
          padding:"10px"
        }}
        >
        <Typography
          variant="h5"
          fontWeight={600}
          color="text.secondary"
          textAlign="left"
          sx={{
            paddingLeft: "10px",
          }}
        >
          My Cart({value})
        </Typography>
        <Button 
        variant="outlined" 
        size="large" 
        color="secondary"
        onClick={()=>dispatch(clearCart())}
        >
          Clear Cart
        </Button>
        </Box>
        
      </Grid>

      <Grid item md={12}>
        <Divider />
      </Grid>

      {/* <Grid item container direction={"column"}> */}
        {/* <Stack direction="column"> */}
          {products.map((product) => (
            <Grid
            key={product.id}
            item
              container
              md={12}
              sx={{ margin: "0px", padding: "0px" }}
            >
              {/* Left side */}
              <Grid
                item
                spacing={1}
                md={3}
                sm={12}
                lg={3}
                xl={6}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                style={{
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  justifyContent:"space-evenly",
                  margin:"15px 0px 15px 0px",
                }}
                >
                <img
                    src={product.image}
                    alt={product.title}
                    className="cartProdImg"
                  />
                  <Stack
                    direction="row"
                    spacing={1}
                    width="100%"
                    display="flex"
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop:"15px"
                      // background:"red"
                    }}
                  >
                    <Button 
                    variant="outlined" 
                    color="primary"
                    onClick={()=>handleMinus(product)}
                    >
                    <RemoveIcon />
                    </Button>
                    <Typography variant="h6">{product.quantity}</Typography>
                    <Button 
                    variant="outlined" 
                    color="primary"
                    onClick={()=>handlePlus(product)}
                    
                    >
                      <AddIcon />
                    </Button>
                  </Stack>
                </div>
                 
                
              </Grid>

              {/* Right Side  */}
              <Grid
                // c/ontainer
                item
                spacing={0}
                md={9}
                lg={9}
                xl={6}
                sm={12}
                margin="0px"
                padding="0px"
                sx={{
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="h6" color="GrayText.primary">
                  {product.title}
                </Typography>
                <Typography variant="h6" color="primary" fontWeight="800">
                  ${product.price}
                </Typography>
                <Button 
                variant="contained" 
                color="error"
                onClick={()=>handleClickRem(product.id)}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          ))}
        {/* </Stack> */}
      {/* </Grid> */}
    </>
  );
}

export default MyCart;
