import React, { useEffect, useState } from 'react';
import { API } from '../App';
import { BASE_URL } from '../App';


  export default function Products( {token} ) {

  const [products, setProducts ] = useState ([]);
  const [searchBar, setSearchBar ] = useState ('');
  const [ search, setSearch ] = useState([]); 
  const [ searchActive, setSearchActive ] = useState(false);


  const handleSearch = () => {

    const filteredProducts = products.filter(product => {
      
      return product.title.toLowerCase().includes(searchBar.toLocaleLowerCase());
    });

    setSearch(filteredProducts);
    setSearchActive(true);
    console.log(filteredProducts);

    const clearSearch = () => {
    setSearchBar('') 
    setSearch([]);
    setSearchActive (false);
    }
  }  

  useEffect (() => {    
    const getAllProducts = async () => {
      
      try{
        
        const response = await fetch (`${API}/products`)

        const data = await response.json();

        console.log('fetch all products success', data);
        setProducts (data.products)
      
      } catch(err) {
        
        console.log('error fetching ALL PRODUCTS', err)
        
      }
    }  
    getAllProducts();

  }, [])
  return (
      <>
        <div className='subheader'>
          <h1>PRODUCTS COMPONENT TEST</h1>
          <h1 id='productsPageTitle'> Products </h1>
          <div id ='searchContainer'>
            <form onSubmit = {(e)=> {
            e.preventDefault();
            handleSearch(); }}>
              <label> Search
                <input
                type = 'text'
                id= 'searchBar'
                name= 'searchBar'
                placeholder= 'Looking for something?'
                value = {searchBar}
                onChange= {(e) => setSearchBar(e.target.value)}
                />
              </label>
              <input id ='searchBarButton' type='submit' value='Find it!'/>
            </form>
          </div>
        </div>

          {searchActive ? (
            search.map(product => (
              <div key= {product._id} className='productsContainer'>
                <div className='productCard'>  
                  <h3 className='productTitle'> {product.title} </h3>
                  <p className='productDescription'> {product.description} </p>
                  <p className= 'productPrice'> {product.price} </p>
                  <p className='productBrand'> {product.brand} </p>
                </div>
              </div>
              ))
              ) : (
                <div className='productsContainer'> 
                  {products.map((product, index) => (
                  
                    <div key = {index}  className='productCard'>
                      <h3 className='postTitle'> {product.title} </h3>
                      <img className='productImage' src={product.image}/>
                      <p className='productDescription'> {product.description} </p>
                      <p className= 'productPrice'> {product.price} </p>
                      <p className='productBrand'> {product.brand} </p>
                      {/* <form onSubmit={(e) = cartSubmit (e, products.id)} >
                        <label>
                          <input
                          type = 'submit'
                          id= 'addCartButton'
                          value='Add to Cart'
                          />
                        </label>
                      </form> */}
                    </div>
                
                ))
                }
              </div>  
              )} 
      </>
    )
}

