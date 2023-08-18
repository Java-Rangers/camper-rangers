module.exports = {
    ...require('./users')
}

async function createProduct({
    id,
    title,
    description,
    brand,
    availability,
    image,
    quantity,
    price,
    category = []
}) {
    try {
        const { rows: [ product ] } = await client.query(`
            INSERT INTO posts(id, title, description, brand, availability, image, quantity, price)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *;
        `, [id, title, description, brand, availability, image, quantity, price]);

        const categoryList = await createCategory(cat);

        return await addCatToProduct(product.id, categoryList);

    } catch (error) {
        console.error(error)
        throw error;
    }
}