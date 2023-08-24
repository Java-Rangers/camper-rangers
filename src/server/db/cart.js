const db = require('./client')
const { getOrderItemsByOrder } = require('./orderItems')

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

    // grabs the 
    const cartOrder = await cart.rows[0].id
    const userCart = await getOrderItemsByOrder(cartOrder)

    return userCart
  }catch(err){
    console.error('Error while getting cart by user id', err);
    throw err
  }
}

module.exports = {
  getCartByUser
}