import {
  Stack,
  Typography,
  Card,
  Divider,
  Checkbox,
  Button,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormLabel } from "@mui/material";
import BuildIcon from '@mui/icons-material/Build';

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import {applyFilters,clearFilters,addFilters,removeFilters} from "../store/filtersSlice"


function SidePannelOne() {
  const products = useSelector((state) => state.product.data);
  const checkedCat = useSelector(state=>state.filteredProducts.filters)
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([]);
  

  const handleCheckChange = (e)=>{
     const index = checkedCat.indexOf(e.target.value)
     if(index===-1){
          // setCheckedCat([...checkedCat,e.target.value])
          dispatch(addFilters(e.target.value))
          // dispatch push action 

     }else{
          // setCheckedCat(checkedCat.filter((cat)=> cat !== e.target.value))
          dispatch(removeFilters(e.target.value))
          // dispatch pop action by sending element value as paylad to remove action 
     }     

  }

  const handleApplyFilters = (checkedCat)=>{
    console.log(products,checkedCat)
     dispatch(applyFilters({products,checkedCat}))
     
  }


  useEffect(() => {
    let temp = [];
    if(products){
     for (let i = 0; i < products.length; i++) {
          if (!temp.includes(products[i].category)) {
            temp.push(products[i].category);
          }
        }
    }
    

    setCategories(temp);
  }, []);


  return (
    <Card>
      <Typography
        fontWeight={800}
        variant="h6"
        textAlign={"left"}
        color="primary"
      >
        CATEGORY
      </Typography>
      <Divider />
      <Stack direction={"column"} spacing={3} margin="10px">
           <form>

           
        <FormGroup>
          {categories?.map((item, ind) => (
            //    console.log(item)

            <FormControlLabel 
            key={ind} 
            control={<Checkbox />} 
            label={item}
            value={item}
            checked={checkedCat.includes(item)}
            onChange={(e)=>handleCheckChange(e)}
            />
          ))}
          <Button 
          onClick={()=>handleApplyFilters(checkedCat)} 
          variant="contained" 
          endIcon={<BuildIcon/>} 
          sx={{
               margin:"5"
          }}
          fullWidth
          
          >
            Apply filters
          </Button>
        </FormGroup>
        </form>
      </Stack>
    </Card>
  );
}

export default SidePannelOne;
