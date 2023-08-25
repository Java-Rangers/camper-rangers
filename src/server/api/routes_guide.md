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

  GET /api/user/id
    ---get cart by user id
  PATCH /api/user/id
    ---sets user id's cart to fullfilled

PRODUCTS


ORDERS


ORDERITEMS

  POST /api/orderItems
    ---adds item to an order
    ---req.body {orderId, productId, quantity}

USERS

