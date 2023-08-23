const { query } = require('express');
const db = require('./client');
const { getProductById } = require('./product');

const editProduct = async ( id, fields = {} ) => {
  
  // build set string from input field
  const setString = Object.keys(fields).map(
    (key, index) => `"${ key }" = $${index + 1 }`
    ).join(', ');
  
  try {
    if (setString.length > 0) {
      await db.query(`
      UPDATE products
      SET ${ setString }
      WHERE id=$${id}
      RETURNING *;
      `, Object.values(fields));
    }
  
    return await getProductById (id);
  } catch(err) {
    console.log('error editing product', err)
  } 
}

module.exports = {
  editProduct
}