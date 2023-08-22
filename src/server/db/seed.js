const db = require('./client');
const { createUser } = require('./users');
const { createProduct } = require('./product');
const { createBilling } = require('./billing');
const { createOrderItems } = require ('./orderItems');
const { createOrders } = require ('./orders')
const { createAddress } = require('./address');

const users = [
  {
    username: 'Xpre55 Ranger',
    fName: 'Emily',
    lName: 'Matherson',
    isAdmin: false,
    email: 'Xpre55@aol.com',
    password: 'securepass',
  },
  {
    username: 'React Ranger',
    fName: 'Roger',
    lName: 'Blackwood',
    isAdmin: false,
    email: 'React23@yahoo.com',
    password: 'securepass',
  },
  {
    username: 'HTML Ranger',
    fName: 'Patrick',
    lName: 'Whitestone',
    isAdmin: false,
    email: 'HTML@gmail.com',
    password: 'securepass',
  },
  {
    username: 'xXnode_rangerXx.js',
    fName: 'Fred',
    lName: 'Ravenscroft',
    isAdmin: false,
    email: 'xXnode_rangerXx@gmail.com',
    password: 'securepass',
  },
  {
    username: '4dmin_ranger',
    fName: 'admin',
    lName: 'Greenfield',
    isAdmin: true,
    email: 'admin123@aol.com',
    password: 'securepass',
  },
  {
    username: 'backend_ranger',
    fName: 'Bobby',
    lName: 'Goldwater',
    isAdmin: false,
    email: 'backend_ranger@gmail.com',
    password: 'securepass',
  },
];  

