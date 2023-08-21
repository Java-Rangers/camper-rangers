const createOrderItems = async (orderId, productId, quantity, createdAt, modifiedAt) => {
    try {
        console.log('creating order items...')
        const { rows: [orderItems] } = await db.query(`
            INSERT INTO 'orderItems'('orderId', 'productId', quantity, 'createdAt', 'modifiedAt')
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