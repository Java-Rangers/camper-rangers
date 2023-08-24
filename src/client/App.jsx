import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom'
import SingleProduct from './components/SingleProduct';
import Products from './components/Products'

const API = 'http://localhost:3000/api'
const BASE_URL = 'http://localhost:3000'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className='App'>
        {/* <h1>Boilerplate</h1>
        <img id='comp-img' src='./computer.png'></img>
        <p>Replace the starter code in this template with something cool</p>
        <Login /> */}
        <h3>APP Test</h3> 
        <Products/>
    </div>
    
    <Routes>
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<SingleProduct />} />
    </Routes>
    
    </>
  );
}

export default App;

export { BASE_URL } ;
export { API } ;
