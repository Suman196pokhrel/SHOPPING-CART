import React, { useRef, useEffect } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { useState } from "react";
import SellIcon from "@mui/icons-material/Sell";

import { motion,Variants } from "framer-motion";

function Product({ title, price, desc, image, category, rating, id, added }) {
  const dispatch = useDispatch();
  const products_added_check = useSelector((state) => state.cart);
  const [buttonDis, setButtonDis] = useState(false);
  const [buttonText, setButtonText] = useState("ADD TO CART");

  const handleClickAdd = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    products_added_check.map((item) => {
      if (item.id == id) {
        setButtonDis(true);
        setButtonText("ADDED TO CART");
      }
    });
  }, [products_added_check]);


  // Framer Motion  
  const customVariants ={
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
     
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6
      }
    }
  }

  return (
    <Card
      component={motion.div}
      sx={{
        padding: "5px",
        paddingBottom: "20px",
        // background:"blue",
        // height:"550px"
      }}
      variants={customVariants}
      elevation={3}
      // whileHover={{ scale: 1.03 }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true ,amount:0.1}}
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
          margin: "0",
          padding: "0",
        }}
      >
        <Typography gutterBottom variant="h6" margin={2}>
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
        <Stack
          direction="row"
          sx={{ width: "100%", marginBottom: "10px" }}
          spacing={2}
        >
          <Button size="small" variant="contained">
            {rating.rate}
            <StarIcon />
          </Button>
          <Button size="small" variant="contained" color="info">
            {category}
          </Button>
          <Button size="small" variant="outlined" color="primary">
            <Typography variant="body1" fontWeight={800}>
              {rating.count}
            </Typography>
            <Typography variant="caption" sx={{ marginLeft: "5px" }}>
              {"sold"}
            </Typography>
            <SellIcon />
          </Button>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          // disabled={added>0?true:false}
          disabled={buttonDis}
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
              added,
            })
          }
          fullWidth
          // component={motion.div}
          // whileTap={{ scale: 0.99 }}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Product;