const products = [
  {
    title:'Super Tent',
    description:'Keeps you dry',
    brand:'Alpine Echo Outfitters',
    availability: true,
    image:'https://cdn11.bigcommerce.com/s-yaxmx/images/stencil/1280x1280/products/239/744/6173_Back_and_Side_W__16921.1641589161.jpg?c=2',
    category:'camping',
    quantity: 12,
    price: 150
  },
  {
    title:'All-Weather Tent',
    description:'Rugged and wind proof',
    brand:'Alpine Echo Outfitters',
    availability: true,
    image:'https://m.media-amazon.com/images/I/61YYm19tLKL._AC_UF1000,1000_QL80_.jpg',
    category:'camping',
    quantity: 10,
    price: 200
  },
  {
    title:'Survivalist Tent',
    description:'its just a tent',
    brand:'Alpine Echo Outfitters',
    availability: true,
    image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    category:'camping',
    quantity: 8,
    price: 200
  },
  {
    title:'Family Tent',
    description:'like regular tent but better',
    brand:'ZordPeak Adventure Supplies',
    availability: true,
    image:'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
    category:'camping',
    quantity: 4,
    price: 400
  },
  {
    title:'Single Tent',
    description:'also a normal tent',
    brand:'Alpine Echo Outfitters',
    availability: true,
    image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    category:'camping',
    quantity: 2,
    price: 700
  },
  {
    title:'Carabiner',
    description:'Great for climbing, also never fails',
    brand:'TerraTrail Gear',
    availability: true,
    image:'https://www.metoliusclimbing.com/media/Rig-auto-lock.jpg',
    category:'accessories',
    quantity: 2000,
    price: 10
  },
  {
    title:'Water Bottle',
    description:'Stores water, and other liquids',
    brand:'CampMaven',
    availability: true,
    image:'https://img.everymarket.com/tx1sueuect5jgf8rcfup99cav9yi?width=650&height=650&format=jpg',
    category:'accessories',
    quantity: 100,
    price: 40
  },
  {
    title:'Camp Burner',
    description:'Starts fires for....cooking..',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://academy.scene7.com/is/image/academy/20069863?$pdp-gallery-ng$',
    category:'camping',
    quantity: 6,
    price: 100
  },
  {
    title:'Stakes',
    description:'Holds down tents, and other accessories',
    brand:'PinePeak Adventures',
    availability: true,
    image:'https://www.rei.com/media/product/693153',
    category:'parts',
    quantity: 200,
    price: 5
  },
  {
    title:'Tent Poles',
    description:'Spare poles for your overprices tents',
    brand:'MorphTrek Outfitters',
    availability: true,
    image:'https://m.media-amazon.com/images/I/61hj8-ZY42L._AC_UF1000,1000_QL80_.jpg',
    category:'parts',
    quantity: 350,
    price: 30
  },
  {
    title:'Outdoors Tent',
    description:'Keeps you dry',
    brand:'Alping Echo Outfitters',
    availability: true,
    image:'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
    category:'camping',
    quantity: 12,
    price: 150
  },
  {
    title:'Indoors Tent',
    description:'Rugged and Windproof',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    category:'camping',
    quantity: 10,
    price: 200
  },
  {
    title:'Generic Tent',
    description:'Its literally, just a tent',
    brand:'Alping Echo Outfitters',
    availability: true,
    image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    category:'camping',
    quantity: 8,
    price: 200
  },
  {
    title:'Hunter Tent',
    description:'Like a regular tent, but more redneck',
    brand:'Alping Echo OutFitters',
    availability: true,
    image:'https://cdn11.bigcommerce.com/s-yaxmx/images/stencil/1280x1280/products/239/744/6173_Back_and_Side_W__16921.1641589161.jpg?c=2',
    category:'camping',
    quantity: 4,
    price: 400
  },
  {
    title:'Mountaineer Tent',
    description:'Also a normal Tent',
    brand:'MorphTrek Outfitters',
    availability: true,
    image:'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
    category:'camping',
    quantity: 2,
    price: 700
  },
  {
    title:'Tent',
    description:'Keeps you dry in outdoor enviroments!',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    category:'camping',
    quantity: 12,
    price: 150
  },
  {
    title:'Ultra Tent',
    description:'Rugged and wind proof',
    brand:'ZordPeak Adventure Supplies',
    availability: true,
    image:'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
    category:'camping',
    quantity: 10,
    price: 200
  },
  {
    title:'The Tent',
    description:'Much Like the dude, it is actually just a tent',
    brand:'Alping Echo Outfitters',
    availability: true,
    image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    category:'camping',
    quantity: 8,
    price: 200
  },
  {
    title:'Range Tent',
    description:'Like a regular tent, but bulletproof for...accidents',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://cdn11.bigcommerce.com/s-yaxmx/images/stencil/1280x1280/products/239/744/6173_Back_and_Side_W__16921.1641589161.jpg?c=2',
    category:'camping',
    quantity: 4,
    price: 4000
  },
  {
    title:'Tent 9',
    description:'There be aliens living among us...',
    brand:'MorphTrek Outfitters',
    availability: true,
    image:'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
    category:'camping',
    quantity: 2,
    price: 900
  },
  {
    title:'Fishing Pole',
    description:'Sturdy construction, reliable',
    brand:'Pinepeak Adventure Supplies',
    availability: true,
    image:'https://www.outdoorlife.com/uploads/2023/01/31/Abu-Garcia-Jordan-Lee-Spinning-Rod-7-Medium.jpg?auto=webp&width=800&crop=16:10,offset-x50',
    category:'fishing',
    quantity: 4,
    price: 210
  },
  {
    title:'Bait',
    description:'Fish eat this',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://i5.walmartimages.com/asr/5be2a726-e5d0-4d72-8009-0900cc0f232b_1.402e5d547f53796ba88ffe88231bd9a7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    category:'fishing',
    quantity: 20,
    price: 30
  },
  {
    title:'Tackle',
    description:'Hook Included',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://m.media-amazon.com/images/I/817NtJdAx0L._AC_UF1000,1000_QL80_.jpg',
    category:'fishing',
    quantity: 40,
    price: 45
  },
  {
    title:'Mountain Bike',
    description:'At least two wheels',
    brand:'TerraTrail Gear Co.',
    availability: true,
    image:'https://pedegoelectricbikes.com/wp-content/uploads/2020/12/pedego-ridge-rider-classic.jpg',
    category:'recreation',
    quantity: 6,
    price: 450
  },
  {
    title:'First Aid Kit',
    description:'Heal the injured and the sick, all basics included',
    brand:'TerraTrail Gear Co.',
    availability: true,
    image:'https://m.media-amazon.com/images/I/512V-EypsTL.jpg',
    category:'medical',
    quantity: 23,
    price: 50
  },
  {
    title:'MRE',
    description:'2,000 - 3,000 calories, beware the gum...',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/MRE_7862.jpg/1200px-MRE_7862.jpg',
    category:'food',
    quantity: 50,
    price: 30
  },
  {
    title:'Sleeping Bag',
    description:'Probably way to hot, but at least its comfy',
    brand:'Pinepeak Adventure Supply',
    availability: true,
    image:'https://olympiadsports.com/storage/media/Do8Q1GY8bJk55fzl9eBs0iE2PrDAoFari9S0R4Oq.jpg',
    category:'camping',
    quantity: 3,
    price: 300
  },
  {
    title:'Cold Weather jacket',
    description:'Great for breaking harsh mountain winds and keeping warm',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://www.uswings.com/wp-content/uploads/2018/01/G2ECWSPBK_2019.jpg',
    category:'clothing',
    quantity: 8,
    price: 120
  },
  {
    title:'Snowshoes',
    description:'Keeps you from sinking into the snow',
    brand:'Alping Echo Outfitters',
    availability: true,
    image:'https://retrospec.com/cdn/shop/products/4746_2_1400x.jpg?v=1665458219',
    category:'accessories',
    quantity: 65,
    price: 120
  },
  {
    title:'Ice Pick',
    description:'In case you want to climb a glacier...or breaking ice for coctails, your call',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://vintageclimbing.com/cdn/shop/products/751ZeroAxeChouinardVintageclimbing.com_2048x.jpg?v=1648383528',
    category:'accessories',
    quantity: 70,
    price: 200
  },
  {
    title:'hat',
    description:'Helps keep the sun out of your eyes',
    brand:'Pinepeak Adventure Supply',
    availability: true,
    image:'https://u7q2x7c9.stackpathcdn.com/photos/23/97/361267_28185_L.jpg',
    category:'clothing',
    quantity: 100,
    price: 35
  }
];

