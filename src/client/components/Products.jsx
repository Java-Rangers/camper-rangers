import React, { useState } from 'react';


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

}