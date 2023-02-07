import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
          {/* <Route path='/cart' element={<Cart />}/> */}
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
