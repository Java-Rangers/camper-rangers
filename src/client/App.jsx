import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Login from './components/Login';
import {Routes, route} from 'react-router-dom'
import SingleProduct from './components/SingleProduct';
import Products from './components/Products'

const BASE_URL = 'http://localhost:3000/api'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className='App'>
        <h1>Boilerplate</h1>
        <img id='comp-img' src='./computer.png'></img>
        <p>Replace the starter code in this template with something cool</p>
        <Login />
    </div>
    <div>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/:id' element={<SingleProduct />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

export { BASE_URL } ; 
