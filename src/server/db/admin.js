const { query } = require('express');
const bcrypt = require('bcrypt')
const db = require('./client');
const { getProductById } = require('./products');


const editProduct = async (id, fields) => {
  const setString = Object.keys(fields).map(
    (key, index) => `"${key}"=$${index + 1}`
  ).join(', ');

  try {
    const { rows: [item] } = await db.query(`
      UPDATE "products" SET ${setString}
      WHERE id=$${Object.keys(fields).length + 1}
      RETURNING *;`, [...Object.values(fields), id]);

    const amountLeft = await db.query(`
      SELECT quantity FROM "orderItems" WHERE id=$1`, [id])
    console.log(`you have ${amountLeft.rows[0].quantity} remaining`)
    
    // const itemId = item.id

    // if (amountLeft.rows[0].quantity <= 0){
    //   removeItemFromOrder(itemId)
    // }
    return item
  } catch(err) {
    console.log('error editing product...',err)
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

const deleteProduct = async (productId) => {
  console.log(`Deleting product ${productId}`)
  try{
    await db.query (
      `
      DELETE FROM "orderItems"
      WHERE "orderItems"."productId" = $1
      RETURNING *;`,
      [productId]);
    await db.query(
      `
      DELETE FROM products WHERE id=$1
      RETURNING *;`, 
      [productId]);
    console.log('product removed from db')
  }catch(err){
    console.error('Error deleting product from table', err)
    throw err
  }
}

module.exports = {
  editProduct,
  getAllUsers,
  deleteUser,
  getUserById,
  logIn,
  deleteProduct,
}