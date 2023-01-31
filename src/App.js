import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Inicio from './components/paginas/Inicio';
import Articulos from './components/paginas/Articulos';
import Contacto from './components/paginas/Contacto';
import ItemListContainer from './components/ItemListConteiner';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/Articulos' element={<Articulos/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
      
      <ItemListContainer texto='Ezequiel' />
    </div>
  );
}

export default App;