const addresses = [
  {
    userID: 1,
    address: '123 Applewood Lane, Evergreen',
    state: 'OH',
    zip: '43210'
  },
  {
    userID: 2,
    address: '456 Birch Street, Sunnyville',
    state: 'CA',
    zip: '98765'
  },
  {
    userID: 3,
    address: '789 Cedar Drive, Maple Ridge',
    state: 'IL',
    zip: '60606'
  },
  {
    userID: 4,
    address: '321 Dogwood Avenue, Starlight',
    state: 'TX',
    zip: '75001'
  },
  {
    userID: 5,
    address: '654 Elm Place, Rivertown',
    state: 'PA',
    zip: '19191'
  },
  {
    userID: 6,
    address: '987 Fir Blvd, Stone Creek',
    state: 'NY',
    zip: '11223'
  },
  // {
  //   userId: 7,
  //   address: '257 Maple Avenue, Suncrest',
  //   state: 'CA',
  //   zip: '91025'
  // },
  // {
  //   userId: 8,
  //   address: '482 Oak Lane, Misty Meadows',
  //   state: 'TX',
  //   zip: '77544'
  // },
  // {
  //   userId: 9,
  //   address: '109 Pine Circle, Blue Harbor',
  //   state: 'NY',
  //   zip: '11492'
  // },
  // {
  //   userId: 10,
  //   address: '604 Birch Drive, Silver Peak',
  //   state: 'FL',
  //   zip: '33981'
  // }
]

const billingInfo = [
  {
    userID: 1,
    paymentType: 'Credit card',
    cardNumber: '1111-2222-3333-4444',
  },
  {
    userID: 2,
    paymentType: 'Debit card',
    cardNumber: '5555-6666-7777-8888',
  }
]

const orderItems = [
  {
    orderID: 1,
    productID: 22,
    quantity: 1,
    createdAt: "08-22-2023 11:01:42",
    modifiedAt: "08-22-2023 11:01:42",
  },
  {
  orderID: 2,
  productID: 12,
  quantity: 7,
  createdAt: "08-22-2023 11:01:42",
  modifiedAt: "08-22-2023 11:01:42",
  },
  {
  orderID: 3,
  productID: 3,
  quantity: 2,
  createdAt: "08-22-2023 11:01:42",
  modifiedAt: "08-22-2023 11:01:42"
  }
]

const orders = [
  {
    userID: 1, //find way to dynamically insert var
    total: 34.99, //find way to dynamically calculate the total
    fullfilled: false,
    createdAt: "08-22-2023 11:01:42",
    modifiedAt: "08-22-2023 11:01:42"
  },
  {
  userID: 2,
  total: 149.99,
  fullfilled: false,
  createdAt: "08-22-2023 11:01:42",
  modifiedAt: "08-22-2023 11:01:42",
  },
  {
    userID: 2,
    total: 359.99,
    fullfilled: true,
    createdAt: "08-22-2023 11:01:42",
    modifiedAt: "08-22-2023 11:01:42",
  }
]

