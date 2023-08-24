/*
get cart by user
add orderItem to order
(stretch goal) update order to fullfilled
*/

const db = require('./client')
const { getOrderItemsByOrder } = require('./orderItems')

// gets the users cart and returns array of orderItems from cart
const getCartByUser = async(id) => {
  console.log(`---Getting cart by user id: ${id}`)
  try{
    const cart = await db.query(`
    SELECT * FROM orders
    WHERE "userID"=$1 AND fullfilled=false`, [id])

    // checks if the user has an unfullfilled order
    if (cart.rows.length === 0){
      console.log(`---No unfullfilled orders for user id: ${id}`)
      return;
    }   

    // grabs the order id of the unfullfilled order of the user, passes that id to getOrderItemsByOrder
    // potential bug here if user has multiple unfullfilled orders (a state that shouldn't be allowed), it will only return the first order if this happens
    const cartOrder = await cart.rows[0].id
    const userCart = await getOrderItemsByOrder(cartOrder)

    // returns an array of orderItem objects
    console.log('---Received cart of user id: ', id, ' ', userCart)
    return userCart
  }catch(err){
    console.error('Error while getting cart by user id', err);
    throw err
  }
}

// toggles cart fullfilled status to true
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