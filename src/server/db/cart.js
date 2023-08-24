const db = require('./client')

const getCartByUser = async(id) => {
  try{
    const cart = await db.query(`
    SELECT * FROM orders
    WHERE "userID"=$1 AND fullfilled=false`, [id])
    console.log(cart)
    return cart.rows
  }catch(err){
    console.error('Error while getting cart by user id', err);
    throw err
  }
}

module.exports = {
  getCartByUser
}