const db = require('./client');
const { createUser } = require('./users');

const users = [
  {
    name: 'Emily',
    email: 'Xpre55@aol.com',
    password: 'securepass',
  },
  {
    name: 'Roger',
    email: 'React23@yahoo.com',
    password: 'strongpass',
  },
  {
    name: 'Patrick',
    email: 'HTML@gmail.com',
    password: 'pass1234',
  },
  {
    name: 'Fred',
    email: 'xXnode_rangerXx@gmail.com',
    password: 'mysecretpassword',
  },
  {
    name: 'admin',
    email: 'admin123@gmail.com',
    password: 'password123',
  },
  {
    name: 'Bobby',
    email: 'backend_ranger@gmail.com',
    password: 'password123',
  },
  // Add more user objects as needed
];  

const dropTables = async () => {
    try {
        await db.query(`
        DROP TABLE IF EXISTS users;
        `)
    }
    catch(err) {
        throw err;
    }
}

async function createTables() {
  try {
      console.log("Starting to build tables...");

      await client.query(`
      CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username TEXT UNIQUE NOT NULL,
          billingId INT
          isAdmin BOOLEAN,
          created_at TIMESTAMP(255),
          firstName VARCHAR(255),
          lastName VARCHAR(255),
          color TEXT,
          email VARCHAR(255),
          password TEXT NOT NULL,
          
        );
      `);
          console.log('Finished building Users table')
      }catch(error){
          throw error;
      }
  }

const insertUsers = async () => {
  try {
    for (const user of users) {
      await createUser({name: user.name, email: user.email, password: user.password});
    }
    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  }
};

const seedDatabse = async () => {
    try {
        db.connect();
        await dropTables();
        await createTables();
        await insertUsers();
    }
    catch (err) {
        throw err;
    }
    finally {
        db.end()
    }
}

seedDatabse()
