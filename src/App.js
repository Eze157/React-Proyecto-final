import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './CartContext';
import Cart from './components/Cart';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
        </Routes>
      </CartProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
