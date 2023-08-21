const db = require('./client');

// use bcrypt and salt to hash the users card number?
const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

const createBilling = async ({userID, paymentType, cardNumber}) => {
  try{
    const { rows: [billingInfo]} = await db.query(`
    INSERT INTO billing("userID", "paymentType", "cardNumber")
    VALUES($1, $2, $3)
    RETURNING *`, [userID, paymentType, cardNumber]);

    return billingInfo;
  }catch(err){
    throw err;
  }
}

const getBillingByUser = async (userID) => {
  try{
    const { rows: [ billingInfo ] } = await db.query(`
    SELECT *
    FROM billing
    WHERE "userID"=$1`, [userID]);

    return billingInfo;
  }catch(err){
    throw err;
  }
}

module.exports = {
  createBilling,
  getBillingByUser
}