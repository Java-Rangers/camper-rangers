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

    const cartsArray = cart.rows
    console.log('array of unfullfilled orders', cartsArray)

    const cartOrderId = await cartsArray[0].id
    const userCart = await getItemsByOrder(cartOrderId)

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

    const remainingOrders = await db.query(`
    SELECT * FROM orders WHERE "userID"=$1 AND fullfilled=false`, [id])
    console.log('remaining orders', remainingOrders.rows)
    if(remainingOrders.rows.length <= 0){
      console.log('creating new order for user')
      const order = await db.query(`
      INSERT INTO "orders"("userID", total, fullfilled)
      VALUES ($1, $2, $3)
      RETURNING *;`, [id, 0, false])
      console.log('order being returned', order)
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