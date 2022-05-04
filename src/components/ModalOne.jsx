import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';


import OrderPlaced from "../assets/orderPlaced.gif"

function ModalOne({open,handleClose}) {

     

  return (
    <div className='modalOne'>
         <Modal
        open={open}
        onClose={handleClose}
        
        
      >
           <Paper
           sx={{
                height:"400px",
                width:"600px",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center",
                position:"absolute",
                top:"30%",
                left:"35%"

           }}>
                <img src={OrderPlaced} alt="Order Placed animation"/>
               <Typography variant='h4' fontWeight={800} color="primary">
                    Order Placed Sucessfully
               </Typography>
           </Paper>
           
      </Modal>
    </div>
  )
}

export default ModalOne