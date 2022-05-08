import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import authReducer from "./authSlice";
import filtersReducer from "./filtersSlice";

const store = configureStore({
     reducer:{
          cart:cartReducer,
          product:productReducer,
          auth:authReducer,
          filteredProducts: filtersReducer
     }
})


export default store;