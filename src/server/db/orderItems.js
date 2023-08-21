const db = require('./client')
const { getProductById } = require('./product')

const createOrderItems = async ({orderId, productId, quantity, createdAt, modifiedAt}) => {
    try {
        console.log('creating order items...')
        const { rows: [orderItems] } = await db.query(`
            INSERT INTO "orderItems"("orderId", "productId", quantity, "createdAt", "modifiedAt")
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `, [orderId, productId, quantity, createdAt, modifiedAt])
        console.log('order items created succesfully!')
        return orderItems
    } catch(error) {
        console.error('error creating order items...', error)
        throw error;
    }
}

const getAllOrderItems = async() => {
    console.log('getting all order items...')
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

const getCartItems = async(orderId) => {
    console.log('getting cart items...')
    try {
        const { rows: [products] } = await client.query(`
            SELECT *
            FROM "orderItems"
        `, [orderId])

        const orders = await Promise.all(orderItems.map(
            product => getProductById(product.id)
        ))

        return products     
    } catch(error) {
        console.error('error getting cart items', error)
        throw error;
    }
}

module.exports = {
    createOrderItems,
    getAllOrderItems,
    getCartItems
}