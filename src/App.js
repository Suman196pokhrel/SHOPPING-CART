import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Pages 
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { useSelector } from 'react-redux';

function App() {
  const authStatus = useSelector(state=>state.auth.status)

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={authStatus?<Home />:<Login />} />
          <Route path='/cart' element={authStatus?<Cart />:<Login />} />

        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
