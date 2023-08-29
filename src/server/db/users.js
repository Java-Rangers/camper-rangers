const db = require('./client')
const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

const createUser = async({ username, fName, lName, isAdmin, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
    try {
        const { rows: [ user ] } = await db.query(`
        INSERT INTO users(username, "fName", "lName", "isAdmin", email, password)
        VALUES($1, $2, $3, $4, $5, $6)
        ON CONFLICT (email) DO NOTHING
        RETURNING *`, [username, fName, lName, isAdmin, email, hashedPassword]);

        return user;
    } catch (err) {
        throw err;
    }
}

const getUser = async({email, password}) => {
    if(!email || !password) {
        return;
    }
    try {
        const user = await getUserByEmail(email);
        if(!user) return;
        const hashedPassword = user.password;
        const passwordsMatch = await bcrypt.compare(password, hashedPassword);
        if(!passwordsMatch) return;
        delete user.password;
        return user;
    } catch (err) {
        throw err;
    }
}

const getUserByEmail = async(email) => {
    console.log('getting user by email')
    try {
        const { rows: [ user ] } = await db.query(`
        SELECT * 
        FROM users
        WHERE email=$1;`, [ email ]);

        if(!user) {
            return;
        }
        return user;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const getAllUsers = async() => {
  try{

  }catch(err){
    throw err
  }
}

module.exports = {
    createUser,
    getUser,
    getUserByEmail,
    getAllUsers
};