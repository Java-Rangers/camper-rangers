const db = require('./client');

const createAddress = async ({userID, address, state, zip}) => {
  try{
    const { rows: [ addressInfo ] } = await db.query(`
    INSERT INTO address("userID", address, state, zip)
    VALUES($1, $2, $3, $4)
    RETURNING *`, [userID, address, state, zip]);

    return addressInfo;
  }catch(err){
    throw err
  }
}

const getAddressByUser = async (userID) => {
  try{
    const { rows: [addressInfo]} = await db.query(`
    SELECT *
    FROM address
    WHERE "userID"=$1`, [userID]);

    return addressInfo;
  }catch(err){
    throw err
  }
}

module.exports = {
  createAddress,
  getAddressByUser
}



