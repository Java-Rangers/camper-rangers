const db = require('./client')
const bcrypt = require('bcrypt');
const SALT_COUNT = 10;


// create user data following the same format we have in seed data for the dummy user data. password is hashed for securtiy reasons. SALT COUNT is for the length to be when the password is hashed.
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

// grabbing the user by email and password if not grabbed properly error occurs
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

// getting user by just email 
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

// getting all users for admin function to display all current users 
const getAllUsers = async () => {
    try {
      const query = 'SELECT * FROM users';
      const result = await db.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  };


  //getting user by id for use in establishing a usestate for admin status
const getUserById = async(userId) => {
    try{
        const id = parseInt (userId, 10)
        const {rows: [user] } = await db.query (`
            SELECT *
            FROM users
            WHERE id=$1;`, [id]);

        if(!user) {
            return
        }
        return user;
    } catch(err) {
        console.log('error getting userById', err)
    }

}

module.exports = {
    createUser,
    getUser,
    getUserByEmail,
    getAllUsers,
    getUserById
};