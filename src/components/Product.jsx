import React from "react";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
  CardHeader,
  IconButton,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import {addToCart,removeFromCart} from "../store/cartSlice"




function Product({ title, price, desc, image, category, rating , id}) {
  
    const dispatch = useDispatch()

  const handleClickAdd = (product)=>{
    dispatch(addToCart(product))
  }
  
  return (
    <Box width="350px" height="550px">
      <Card
        sx={{
          padding: "5px",
          paddingBottom:"20px"
          // background:"blue",
          // height:"550px"
        }}
        elevation={3}
      >
        <CardMedia
          component="img"
          // height="400"
          image={image}
          // src={image}
          alt={title}
          className="cardImage"
          sx={{
            height: "250px",
            objectFit: "contain",
          }}
        />

        <CardContent
        sx={{
          // background:"blue",
          // height:"100px",
          margin:"0",
          padding:"0"
        }}
        >
          <Typography gutterBottom variant="h6"  margin={2} >
            {title.length > 30 ? <p>{title.slice(0, 28) + " . "}</p> : title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc.length > 100 ? (
              <p>
                {desc.slice(0, 100)}
                <Typography variant="body2" color="primary">
                  Read more . .
                </Typography>
              </p>
            ) : (
              <p>
                {desc}
                <Typography variant="body2" color="primary">
                  Read more . .
                </Typography>
              </p>
            )}
          </Typography>
          {/* <Button variant="text"> */}
            <Typography 
            variant="h5" 
            color="black" 
            fontWeight={600}
            padding={0}
            margin={0}
            >
              ${price}
            </Typography>
          {/* </Button> */}
          {/* <br /> */}
          <Stack direction="row" sx={{ width: "100%",marginBottom:"10px" }} spacing={2}>
            <Button size="small" variant="contained">
              {rating.rate}
              <StarIcon />
            </Button>
            <Button size="small" variant="contained" color="info">
              {category}
            </Button>
          </Stack>
        </CardContent>
        <CardActions>
          <Button
            size="large"
            variant="contained"
            color="warning"
            onClick={() =>
              handleClickAdd({
                id,
                title,
                price,
                desc,
                image,
                category,
                rating,
              })
            }
            fullWidth
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Product;
