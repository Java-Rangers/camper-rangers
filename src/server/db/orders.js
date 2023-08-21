const db = require('./client')


const createOrders = async (userId, total, fullfilled, createdAt, modifiedAt) => {
    try {
        console.log('creating orders...')
        const { rows: [orders] } = await db.query(`
            INSERT INTO 'orders'('userId', total, fullfilled, 'createdAt', 'modifiedAt')
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `, [userId, total, fullfilled, createdAt, modifiedAt])
        console.log('orders created succesfully!')
        return orders
    } catch(error) {
        console.error('error creating orders...', error)
        throw error;
    }
} 

module.exports = {
    createOrders
}