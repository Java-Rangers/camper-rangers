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

add orderItem to order
remove orderItem from order
figure out when an order is created
*/

const db = require('./client')

const getAllOrders = async () => {
  console.log('---Getting all orders')
  try{
    const orders = await db.query(`SELECT * FROM orders`);
    return orders.rows;
  }catch(err){
    console.error('Error getting all orders', err)
    throw err
  }
}

const getOrder = async (id) => {
  console.log(`---Getting order by id: ${id}`)
  try{
    const { rows: [order] } = await db.query(`
    SELECT * FROM orders
    WHERE id=$1`, [id]);
    return order;
  }catch(err){
    console.error(`Error getting order by id: ${id}`, err)
    throw err
  }
}

const getOrderByUser = async (id) => {
  console.log(`Getting order by user id: ${id}`)
  try{
    const { rows: [order] } = await db.query(`
    SELECT * FROM orders
    WHERE "userID"=$1`, [id]);
    return order;
  }catch(err){
    console.error(`Error getting order by user id: ${id}`, err)
    throw err
  }
}

const createOrder = async ({userID, total, fullfilled}) => {
    try {
        const { rows: [orders] } = await db.query(`
            INSERT INTO orders("userID", total, fullfilled)
            VALUES ($1, $2, $3)
            RETURNING *;
        `, [userID, total, fullfilled])
        return orders
    } catch(error) {
        console.error('Error creating order', error)
        throw error;
    }
} 

module.exports = {
  getAllOrders,
  getOrder,
  getOrderByUser,
  createOrder
}