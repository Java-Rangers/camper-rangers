const db = require('./client')

// GETS AND RETURNS ALL ITEMS BY ORDER ID
const getItemsByOrder = async (orderId) => {
  try{
    const { rows: orderItems } = await db.query(`
    SELECT * FROM "orderItems" WHERE "orderId"=$1`, [orderId])
    console.log('items in cart: ', orderItems)
    return orderItems
  }catch(err){
    console.log('Error getting items by order', err)
    throw err
  }
}

// CREATES AND RETURNS A NEW ORDER ITEM
const addItemToOrder = async ({orderId, productId, quantity}) => {
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

// EDITS AND RETURNS AN ORDER ITEM
const editOrderItem = async (id, fields) => {
  const setString = Object.keys(fields).map(
    (key, index) => `"${key}"=$${index + 1}`
  ).join(', ');

  try {
    const { rows: [item] } = await db.query(`
      UPDATE "orderItems" SET ${setString}
      WHERE id=$${Object.keys(fields).length + 1}
      RETURNING *;`, [...Object.values(fields), id]);

    const amountLeft = await db.query(`
      SELECT quantity FROM "orderItems" WHERE id=$1`, [id])
    console.log(`you have ${amountLeft.rows[0].quantity} remaining`)
    
    const itemId = item.id

    if (amountLeft.rows[0].quantity <= 0){
      removeItemFromOrder(itemId)
    }
    return item
  } catch(err) {
    console.log('error editing item...',err)
  }
}

const removeItemFromOrder = async (id) => {
  console.log(`Deleting item ${id}`)
  try{
    const item = await db.query(`
    DELETE FROM "orderItems" WHERE id=$1`, [id])
    return item
  }catch(err){
    console.error('Error removing item from order', err)
    throw err
  }
}

const removeItemFromOrderByOrderId = async (orderId, productId) => {
  try{
    const item = await db.query(`
    DELETE FROM "orderItems" WHERE "orderId"=$1 AND "productId"=$2`, [orderId, productId])
    return item
  }catch(err){
    console.error('Error removing item from order', err)
    throw err
  }
}

module.exports = {
    getItemsByOrder,
    editOrderItem,
    addItemToOrder,
    removeItemFromOrder,
    removeItemFromOrderByOrderId
}

// OLD CREATE ORDER ITEM FUNCTION, SPARE JUST IN CASE
// const addItemToOrder = async (orderItemId, orderId) => {
//   console.log(`---Adding orderItem ${orderItemId} to order ${orderId}`)
//   try{
//     const order = await db.query(`
//       UPDATE "orderItems" SET "orderId"=$1
//       WHERE id=$2 RETURNING *;`, [orderId, orderItemId])
//       console.log(order)
//       return order
//   }catch(err){
//     console.error(`Error adding orderItem id ${orderItemId}, to order id: ${orderId}`)
//     throw err
//   }
// }