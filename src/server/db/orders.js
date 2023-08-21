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

const getCart = async(fullfilled) => {
    console.log('getting cart...')
    try {
        const { rows:[order] } = await db.query(`
            SELECT *
            FROM orders
            WHERE fullfilled = false
        `, [order])
        if(fullfilled) {
            return;
        } else {
            return cart;
        }

    } catch(error) {
        console.error('error getting cart...',error)
    }
}

module.exports = {
    createOrders
}