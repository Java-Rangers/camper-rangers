/*
GET /api/orders/id
  ---get order by id

GET /api/orders
  ---get all orders

GET /api/orders/user/id
  ---get order by user id

POST /api/orders
  ---create a new order
  ---when will this be needed? what situation?

PATCH /api/orders/id
  ---edits order by id
  ---adding/removing orderItems from order
*/

const db = require('./client')

const getAllOrders = async () => {
  try{
    const orders = await db.query(`SELECT * FROM orders`);
    return orders.rows;
  }catch(err){
    throw err
  }
}

const getOrder = async (id) => {
  try{
    const { rows: [order] } = await db.query(`
    SELECT * FROM orders
    WHERE id=$1`, [id]);
    return order;
  }catch(err){
    throw err
  }
}

const getOrderByUser = async (id) => {
  try{
    const { rows: [order] } = await db.query(`
    SELECT * FROM orders
    WHERE "userID"=$1`, [id]);
    return order;
  }catch(err){
    throw err
  }
}

const createOrder = async ({userID, total, fullfilled}) => {
    try {
        const { rows: [orders] } = await db.query(`
            INSERT INTO orders ("userID", total, fullfilled)
            VALUES ($1, $2, $3)
            RETURNING *
        `, [userID, total, fullfilled])
        return orders
    } catch(error) {
        console.error('error creating orders...', error)
        throw error;
    }
} 

const getCart = async(userId) => {
    try {
        const { rows: [order] } = await db.query(`
            SELECT *
            FROM orders
            WHERE fullfilled = false AND "userID" = $1
        `, [userId])
        
        return order;
       

    } catch(error) {
        console.error('error getting cart...',error)
    }
}

module.exports = {
  getAllOrders,
  getOrder,
  getOrderByUser,
  createOrder,
  getCart
}