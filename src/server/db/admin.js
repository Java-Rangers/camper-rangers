const { query } = require('express');
const bcrypt = require('bcrypt')
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

async function logIn ({ username, password }) {
  const {
    rows: [ user ],
  } = await db.query(`SELECT * FROM users WHERE username = $1`, [username])
  if(!user){
    throw new Error('Username does not exist')
  }

  const compare = await bcrypt.compare(password, user.password)
  if (compare) {
    return user
  } else {
    throw new Error ('Passwords do not match')
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
  getUserById,
  logIn
}