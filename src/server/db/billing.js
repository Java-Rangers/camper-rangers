const db = require('./client');

// use bcrypt and salt to hash the users card number?
const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

const createBilling = async ({userId, paymentType, cardNumber}) => {
  try{
    const { rows: [billingInfo]} = await db.query(`
    INSERT INTO billing("userId", "paymentType", "cardNumber")
    VALUES($1, $2, $3)
    RETURNING *`, [userId, paymentType, cardNumber]);

    return billingInfo;
  }catch(err){
    throw err;
  }
}

const getBillingByUser = async (userId) => {
  try{
    const { rows: [ billingInfo ] } = await db.query(`
    SELECT *
    FROM billing
    WHERE userId=$1`, [userId]);

    return billingInfo;
  }catch(err){
    throw err;
  }
}

module.exports = {
  createBilling,
  getBillingByUser
}