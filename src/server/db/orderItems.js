const db = require('./client')
const { getProductById } = require('./products')


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

const createOrderItem = async ({orderID, productID, quantity}) => {
    try {
        const { rows: [orderItems] } = await db.query(`
            INSERT INTO "orderItems"("orderId", "productId", quantity)
            VALUES ($1, $2, $3)
            RETURNING *
        `, [orderID, productID, quantity])
        return orderItems
    } catch(error) {
        console.error('error creating order items...', error)
        throw error;
    }
}

const getAllOrderItems = async() => {
    try {
        const { rows: [productId] } = await client.query(`
            SELECT id
            FROM "orderItems";
        `);

        const products = await Promise.all(productId.map(
            product => getProductById(product.id)
        ))
        
        
        return products

    } catch(error) {
        console.error('error getting all order items...',error)
    }
}



// const createOrderItem = async()

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

// const deleteCartItem = async(order)

module.exports = {
    createOrderItem,
    getAllOrderItems,
    getOrderItemsByOrder,
    editOrderItem
}