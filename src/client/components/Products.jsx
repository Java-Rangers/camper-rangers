import React, { useEffect, useState } from 'react';

import { BASE_URL } from '../App';


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
        const response = await fetch (`${BASE_URL}/`)
      } catch(err) {
        console.log('error fetching ALL PRODUCTS', err)
      }
    }
  })

}