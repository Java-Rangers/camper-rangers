const db = require('./client')


const createProduct = async({title, description, brand, availability, image, category, price, quantity}) => {
  try{
    const {rows: [product] } = await db.query(`
      INSERT INTO products (title, description, brand, availability, image, category, price, quantity)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *`, [title, description, brand, availability, image, category, price, quantity]);

      console.log('products made')
      return product;
  } catch(err) {
    console.log('error creating products', err)
  }
}

const getProducts = async() => {
  try{
<<<<<<< HEAD
    const {rows: [product] } = await db.query(`
    SELECT * 
    FROM products
    RETURNING *
    `)
    
    console.log('GET all products successful')
    return product
  } catch (err) {
    console.log('error getting all products', err)
  }
=======
    const products = await db.query(`
    SELECT *
    FROM products
    `);

    return products.rows
  }catch(err) {
    console.log('error getting products', err)
  }

>>>>>>> main
}

const getProductById = async(productId) => {
  try {
    const { rows: [product] } = await db.query(`
      SELECT *
      FROM products
      WHERE id = $1;
    `, [productId])

    console.log('got single product sucessfully!')
    return product;

  } catch(error) {
    console.error('error getting product by ID',error)
    throw error;
  }
}

module.exports = {
  createProduct,
<<<<<<< HEAD
  getProducts,
  getProductById
=======
  getProductById,
  getProducts
>>>>>>> main
}