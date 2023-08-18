const db = require('./client')


const createProduct = async({title, Description, brand, availability, image, category, price, quantity}) => {
  try{
    const {rows: [product] } = await db.query(`
      INSERT INTO products(title, Description, brand, availability, image, category, price, quantity)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *`, [title, Description, brand, availability, image, category, price, quantity]);

      console.log('products made')
      return product;
  } catch(err) {
    console.log('error creating products', err)
  }
}

module.exports = {
  createProduct
}