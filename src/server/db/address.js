const db = require('./client');

const createAddress = async ({userId, address, state, zip}) => {
  try{
    const { rows: [ addressInfo ] } = await db.query(`
    INSERT INTO address("userId", address, state, zip)
    VALUES($1, $2, $3, $4)
    RETURNING *`, [userId, address, state, zip]);

    return addressInfo;
  }catch(err){
    throw err
  }
}

const getAddressByUser = async (userId) => {
  try{
    const { rows: [addressInfo]} = await db.query(`
    SELECT *
    FROM address
    WHERE userId=$1`, [userId]);

    return addressInfo;
  }catch(err){
    throw err
  }
}

module.exports = {
  createAddress,
  getAddressByUser
}



