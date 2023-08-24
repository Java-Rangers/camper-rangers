const { query } = require('express');
const db = require('./client');
const { getProductById } = require('./products');

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


async function deleteUser(id){
  try{
    const { rows: [user] } = await db.query(`
     DELETE FROM user
     WHERE id=$1
     RETURNING *;
    `, [id])
    return user
  } catch (error){
    throw error;
  }
}

async function getAllUsers() {
  try {
    const { rows: users } = await db.query(`
      SELECT * FROM users;
    `);
    return users
  } catch (error) {
    throw error;
  }

}

async function getUserById(id) {
  try {
    const { rows: [user] } = await db.query(`
      SELECT * FROM user
      WHERE id = $1;
    `, [id])
    return user
  } catch (error){
    throw error
  }
}


module.exports = {
  editProduct,
  getAllUsers,
  deleteUser,
  getUserById
}