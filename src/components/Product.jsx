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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Product() {
  return (
    <Box width="350px">
      <Card>
           
        <CardMedia
          component="img"
          height="200"
          image="https://source.unsplash.com/random"
          alt="Unsplash Image"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is a js library for building user interfaces.React can be used
            as a base in the development of single-page or mobile applications.
          </Typography>
          <Button variant="text">
            <Typography variant="h5" color="black" fontWeight={600}>
              $200
            </Typography>
          </Button>
          <br />
          <Stack direction="row" sx={{width:"100%"}} spacing={2}>
            <Button size="small" variant="contained">
              4.9
              <StarIcon />
            </Button>
            <Button size="small" variant="contained" color="info">
              Mens clothing
            </Button>
          </Stack>
        </CardContent>
        <CardActions>
          <Button size="large" variant="contained" color="warning">
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Product;
