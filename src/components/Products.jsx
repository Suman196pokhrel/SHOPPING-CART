import React, { useState } from 'react'
import Product from './Product'
import {Grid} from "@mui/material"
import { useEffect } from 'react';
import axios from 'axios';

function Products() {
    
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            const data = res.data;
            setProducts(data)
        }).catch(err=>{
            console.log(err);
        })
    })


  return (
     <Grid container spacing={5}
     sx={{padding:"20px",paddingTop:"50px"}}
     justifyContent="flex-start"
     alignItems="flex-start"
     >
         {
             
             products.map(item=>(
                <Grid 
                    key={item.id}
                item 
                sm={6} 
                md={4} 
                lg={3} 
                xl={2.4}
                >
                <Product 
                 id={item.id}
                 title={item.title}
                 price={item.price}
                 image={item.image}
                 desc={item.description}
                 category={item.category}
                 rating={item.rating}
                 />
                </Grid>
                 
             ))
         }
     
    </Grid>
  )
}

export default Products;





{/* <Grid item sm={6} md={4} lg={3} xl={2.4}>
<Product />
</Grid>
<Grid item sm={6} md={4} lg={3} xl={2.4}> 
<Product />
</Grid>
<Grid item sm={6} md={4} lg={3} xl={2.4}>
<Product />
</Grid>
<Grid item sm={6} md={4} lg={3} xl={2.4}>
<Product />
</Grid>
<Grid item sm={6} md={4} lg={3} xl={2.4}>
<Product />
</Grid>
<Grid item sm={6} md={4} lg={3} xl={2.4}>
<Product />
</Grid>
<Grid item sm={6} md={4} lg={3} xl={2.4}>
<Product />
</Grid>
<Grid item sm={6} md={4} lg={3} xl={2.4}>
<Product />
</Grid>
<Grid item sm={6} md={4} lg={3} xl={2.4}>
<Product />
</Grid> */}