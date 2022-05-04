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
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

function SidePannelOne() {
  const products = useSelector((state) => state.product.data);
  const [categories, setCategories] = useState([]);
  const [checkedCat, setCheckedCat] = useState([])

  const handleCheckChange = (e)=>{
     const index = checkedCat.indexOf(e.target.value)
     if(index===-1){
          setCheckedCat([...checkedCat,e.target.value])
     }else{
          setCheckedCat(checkedCat.filter((cat)=> cat !== e.target.value))
     }
  }

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < products.length; i++) {
      if (!temp.includes(products[i].category)) {
        temp.push(products[i].category);
      }
    }

    setCategories(temp);
  }, []);

  console.log(checkedCat);

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
          <Button variant="contained" endIcon={<BuildIcon/>} sx={{
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
