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
    const {rows: [products] } = await db.query(`
    SELECT *
    FROM products
    RETURNING *
    `)
  
    console.log('get products successful')
    return products
  }catch(err) {
    console.log('error getting products', err)
  }

}

const getProductById = async(productId) => {
  try {
    const { rows: [product] } = await db.query(`
      SELECT *
      FROM products
      WHERE 'productId' = $1;
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
  getProductById
}