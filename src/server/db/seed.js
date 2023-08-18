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
    try {
        await db.query(`
        DROP TABLE IF EXISTS users;
        `)
    }
    catch(err) {
        throw err;
    }
}

const createTables = async () => {
    try{
        await db.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) DEFAULT 'name',
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        )`)
    }
    catch(err) {
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

// ----------------------- Product table data ---------------------------------------------------------

async function createProductTables() {
    try {
        console.log('creating product tables...')

        await client.query(`
            CREATE TABLE products (
                id SERIAL PRIMARY KEY,
                title TEXT UNIQUE NOT NULL,
                Description TEXT NOT NULL,
                brand varchar(225) NOT NULL,
                availability boolean DEFAULT true,
                image varchar(225) NOT NULL,
                category TEXT NOT NULL,
                quantity INTEGER NOT NULL
                price INTEGER NOT NULL
            );
        `)

        console.log(`Product tables created!`)
    } catch(error) {
        console.error(error)
        throw error;
    }
}

async function createInitialProducts() {
    try {
        console.log('posting products...')

        await createProduct({
            title:'Super Tent',
            Description:'Keeps you dry',
            brand:'Alpine Echo Outfitters',
            availability: true,
            image:'https://cdn11.bigcommerce.com/s-yaxmx/images/stencil/1280x1280/products/239/744/6173_Back_and_Side_W__16921.1641589161.jpg?c=2',
            category:'camping',
            quantity: 12,
            price: 150
        });

        await createProduct({
            title:'All-Weather Tent',
            Description:'Rugged and wind proof',
            brand:'Alpine Echo Outfitters',
            availability: true,
            image:'https://m.media-amazon.com/images/I/61YYm19tLKL._AC_UF1000,1000_QL80_.jpg',
            category:'camping',
            quantity: 10,
            price: 200
        });

        await createProduct({
            title:'Survivalist Tent',
            Description:'its just a tent',
            brand:'Alpine Echo Outfitters',
            availability: true,
            image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
            category:'camping',
            quantity: 8,
            price: 200
        });

        await createProduct({
            title:'Family Tent',
            Description:'like regular tent but better',
            brand:'ZordPeak Adventure Supplies',
            availability: true,
            image:'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
            category:'camping',
            quantity: 4,
            price: 400
        });

        await createProduct({
            title:'Single Tent',
            Description:'also a normal tent',
            brand:'Alpine Echo Outfitters',
            availability: true,
            image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
            category:'camping',
            quantity: 2,
            price: 700
        });

        await createProduct({
            title:'Carabiner',
            Description:'Great for climbing, also never fails',
            brand:'TerraTrail Gear',
            availability: true,
            image:'https://www.metoliusclimbing.com/media/Rig-auto-lock.jpg',
            category:'accessories',
            quantity: 2000,
            price: 10
        });

        await createProduct({
            title:'Water Bottle',
            Description:'Stores water, and other liquids',
            brand:'CampMaven',
            availability: true,
            image:'https://img.everymarket.com/tx1sueuect5jgf8rcfup99cav9yi?width=650&height=650&format=jpg',
            category:'accessories',
            quantity: 100,
            price: 40
        });

        await createProduct({
            title:'Camp Burner',
            Description:'Starts fires for....cooking..',
            brand:'WildRoam Outdoors',
            availability: true,
            image:'https://academy.scene7.com/is/image/academy/20069863?$pdp-gallery-ng$',
            category:'camping',
            quantity: 6,
            price: 100
        });

        await createProduct({
            title:'Stakes',
            Description:'Holds down tents, and other accessories',
            brand:'PinePeak Adventures',
            availability: true,
            image:'https://www.rei.com/media/product/693153',
            category:'parts',
            quantity: 200,
            price: 5
        });

        await createProduct({
            title:'Tent Poles',
            Description:'Spare poles for your overprices tents',
            brand:'MorphTrek Outfitters',
            availability: true,
            image:'https://m.media-amazon.com/images/I/61hj8-ZY42L._AC_UF1000,1000_QL80_.jpg',
            category:'parts',
            quantity: 350,
            price: 30
        });

        await createProduct({
            title:'Outdoors Tent',
            Description:'Keeps you dry',
            brand:'Alping Echo Outfitters',
            availability: true,
            image:'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
            category:'camping',
            quantity: 12,
            price: 150
        });

        await createProduct({
            title:'Indoors Tent',
            Description:'Rugged and Windproof',
            brand:'WildRoam Outdoors',
            availability: true,
            image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
            category:'camping',
            quantity: 10,
            price: 200
        });

        await createProduct({
            title:'Generic Tent',
            Description:'Its literally, just a tent',
            brand:'Alping Echo Outfitters',
            availability: true,
            image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
            category:'camping',
            quantity: 8,
            price: 200
        });

        await createProduct({
            title:'Hunter Tent',
            Description:'Like a regular tent, but more redneck',
            brand:'Alping Echo OutFitters',
            availability: true,
            image:'https://cdn11.bigcommerce.com/s-yaxmx/images/stencil/1280x1280/products/239/744/6173_Back_and_Side_W__16921.1641589161.jpg?c=2',
            category:'camping',
            quantity: 4,
            price: 400
        });

        await createProduct({
            title:'Mountaineer Tent',
            Description:'Also a normal Tent',
            brand:'MorphTrek Outfitters',
            availability: true,
            image:'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
            category:'camping',
            quantity: 2,
            price: 700
        });

        await createProduct({
            title:'Tent',
            Description:'Keeps you dry in outdoor enviroments!',
            brand:'WildRoam Outdoors',
            availability: true,
            image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
            category:'camping',
            quantity: 12,
            price: 150
        });

        await createProduct({
            title:'Ultra Tent',
            Description:'Rugged and wind proof',
            brand:'ZordPeak Adventure Supplies',
            availability: true,
            image:'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
            category:'camping',
            quantity: 10,
            price: 200
        });

        await createProduct({
            title:'The Tent',
            Description:'Much Like the dude, it is actually just a tent',
            brand:'Alping Echo Outfitters',
            availability: true,
            image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
            category:'camping',
            quantity: 8,
            price: 200
        });

        await createProduct({
            title:'Range Tent',
            Description:'Like a regular tent, but bulletproof for...accidents',
            brand:'WildRoam Outdoors',
            availability: true,
            image:'https://cdn11.bigcommerce.com/s-yaxmx/images/stencil/1280x1280/products/239/744/6173_Back_and_Side_W__16921.1641589161.jpg?c=2',
            category:'camping',
            quantity: 4,
            price: 4000
        });

        await createProduct({
            title:'Tent 9',
            Description:'There be aliens living among us...',
            brand:'MorphTrek Outfitters',
            availability: true,
            image:'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
            category:'camping',
            quantity: 2,
            price: 900
        });

        await createProduct({
            title:'Fishing Pole',
            Description:'Sturdy construction, reliable',
            brand:'Pinepeak Adventure Supplies',
            availability: true,
            image:'https://www.outdoorlife.com/uploads/2023/01/31/Abu-Garcia-Jordan-Lee-Spinning-Rod-7-Medium.jpg?auto=webp&width=800&crop=16:10,offset-x50',
            category:'fishing',
            quantity: 4,
            price: 210
        });

        await createProduct({
            title:'Bait',
            Description:'Fish eat this',
            brand:'WildRoam Outdoors',
            availability: true,
            image:'https://i5.walmartimages.com/asr/5be2a726-e5d0-4d72-8009-0900cc0f232b_1.402e5d547f53796ba88ffe88231bd9a7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
            category:'fishing',
            quantity: 20,
            price: 30
        });

        await createProduct({
            title:'Tackle',
            Description:'Hook Included',
            brand:'WildRoam Outdoors',
            availability: true,
            image:'https://m.media-amazon.com/images/I/817NtJdAx0L._AC_UF1000,1000_QL80_.jpg',
            category:'fishing',
            quantity: 40,
            price: 45
        });

        await createProduct({
            title:'Mountain Bike',
            Description:'At least two wheels',
            brand:'TerraTrail Gear Co.',
            availability: true,
            image:'https://pedegoelectricbikes.com/wp-content/uploads/2020/12/pedego-ridge-rider-classic.jpg',
            category:'recreation',
            quantity: 6,
            price: 450
        });

        await createProduct({
            title:'First Aid Kit',
            Description:'Heal the injured and the sick, all basics included',
            brand:'TerraTrail Gear Co.',
            availability: true,
            image:'https://m.media-amazon.com/images/I/512V-EypsTL.jpg',
            category:'medical',
            quantity: 23,
            price: 50
        });

        await createProduct({
            title:'MRE',
            Description:'2,000 - 3,000 calories, beware the gum...',
            brand:'WildRoam Outdoors',
            availability: true,
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/MRE_7862.jpg/1200px-MRE_7862.jpg',
            category:'food',
            quantity: 50,
            price: 30
        });

        await createProduct({
            title:'Sleeping Bag',
            Description:'Probably way to hot, but at least its comfy',
            brand:'Pinepeak Adventure Supply',
            availability: true,
            image:'https://olympiadsports.com/storage/media/Do8Q1GY8bJk55fzl9eBs0iE2PrDAoFari9S0R4Oq.jpg',
            category:'camping',
            quantity: 3,
            price: 300
        });

        await createProduct({
            title:'Cold Weather jacket',
            Description:'Great for breaking harsh mountain winds and keeping warm',
            brand:'WildRoam Outdoors',
            availability: true,
            image:'https://www.uswings.com/wp-content/uploads/2018/01/G2ECWSPBK_2019.jpg',
            category:'clothing',
            quantity: 8,
            price: 120
        });

        await createProduct({
            title:'Snowshoes',
            Description:'Keeps you from sinking into the snow',
            brand:'Alping Echo Outfitters',
            availability: true,
            image:'https://retrospec.com/cdn/shop/products/4746_2_1400x.jpg?v=1665458219',
            category:'accessories',
            quantity: 65,
            price: 120
        });

        await createProduct({
            title:'Ice Pick',
            Description:'In case you want to climb a glacier...or breaking ice for coctails, your call',
            brand:'WildRoam Outdoors',
            availability: true,
            image:'https://vintageclimbing.com/cdn/shop/products/751ZeroAxeChouinardVintageclimbing.com_2048x.jpg?v=1648383528',
            category:'accessories',
            quantity: 70,
            price: 200
        });

        await createProduct({
            title:'hat',
            Description:'Helps keep the sun out of your eyes',
            brand:'Pinepeak Adventure Supply',
            availability: true,
            image:'https://u7q2x7c9.stackpathcdn.com/photos/23/97/361267_28185_L.jpg',
            category:'clothing',
            quantity: 100,
            price: 35
        })
        
        console.log('products posted!');
    } catch(error) {
        console.error(error)
        throw error;
    }
}