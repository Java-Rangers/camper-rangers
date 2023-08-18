const db = require('./client');
const { createUser } = require('./users');

const users = [
  {
    name: 'Emily Johnson',
    email: 'emily@example.com',
    password: 'securepass',
  },
  {
    name: 'Liu Wei',
    email: 'liu@example.com',
    password: 'strongpass',
  },
  {
    name: 'Isabella García',
    email: 'bella@example.com',
    password: 'pass1234',
  },
  {
    name: 'Mohammed Ahmed',
    email: 'mohammed@example.com',
    password: 'mysecretpassword',
  },
  {
    name: 'John Smith',
    email: 'john@example.com',
    password: 'password123',
  },
  // Add more user objects as needed
];  

const dropTables = async () => {
    console.log('---Dropping Tables---')  
    try {
        await db.query(`
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS orderItems;
        DROP TABLE IF EXISTS orders;
        DROP TABLE IF EXISTS address;
        DROP TABLE IF EXISTS billing;
        `)
    }
    catch(err) {
        throw err;
    }
    console.log('---Finished Dropping Tables---')
}

const createTables = async () => {
    console.log('---Creating Tables---')
    try{
        await db.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) DEFAULT 'name',
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
        CREATE TABLE billing (
            id SERIAL PRIMARY KEY,
            "userId" INTEGER REFERENCES users(id),
            paymentType VARCHAR(255),
            cardNumber VARCHAR(255),
            createdAt TIMESTAMP,
            modifiedAt TIMESTAMP
        );  
        CREATE TABLE address (
            id SERIAL PRIMARY KEY,
            "userId" INTEGER REFERENCES users(id),
            address VARCHAR(255),
            state VARCHAR(255),
            zip VARCHAR(255)
        );
        CREATE TABLE orders (
            id SERIAL PRIMARY KEY,
            "userId" INTEGER REFERENCES users(id),
            total INTEGER,
            createdAt TIMESTAMP,
            modifiedAt TIMESTAMP,
            fullfilled BOOLEAN
        );
        CREATE TABLE orderItems (
            id SERIAL PRIMARY KEY,
            "orderId" INTEGER REFERENCES orders(id),
            "productId" INTEGER REFERENCES products(id),
            createdAt TIMESTAMP,
            modifiedAt TIMESTAMP,
            quantity INTEGER
        );  
        `)
    }
    catch(err) {
        throw err;
    }
    console.log('---Finished Creating Tables---')
}

// POPULATES ADDRESS TABLE
async function createInitialAddress() {
  try{
    console.log('---Creating Initial Address Data---')
    await client.query(`
    INSERT INTO address ("userId", address, state, zip)
    VALUES
      (1, '123 Applewood Lane, Evergreen', 'OH', '43210'),
      (2, '456 Birch Street, Sunnyville', 'CA', '98765'),
      (3, '789 Cedar Drive, Maple Ridge', 'IL', '60606'),
      (4, '321 Dogwood Avenue, Starlight', 'TX', '75001'),
      (5, '654 Elm Place, Rivertown', 'PA', '19191'),
      (6, '987 Fir Blvd, Stone Creek', 'NY', '11223'),
      (7, '257 Maple Avenue, Suncrest', 'CA', '91025'),
      (8, '482 Oak Lane, Misty Meadows', 'TX', '77544'),
      (9, '109 Pine Circle, Blue Harbor', 'NY', '11492'),
      (10, '604 Birch Drive, Silver Peak', 'FL', '33981')
    `);
  }catch(err){
    console.error(err)
    throw err
  }
}

// POPULATES BILLING TABLE
async function createInitialBilling() {
  try {
    console.log('---Creating Initial Billing Data---');
    await client.query(`
      INSERT INTO billing ("userId", paymentType, cardNumber, createdAt, modifiedAt)
      VALUES
        (1, 'Credit', '1111-2222-3333-4444', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
        (2, 'Debit', '1111-2222-3333-4444', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())
    `);
  } catch(err) {
    console.error(err);
    throw err;
  }
}

// POPULATES ORDERS TABLE
async function createInitialOrders() {
  try {
    console.log('---Creating Initial Orders Data---');
    await client.query(`
      INSERT INTO orders ("userId", total, fullfilled, createdAt, modifiedAt)
      VALUES
        (1, REPLACE_WITH_VARIABLE_OF_PRODUCT_PRICE_SUM, false, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
        (2, REPLACE_WITH_VARIABLE_OF_PRODUCT_PRICE_SUM, false, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())
    `);
  } catch(err) {
    console.error(err);
    throw err;
  }
}

// POPULATES ORDERITEMS TABLE
async function createInitialOrderItems() {
  try {
    console.log('---Creating Initial Order Items Data---');
    await client.query(`
      INSERT INTO orderItems ("orderId", "productId", quantity, createdAt, modifiedAt)
      VALUES
        (1, 1, 3, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
        (2, 4, 3, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())
    `);
  } catch(err) {
    console.error(err);
    throw err;
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
