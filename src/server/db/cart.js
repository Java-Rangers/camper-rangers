const db = require('./client')
const { getItemsByOrder } = require('./orderItems')

// GETS AND RETURNS A USERS UNFULLFILLED ORDER
const getCartByUser = async(id) => {
  console.log(`---Getting cart by user id: ${id}`)
  try{
    const cart = await db.query(`
    SELECT * FROM orders
    WHERE "userID"=$1 AND fullfilled=false`, [id])

    if (cart.rows.length === 0){
      console.log(`---No unfullfilled orders for user id: ${id}`)
      return;
    }   

    const cartOrder = await cart.rows[0].id
    const userCart = await getItemsByOrder(cartOrder)

    console.log('---Received cart of user id: ', id, ' ', userCart)
    return userCart
  }catch(err){
    console.error('Error while getting cart by user id', err);
    throw err
  }
}

// SETS AND RETURNS AN UNFULLFILLED ORDER TO FULLFILLED
const checkoutCart = async (id) => {
  try{
    const { rows } = await db.query(`
    UPDATE orders SET fullfilled=true
    WHERE "userID"=$1 AND fullfilled=false
    RETURNING *;`, [id])

    if (rows.length === 0){
      console.log('---Order not updated')
      return null;
    }

    return rows;
  }catch(err){
    console.log('Error during cart checkout of user id: ', id,  err);
    throw err
  }
}

module.exports = {
  getCartByUser,
  checkoutCart
}