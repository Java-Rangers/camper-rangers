const { query } = require('express');
const db = require('./client');
const { getProductById } = require('./product');

const editProduct = async ( postID, fields = {} ) => {
  
  // build set string from input field
  const setString = Object.keys(fields).map(
    (key, index) => `"${ key }" = $${index + 1 }`
    ).join(', ');
  
  try {
    if (setString.length > 0) {
      await client.query(`
      UPDATE products
      SET ${ setString }
      WHERE id=${postID}
      RETURNING *;
      `, Object.values(fields));
    }
  
    return await getProductById (postID);
  } catch(err) {
    console.log('error editing product', err)
  } 
}

module.exports = {
  editProduct
}