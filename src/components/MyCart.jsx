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

import { addToCart, increment,decrement,removeFromCart } from "../store/cartSlice";

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
      </Grid>

      <Grid item md={12}>
        <Divider />
      </Grid>

      <Grid item container md={12}>
        <Stack direction="column">
          {products.map((product) => (
            <Grid
              container
              spacing={5}
              md={12}
              sx={{ margin: "0px", padding: "0px" }}
            >
              {/* Left side */}
              <Grid
                container
                item
                spacing={1}
                md={4}
                sm={4}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Grid item md={12}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="cartProdImg"
                  />
                </Grid>

                <Grid item md={12} textAlign="center">
                  <Stack
                    direction="row"
                    spacing={1}
                    width="100%"
                    display="flex"
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
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
                </Grid>
              </Grid>

              {/* Right Side  */}
              <Grid
                // c/ontainer
                item
                spacing={0}
                md={8}
                sm={8}
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
        </Stack>
      </Grid>
    </>
  );
}

export default MyCart;
