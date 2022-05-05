import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
// Pages 
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { useSelector,useDispatch } from 'react-redux';
import {fetchproducts} from "./store/productSlice"

function App() {
  const authStatus = useSelector(state=>state.auth.status)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchproducts())
    
},[])
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path='/Shopping-Cart' element={authStatus?<Home />:<Login />} />
        <Route path='/cart' element={authStatus?<Cart />:<Login />} />

        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
