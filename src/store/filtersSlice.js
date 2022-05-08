import { createSlice } from "@reduxjs/toolkit"



const filtersSlice = createSlice({
     name:"filteredProducts",
     initialState:[],
     reducers:{
          applyFilters:(state,action)=>{
               const filters = action.payload.filters
               // console.log("Before action logic => ", action.payload.filters)
               const filtProd = action.payload.products.filter(item=> filters.includes(item.category))
               console.log("Filtered Produ => ", filtProd)
               return filtProd;
          },

          clearFilters:(state,action)=>{
               return [];
          }
     }
});


export const {applyFilters, clearFilters} = filtersSlice.actions;
export default filtersSlice.reducer;


