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

async function updateBillingById(userID, fields ={}){
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
      WHERE id={userID}
      RETURNING *;
      `, Object.values(fields))

      return billingInfo
    } catch (error){
      throw error;
    }
}
  

async function deleteBillingById(userID){
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