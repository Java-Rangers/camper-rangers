import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom'
import SingleProduct from './components/SingleProduct';
import Products from './components/Products'
import RegisterUser from './components/registerUser';
import NavBar from './components/Navbar';

const API = 'http://localhost:8080/api'
const BASE_URL = 'http://localhost:8080'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className='App'>
        <NavBar />
    </div>
    
    <Routes>
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<SingleProduct />} />
      <Route path='/registerUser' element={<RegisterUser />} />
    </Routes>
    
    </>
  );
}

export default App;

export { BASE_URL } ;
export { API } ;
