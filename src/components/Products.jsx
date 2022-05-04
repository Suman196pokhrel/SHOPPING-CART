import React, { useState } from 'react'
import Product from './Product'
import {Grid} from "@mui/material"
import { useEffect } from 'react';
import axios from 'axios';
import {HashLoader} from 'react-spinners'
import { useDispatch, useSelector } from 'react-redux';
import { useSelect } from '@mui/base';
import {setProducts} from "../store/productSlice"

function Products() {
    
    // const [products,setProducts] = useState([]);
    const products = useSelector(state=>state.product.data)
    const dispatch = useDispatch()

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            const data = res.data;
            // setProducts(data)
            dispatch(setProducts(data))
            
        }).catch(err=>{
            console.log(err);
        })
    },[])


  return (
     <Grid container spacing={5}
     sx={{padding:"20px",paddingTop:"50px"}}
     justifyContent="flex-start"
     alignItems="flex-start"
     >
         {
             products.length >0? (
                
                    products.map(item=>(
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
                
             ):(    <div
             className='loader'
             >
                            <HashLoader 
                            color="#0D89F0" 
                            speedMultiplier={2}                   
                            />
                     </div>
                
             )
             
         }
     
    </Grid>
  )
}

export default Products;





