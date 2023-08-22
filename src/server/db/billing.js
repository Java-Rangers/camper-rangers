const db = require('./client');

// use bcrypt and salt to hash the users card number?
const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

const createBilling = async ({userId, paymentType, cardNumber, createdAt, modifiedAt}) => {
  try{
    const { rows: [billingInfo]} = await db.query(`
    INSERT INTO billing("userId", "paymentType", "cardNumber", "createdAt", "modifiedAt")
    VALUES($1, $2, $3, $4, $5)
    RETURNING *`, [userId, paymentType, cardNumber, createdAt, modifiedAt]);

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

async function updateBillingById(userId, fields ={}){
  const setString = object.keys(fields).map(
    (key, index) => `"${key}"=$${index + 1}`
  ) .join(', ');
    if (setString.length === 0) {
      return;
    }
    try{
      const { rows: [billingInfo] } = await client.query(`
      UPDATE billing
      SET ${setString}
      WHERE id={userId}
      RETURNING *;
      `, Object.values(fields))

      return billingInfo
    } catch (error){
      throw error;
    }
}
  

async function deleteBillingById(userId){
  try {
    const { rows: [billingInfo] } = await client.query(`
    DELETE FROM billing
    WHERE id=$1
    RETURNING *;
    `, [billingInfo]);
    return bike;
} catch (error) {
    throw error;
}
}

module.exports = {
  createBilling,
  getBillingByUser,
  updateBillingById,
  deleteBillingById
}