const dropTables = async () => {
    console.log('---Dropping Tables---')  
    try {
        await db.query(`
        DROP TABLE IF EXISTS orders CASCADE ;
        DROP TABLE IF EXISTS "orderItems" ;
        DROP TABLE IF EXISTS products CASCADE;
        DROP TABLE IF EXISTS address;
        DROP TABLE IF EXISTS billing;
        DROP TABLE IF EXISTS users;
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
            username VARCHAR (255), 
            "fName" VARCHAR(255),
            "lName" VARCHAR (255),
            "isAdmin" BOOLEAN,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
        CREATE TABLE billing (
            id SERIAL PRIMARY KEY,
            "userID" INTEGER REFERENCES users(id),
            "paymentType" VARCHAR(255),
            "cardNumber" VARCHAR(255)
        );  
        CREATE TABLE address (
            id SERIAL PRIMARY KEY,
            "userID" INTEGER REFERENCES users(id),
            address VARCHAR(255),
            state VARCHAR(255),
            zip VARCHAR(255)
        );
        CREATE TABLE orders (
            id SERIAL PRIMARY KEY,
            "userID" INTEGER REFERENCES users(id),
            total DECIMAL,
            "createdAt" TIMESTAMP,
            "modifiedAt" TIMESTAMP,
            fullfilled BOOLEAN
        );
        
        CREATE TABLE products (
          id SERIAL PRIMARY KEY,
          title TEXT,
          description TEXT,
          brand TEXT,
          availability BOOLEAN,
          image TEXT,
          category TEXT,
          price DECIMAL,
          quantity INTEGER
      );          
        
        CREATE TABLE "orderItems" (
            id SERIAL PRIMARY KEY,
            "orderId" INTEGER REFERENCES orders(id),
            "productId" INTEGER REFERENCES products(id),
            "createdAt" TIMESTAMP,
            "modifiedAt" TIMESTAMP,
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
async function insertAddresses() {
  try{
    for (const address of addresses){
      createAddress({userID: address.userID, address: address.address, state: address.state, zip: address.zip})
    }
  }catch(err){
    console.error(err)
    throw err
  }
}

// POPULATES BILLING TABLE
async function insertBilling() {
  try {
    for (const billing of billingInfo){
      await createBilling({userID: billing.userID, paymentType: billing.paymentType, cardNumber: billing.cardNumber})
    }
    console.log('---Creating Initial Billing Data---');
  } catch(err) {
    console.error(err);
    throw err;
  }
}



const insertUsers = async () => {
  try {
    for (const user of users) {
      await createUser({username: user.username, fName: user.fName, lName: user.lName, isAdmin: user.isAdmin, email: user.email, password: user.password});
    }
    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  }
};

const insertProducts = async () => {
  try{
  for (const product of products) {
    await createProduct ({title: product.title, description: product.description, brand: product.brand, 
      availability: product.availability, image: product.image, category: product.category,
       price: product.price, quantity: product.quantity});
  }
  console.log('Product Data insertion successful');
  } catch(error) {
  console.log('Error inserting products', error);
  }
}

const insertOrder = async () => {
  try{
    for (const order of orders) {
      await createOrders ( { userID: order.userID, total: order.total, fullfilled: order.fullfilled, createdAt: order.createdAt, modifiedAt: order.modifiedAt } );
    }
    console.log('insertion of orders successful');
  } catch(err) {
    console.log('error inserting orders', err)
  }
}

const insertOrderItems = async() => {
  try{
  for (const orderItem of orderItems) {
    await createOrderItems ( { orderID: orderItem.orderID, productID: orderItem.productID, quantity: orderItem.quantity, createdAt: orderItem.createdAt, modifiedAt: orderItem.modifiedAt } )
  }
  console.log('inserting order items successful');
  } catch(err) {
    console.log( 'error inserting order items', err)
  }
}


const seedDatabse = async () => {
    try {
        db.connect();
        await dropTables();
        await createTables();
        await insertUsers();
        await insertProducts();
        await insertAddresses();
        await insertBilling();
        await insertOrder();
        await insertOrderItems();
    }
    catch (err) {
        throw err;
    }
    finally {
        db.end()
    }
}

seedDatabse()