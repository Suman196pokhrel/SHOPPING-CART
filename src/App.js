import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Pages 
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
