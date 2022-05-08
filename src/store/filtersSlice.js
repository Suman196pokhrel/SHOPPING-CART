import { createSlice } from "@reduxjs/toolkit"



const filtersSlice = createSlice({
     name:"filteredProducts",
     initialState:{
          filters:[],
          fProducts:[]

     },
     reducers:{
          addFilters:(state,action)=>{
               state.filters.push(action.payload)
          },
          removeFilters:(state,action)=>{
               state.filters =  state.filters.filter(item=> item !== action.payload)
          },
          applyFilters:(state,action)=>{
               const filters = action.payload.checkedCat
               console.log("Before action logic => ", action.payload.filters)
               const filtProd = action.payload.products.filter(item=> filters.includes(item.category))
               console.log("Filtered Produ => ", filtProd)
               state.fProducts = filtProd
          },

          clearFilters:(state,action)=>{
               state.filters=[]
               state.fProducts =[]
          }
     }
});


export const {applyFilters, clearFilters,addFilters,removeFilters} = filtersSlice.actions;
export default filtersSlice.reducer;


