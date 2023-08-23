import React, { useEffect, useState } from 'react';

import { BASE_URL } from 'App';
import { post } from '../../server/api/address';


export default function Products( {token} ) {

  const [products, setProducts ] = useState ([]);
  const [searchBar, setSearchBar ] = useState ('');
  const [ search, setSearch ] = useState([]); 
  const [ searchActive, setSearchActive ] = useState(false);


// const handleSearch = () => {

//   const filteredProducts = products.filter(product => {
    
//     return product.title.toLowerCase().includes(searchBar.toLocaleLowerCase());
//   });
// }
// setSearch(filteredProducts);
//setSearchActive(true);
// console.log(filteredPosts);

//const clearSearch = () => {
// setSearchBar('') 
// setSearch([]);
//setEarchActive (false);
// }
  useEffect(() => {
    
    const getAllProducts = async () => {
      
      try{
        
        const response = await fetch (`${BASE_URL}/products`)

        const data = await response.json();

        console.log('fetch all products success', data);
        return data.
        setProducts (await getAllProducts)
      } catch(err) {
        
        console.log('error fetching ALL PRODUCTS', err)
        
      }
    
    }
    getAllProducts();
  }, [])

  return (
      <>
        <div>
          <div id ='searchContainer'>
            <h1> Products </h1>
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

          {searchActive ? (
            search.map(product => (
              <div key= {product._id} className='productsContainer'>
                <div className='productCard'>  
                  <h3 className='postTitle'> {product.title} </h3>
                  <p className='productDescription'> {product.description} </p>
                  <p className= 'productPrice'> {product.price} </p>
                  <p className='productBrand'> {product.brand} </p>
                </div>
              </div>
              ))
              ) : (
                products.map((products, index) => (
                  <div key = {index} className='productsContainer'> 
                    <div className='productCard'>
                      <h3 className='postTitle'> {product.title} </h3>
                      <p className='productDescription'> {product.description} </p>
                      <p className= 'productPrice'> {product.price} </p>
                      <p className='productBrand'> {product.brand} </p>
                      <form onSubmit={(e) = cartSubmit (e, products.id)} >
                        <label>
                          <input
                          type = 'submit'
                          id= 'addCartButton'
                          value='Add to Cart'
                          />
                        </label>
                      </form>
                    </div>
                  </div>
                ))
              )
              }
        </div>
      </>
    )
}