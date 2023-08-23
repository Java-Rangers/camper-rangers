const db = require('./client');

// --------------------GET FUNCTIONS--------------------

const getAllAddresses = async () => {
  try{
    const addresses = await db.query(`SELECT * FROM address`)
    return addresses.rows
  }catch(err){
    throw err
  }
}

const getAddress = async (id) => {
  try{
    const { rows: [address] } = await db.query(`
    SELECT * FROM address
    WHERE id = $1`, [id])
    return address
  }catch(err){
    throw err
  }
}

const getAddressByUser = async (userID) => {
  try{
    const { rows: [address] } = await db.query(`
    SELECT * FROM address
    WHERE "userID"=$1`, [userID]);
    return address;
  }catch(err){
    throw err
  }
}

// ----------------------CREATE FUNCTIONS----------------------

// RECEIVES AN ADDRESS OBJECT, THEN CREATES AND INSERTS THAT ADDRESS INTO TABLE
// need to pass in the userID the address will be assigned to
const createAddress = async ({userID, street, city, state, zip}) => {
  try{
    const { rows: [ address ] } = await db.query(`
    INSERT INTO address("userID", street, city, state, zip)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *`, [userID, street, city, state, zip]);

    return address;
  }catch(err){
    throw err
  }
}

// --------------------EDIT FUNCTIONS-----------------------

const editAddress = async (id) => {
  try{
    const { rows: [address] } = await db.query(`
    UPDATE address SET ${somevariable}
    WHERE id=$1`, [id])
  }catch(err){
    throw err
  }
}

const editAddressByUser = async () => {
  try{

  }catch(err){
    throw err
  }
}

// -------------------DELETE FUNCTIONS-------------------

const deleteAddress = async () => {
  try{

  }catch(err){
    throw err
  }
}

const deleteAddressByUser = async () => {
  try{

  }catch(err){
    throw err
  }
}

module.exports = {
  createAddress,
  getAllAddresses,
  getAddressByUser,
  getAddress,
  editAddress,
  editAddressByUser,
  deleteAddress,
  deleteAddressByUser
}



