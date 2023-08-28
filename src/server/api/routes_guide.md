ADDRESSES

  GET /api/address/
    ---gets all addresses
  GET /api/address/id
    ---gets an address by id
  GET /api/address/user/id
    ---gets an address by user id
  POST /api/address/
    ---posts a new address
    ---req.body {userID, street, city, state, zip}
  PATCH /api/address/id
    ---updates an address by id
  PATCH /api/address/user/id
    ---updates an address by user id
  DELETE /api/address/id
    ---deletes an address by id
  DELETE /api/address/user/id
    ---deletes an address by user id

CART

  GET /api/users/userId/cart
    ---get cart by user id
  PATCH /api/users/userId/cart
    ---sets user id's cart to fullfilled

PRODUCTS


ORDERS


ORDERITEMS

  POST /api/orders/id/items
    ---adds item to an order id
    ---req.body {productId, quantity}

USERS

