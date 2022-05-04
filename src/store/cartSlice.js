import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
     name:"cart",
     initialState:[],
     reducers:{
          addToCart:(state,action)=>{
               
               
               action.payload.quantity=1 
               action.payload.added = 1
               state.push(action.payload)
               
          },

          removeFromCart:(state,action)=>{
               return state.filter(item=>item.id !== action.payload)
          },

          increment:(state,action)=>{
                state.map((item)=>{
                    if(item.id===action.payload.id){
                         return item.quantity +=1
                    }
               })
          },
          decrement:(state,action)=>{
               state.map((item)=>{
                    if(item.id===action.payload.id && item.quantity>1){
                         return item.quantity -=1
                    }
               })
          },
          clearCart:(state,action)=>{
               return []
          }
          
     }
})

export const {addToCart, clearCart ,removeFromCart,increment,decrement} = cartSlice.actions;
export default cartSlice.reducer;