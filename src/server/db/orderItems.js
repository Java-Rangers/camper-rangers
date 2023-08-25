/*
add products to orderItem
remove products from orderItem
*/

const db = require('./client')

const getOrderItemsByOrder = async (id) => {
  try{
    const { rows: orderItems } = await db.query(`
    SELECT * FROM "orderItems" WHERE "orderId"=$1`, [id])

    return orderItems
  }catch(err){
    console.log('Error getting items by order', err)
    throw err
  }
}

const createOrderItem = async ({orderId, productId, quantity}) => {
    try {
        const { rows: [orderItem] } = await db.query(`
            INSERT INTO "orderItems"("orderId", "productId", quantity)
            VALUES ($1, $2, $3)
            RETURNING *;
        `, [orderId, productId, quantity])
        console.log(orderItem)
        return orderItem
    } catch(error) {
        console.error('error creating order items...', error)
        throw error;
    }
}

const addItemToOrder = async (orderItemId, orderId) => {
  console.log(`---Adding orderItem ${orderItemId} to order ${orderId}`)
  try{
    const order = await db.query(`
      UPDATE "orderItems" SET "orderId"=$1
      WHERE id=$2 RETURNING *;`, [orderId, orderItemId])
      console.log(order)
      return order
  }catch(err){
    console.error(`Error adding orderItem id ${orderItemId}, to order id: ${orderId}`)
    throw err
  }
}

const editOrderItem = async ({id, orderID, productID, quantity, modifiedAt}) => {
    try {
        console.log('editing order items...')
        const { rows: [editOrderItem] } = await client.query(`
            UPDATE "orderItems"
            SET "orderId = $1, "productId" = $2, quantity = $3, "modifiedAt" = $4
            WHERE id = $5
            RETURNING *
        `, [orderID, productID, quantity, modifiedAt, id])
        console.log('item edited succesfully!')
    } catch(err) {
        console.log('error editing item...',err)
    }
}


module.exports = {
    createOrderItem,
    getOrderItemsByOrder,
    editOrderItem,
    addItemToOrder
}