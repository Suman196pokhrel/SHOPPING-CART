import React from 'react'
import Product from './Product'
import {Grid} from "@mui/material"

function Products() {
  return (
     <Grid container spacing={3}
     sx={{padding:"20px"}}
     justifyContent="flex-start"
     alignItems="flex-start"
     >
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
      </Grid>
      <Grid item sm={6} md={4} lg={3} xl={2.4}>
          <Product />
      </Grid>
    </Grid>
  )
}

export default Products