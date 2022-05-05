import { Button, Card, Divider, Paper, Typography } from '@mui/material'
import React from 'react';
import loginLogo from "../assets/icons8-lock.gif"
import GoogleIcon from '@mui/icons-material/Google';
import LockIcon from '@mui/icons-material/Lock';
import { textAlign } from '@mui/system';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';


function Login() {

     const authStatus = useSelector(state=>state.auth.staus)
     const dispatch = useDispatch()
     const navigate = useNavigate()


     const responseGoogleSuccess =(response)=>{
          console.log("success=>  ",response.profileObj)
          console.log(response.profileObj.imageUrl)
          dispatch(login(response.profileObj))
          
     }

     const responseGoogleError=(response)=>{
          console.log("failed=> ", response)

     }


  return (
    <div style={{margin:"auto",width:"50%",marginTop:"200px"}}>
         <Paper
         sx={{
              display:"flex",
              flexDirection:"column",
              alignItems:"center,"
         }}
         elevation={3}
         >
              <Typography textAlign={"center"} variant="h4" fontWeight={800} color="primary">
                   Login
              </Typography>
              <Divider />
              <LockIcon 
              
              sx={{
                   padding:"20px",
                   fontSize:"200px",
                   textAlign:"center",
                   width:"100%"
              }}
              />
              
              <div
              style={{
               //     backgroundColor:"blue",
                   display:"flex",
                   alignItems:"center",
                   justifyContent:"center",
                   fontSize:"40px"
              }}
              >
              <GoogleLogin 
               clientId={process.env.REACT_APP_CLIENT_ID}
               onSuccess={responseGoogleSuccess}
               onFailure={responseGoogleError}
               isSignedIn={true}
               render={
                    renderProps=>(
                         <Button 
                         onClick={renderProps.onClick}
                         variant="contained" 
                         fullWidth 
                         sx={{textTransform:"lowercase",fontSize:"20px"}}>
                              Sign-in with 
                                   <GoogleIcon sx={{margin:"5px"}}/>
                         </Button>
                    )
               }
               
              />
              </div>
              
         </Paper>
    </div>
  )
}

export default Login