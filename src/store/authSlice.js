import {createSlice} from "@reduxjs/toolkit"

export const STATUSES = Object.freeze({
     LOGGEDIN: "logged_in",
     LOGGEDOUT: "logged_out",
     LOADING: "loading"
})


const authSlice = createSlice({
     name:"auth",
     initialState:{
          status:false,
          data:{}
     },
     reducers:{
          login:(state,action)=>{
               state.status=true
               state.data = action.payload
          },
          logout:(state,action)=>{
               state.status=false
          }
     }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;