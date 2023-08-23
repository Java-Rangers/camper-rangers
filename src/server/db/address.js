/*
GET /api/address/
  ---gets all addresses

GET /api/address/id
  ---gets an address by id

GET /api/address/user/id
  ---gets an address by user id

POST /api/address/
  ---posts a new address
  ---requires a user id

PATCH /api/address/id
  ---updates an address by id

PATCH /api/address/user/id
  ---updates an address by user id

DELETE /api/address/id
  ---deletes an address by id

DELETE /api/address/user/id
  ---deletes an address by user id
*/

const db = require('./client');

// --------------------GET FUNCTIONS--------------------

const getAllAddresses = async () => {
  try{
    const addresses = await db.query(`SELECT * FROM address`)
    return addresses.rows
  }catch(err){
    console.error('Error while getting all addresses', err);
    throw err
  }
}

// currently only displays the first address, not built for multiple addresses
const getAddress = async (id) => {
  try{
    const { rows: [address] } = await db.query(`
    SELECT * FROM address
    WHERE id = $1`, [id])
    return address
  }catch(err){
    console.error('Error while getting address by id', err);
    throw err
  }
}

// currently only displays the first address, not built for multiple addresses
const getAddressByUser = async (id) => {
  try{
    const { rows: [address] } = await db.query(`
    SELECT * FROM address
    WHERE "userID"=$1`, [id]);
    return address;
  }catch(err){
    console.error('Error while getting address by user id', err);
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
    console.error('Error while creating address', err);
    throw err
  }
}

// --------------------EDIT FUNCTIONS-----------------------
  // takes the object fields, and returns an array of its keys
  // maps over that array, for each property it creates and joins strings for SQL's SET function
  // Object.values(fields) returns an array of all the key values of fields

const editAddress = async (id, fields = {}) => {

  const setString = Object.keys(fields).map(
    (key, index) => `"${key}"=$${index + 1}`
  ).join(', ');

  if (setString.length === 0){
    return;
  }  
  try{
    const { rows: [address] } = await db.query(`
    UPDATE address SET ${setString}
    WHERE id=$${Object.keys(fields).length + 1}
    RETURNING *;`, [...Object.values(fields), id]);
    console.log('data to be returned: ', {rows: [address]})
    return address;
  }catch(err){
    console.error('Error while updating address by id', err);
    throw err
  }
}

const editAddressByUser = async (id, fields = {}) => {

  const setString = Object.keys(fields).map(
    (key, index) => `"${key}"=$${index + 1}`
  ).join(', ');

  if (setString.length === 0){
    return;
  }
  try{
    const { rows: [address] } = await db.query(`
    UPDATE address SET ${setString}
    WHERE "userID"=$${Object.keys(fields).length + 1}
    RETURNING *;`, [...Object.values(fields), id]);
    return address;
  }catch(err){
    console.error('Error while updating address by user id', err);
    throw err
  }
}

// -------------------DELETE FUNCTIONS-------------------

const deleteAddress = async (id) => {
  try{
    const { rows: [address] } = await db.query(`
    DELETE FROM address WHERE id=$1`, [id]);
    return address;
  }catch(err){
    console.error('Error while deleting address by id', err);
    throw err
  }
}

const deleteAddressByUser = async (id) => {
  try{
    const { rows: [address] } = await db.query(`
    DELETE FROM address WHERE "userID"=$1`, [id]);
    return address;
  }catch(err){
    console.error('Error while deleting address by user id', err);
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



