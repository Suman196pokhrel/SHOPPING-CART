import React,{useState} from 'react'
import {Grid, Card, Typography, Divider, Stack} from "@mui/material"
import { width } from '@mui/system'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function PriceDetails() {
     const [value, setValue] = useState(0)
     const products = useSelector(state=>state.cart)

  const [price, setPrice] = useState(0)
  const [disPrice, setDisPrice] = useState(0)


  const calcValue=(products)=>{
     let temp =0
     for(let i=0;i<products.length;i++){
       temp += products[i].quantity 
     }
     return temp
   }

  useEffect(()=>{
     function calcPrice(products){
          let temp = 0
          for(let i =0;i<products.length;i++){
               temp += products[i].price * products[i].quantity
          }
          setPrice(temp.toFixed(2))
          setDisPrice((temp-15).toFixed(2))
          setValue(calcValue(products))
     }

     calcPrice(products)
  },[products])
  
     return (
     
          <Card
          sx={{
               padding:"20px"
          }}
          >
                    <Typography variant="h5" color="text.secondary">
                         Price Details
                    </Typography>
                    <Divider />
                    <Stack direction="column" spacing={4}>
                         <Stack sx={{
                              display:"flex",
                              flexDirection:"row",
                              alignItems:"center",
                              justifyContent:"space-between",
                              marginTop:"10px"
                         }}>
                              <Typography variant="body" color="text.primary">
                                   Price({value})
                              </Typography>
                              <Typography variant="body" color="green" fontWeight={800}>
                                  {price}
                              </Typography>
                              
                         </Stack>

                         <Stack sx={{
                              display:"flex",
                              flexDirection:"row",
                              alignItems:"center",
                              justifyContent:"space-between",
                              marginTop:"10px"
                         }}>
                              <Typography variant="body" color="text.primary">
                                   Discount
                              </Typography>
                              <Typography variant="body" color="green" fontWeight={800}>
                                  $0
                              </Typography>
                              
                         </Stack>

                         <Stack sx={{
                              display:"flex",
                              flexDirection:"row",
                              alignItems:"center",
                              justifyContent:"space-between",
                              marginTop:"10px"
                         }}>
                              <Typography variant="body" color="text.primary">
                                   Delivery
                              </Typography>
                              <Typography variant="body" color="green" fontWeight={800}>
                                  $5
                              </Typography>
                              
                         </Stack>

                         <Stack sx={{
                              display:"flex",
                              flexDirection:"row",
                              alignItems:"center",
                              justifyContent:"space-between",
                              marginTop:"10px"
                         }}>
                              <Typography variant="body" color="text.primary">
                                   Coupons
                              </Typography>
                              <Typography variant="body" color="green" fontWeight={800}>
                                  -$20
                              </Typography>
                              
                         </Stack>
                         <Divider />

                         <Stack sx={{
                              display:"flex",
                              flexDirection:"row",
                              alignItems:"center",
                              justifyContent:"space-between",
                              marginTop:"10px"
                         }}>
                              <Typography variant="body" color="text.primary">
                                   Total Amount
                              </Typography>
                              <Typography variant="body" color="green" fontWeight={800}>
                                  {disPrice}
                              </Typography>
                              
                         </Stack>
                    </Stack>
          </Card>
    

  )
}

export default PriceDetails