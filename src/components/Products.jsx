import React, { useState } from "react";
import Product from "./Product";
import { Box, Divider, Grid, Typography ,Chip} from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/productSlice";
import { fetchproducts } from "../store/productSlice";

function Products() {
  // const [products,setProducts] = useState([]);
  const products = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  const filteredProd = useSelector((state) => state.filteredProducts.fProducts);
  const selectedFilters = useSelector(state=>state.filteredProducts.filters)


  //     useEffect(()=>{
  //       dispatch(fetchproducts())
  //   },[])

  return (
    <>
    <Box
    sx={{
      // background:"yellow",
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"center"
    }}
    >
      <Typography
        variant="h4"
        color="primary"
        sx={{
          paddingTop: "70px",
          fontWeight: 600,
          paddingLeft: "50px",
        }}
      >
        {filteredProd.length > 0 ? "Filtered Products" : "All Products"}
      </Typography>

      

        {/* Display selected FIlters   */}
        
        {
          selectedFilters.length >0 ?(
            <Box
            sx={{
              // background:"blue",
              paddingLeft:"50px",
              display:"flex",
            flexDirection:"row",
            alignItems:"center",
            // justifyContent:"center"
            }}
            >
              <Typography
              variant="body2"
              color="text.secondary"
              >
                Applied filters
              </Typography>
              {
                selectedFilters.map((item)=>(
                  <Chip label={item} color="secondary" variant="outlined"sx={{
                    margin:"5px"
                  }} />
                ))
              }
            </Box>
            
          )
          :
          (<></>)
        }
    </Box>
      

      <Divider />

      {filteredProd.length > 0 ? (
        // For Displaying Filtered Products
        <Grid
          container
          spacing={5}
          sx={{ padding: "20px", paddingTop: "50px" }}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {filteredProd.length > 0 ? (
            filteredProd.map((item) => (
              <Grid
                key={item.id}
                item
                sm={12}
                md={6}
                lg={4}
                xl={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Product
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  desc={item.description}
                  category={item.category}
                  rating={item.rating}
                  added={item.added}
                />
              </Grid>
            ))
          ) : (
            <div className="loader">
              <HashLoader color="#0D89F0" speedMultiplier={2} />
            </div>
          )}
        </Grid>
      ) : (
        // Display ALl Products
        <Grid
          container
          spacing={5}
          sx={{ padding: "20px", paddingTop: "50px" }}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {products.length > 0 ? (
            products.map((item) => (
              <Grid
                key={item.id}
                item
                sm={12}
                md={6}
                lg={4}
                xl={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Product
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  desc={item.description}
                  category={item.category}
                  rating={item.rating}
                  added={item.added}
                />
              </Grid>
            ))
          ) : (
            <div className="loader">
              <HashLoader color="#0D89F0" speedMultiplier={2} />
            </div>
          )}
        </Grid>
      )}
    </>
  );
}

export default Products;
