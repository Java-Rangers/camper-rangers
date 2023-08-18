const products = [
  {
    title:'Super Tent',
    Description:'Keeps you dry',
    brand:'Alpine Echo Outfitters',
    availability: true,
    image:'https://cdn11.bigcommerce.com/s-yaxmx/images/stencil/1280x1280/products/239/744/6173_Back_and_Side_W__16921.1641589161.jpg?c=2',
    category:'camping',
    quantity: 12,
    price: 150
  },

  {
    title:'All-Weather Tent',
    Description:'Rugged and wind proof',
    brand:'Alpine Echo Outfitters',
    availability: true,
    image:'https://m.media-amazon.com/images/I/61YYm19tLKL._AC_UF1000,1000_QL80_.jpg',
    category:'camping',
    quantity: 10,
    price: 200
  },

  {
    title:'Survivalist Tent',
    Description:'its just a tent',
    brand:'Alpine Echo Outfitters',
    availability: true,
    image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    category:'camping',
    quantity: 8,
    price: 200
  },

  {
    title:'Family Tent',
    Description:'like regular tent but better',
    brand:'ZordPeak Adventure Supplies',
    availability: true,
    image:'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
    category:'camping',
    quantity: 4,
    price: 400
  },

  {
    title:'Single Tent',
    Description:'also a normal tent',
    brand:'Alpine Echo Outfitters',
    availability: true,
    image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    category:'camping',
    quantity: 2,
    price: 700
  },

  {
    title:'Carabiner',
    Description:'Great for climbing, also never fails',
    brand:'TerraTrail Gear',
    availability: true,
    image:'https://www.metoliusclimbing.com/media/Rig-auto-lock.jpg',
    category:'accessories',
    quantity: 2000,
    price: 10
  },

  {
    title:'Water Bottle',
    Description:'Stores water, and other liquids',
    brand:'CampMaven',
    availability: true,
    image:'https://img.everymarket.com/tx1sueuect5jgf8rcfup99cav9yi?width=650&height=650&format=jpg',
    category:'accessories',
    quantity: 100,
    price: 40
  },

  {
    title:'Camp Burner',
    Description:'Starts fires for....cooking..',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://academy.scene7.com/is/image/academy/20069863?$pdp-gallery-ng$',
    category:'camping',
    quantity: 6,
    price: 100
  },

  {
    title:'Stakes',
    Description:'Holds down tents, and other accessories',
    brand:'PinePeak Adventures',
    availability: true,
    image:'https://www.rei.com/media/product/693153',
    category:'parts',
    quantity: 200,
    price: 5
  },

  {
    title:'Tent Poles',
    Description:'Spare poles for your overprices tents',
    brand:'MorphTrek Outfitters',
    availability: true,
    image:'https://m.media-amazon.com/images/I/61hj8-ZY42L._AC_UF1000,1000_QL80_.jpg',
    category:'parts',
    quantity: 350,
    price: 30
  },

  {
    title:'Outdoors Tent',
    Description:'Keeps you dry',
    brand:'Alping Echo Outfitters',
    availability: true,
    image:'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
    category:'camping',
    quantity: 12,
    price: 150
  },

  {
    title:'Indoors Tent',
    Description:'Rugged and Windproof',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    category:'camping',
    quantity: 10,
    price: 200
  },

  {
    title:'Generic Tent',
    Description:'Its literally, just a tent',
    brand:'Alping Echo Outfitters',
    availability: true,
    image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    category:'camping',
    quantity: 8,
    price: 200
  },

  {
    title:'Hunter Tent',
    Description:'Like a regular tent, but more redneck',
    brand:'Alping Echo OutFitters',
    availability: true,
    image:'https://cdn11.bigcommerce.com/s-yaxmx/images/stencil/1280x1280/products/239/744/6173_Back_and_Side_W__16921.1641589161.jpg?c=2',
    category:'camping',
    quantity: 4,
    price: 400
  },

  {
    title:'Mountaineer Tent',
    Description:'Also a normal Tent',
    brand:'MorphTrek Outfitters',
    availability: true,
    image:'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
    category:'camping',
    quantity: 2,
    price: 700
  },

  {
    title:'Tent',
    Description:'Keeps you dry in outdoor enviroments!',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    category:'camping',
    quantity: 12,
    price: 150
  },

  {
    title:'Ultra Tent',
    Description:'Rugged and wind proof',
    brand:'ZordPeak Adventure Supplies',
    availability: true,
    image:'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
    category:'camping',
    quantity: 10,
    price: 200
  },

  {
    title:'The Tent',
    Description:'Much Like the dude, it is actually just a tent',
    brand:'Alping Echo Outfitters',
    availability: true,
    image:'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    category:'camping',
    quantity: 8,
    price: 200
  },

  {
    title:'Range Tent',
    Description:'Like a regular tent, but bulletproof for...accidents',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://cdn11.bigcommerce.com/s-yaxmx/images/stencil/1280x1280/products/239/744/6173_Back_and_Side_W__16921.1641589161.jpg?c=2',
    category:'camping',
    quantity: 4,
    price: 4000
  },

  {
    title:'Tent 9',
    Description:'There be aliens living among us...',
    brand:'MorphTrek Outfitters',
    availability: true,
    image:'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
    category:'camping',
    quantity: 2,
    price: 900
  },

  {
    title:'Fishing Pole',
    Description:'Sturdy construction, reliable',
    brand:'Pinepeak Adventure Supplies',
    availability: true,
    image:'https://www.outdoorlife.com/uploads/2023/01/31/Abu-Garcia-Jordan-Lee-Spinning-Rod-7-Medium.jpg?auto=webp&width=800&crop=16:10,offset-x50',
    category:'fishing',
    quantity: 4,
    price: 210
  },

  {
    title:'Bait',
    Description:'Fish eat this',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://i5.walmartimages.com/asr/5be2a726-e5d0-4d72-8009-0900cc0f232b_1.402e5d547f53796ba88ffe88231bd9a7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    category:'fishing',
    quantity: 20,
    price: 30
  },

  {
    title:'Tackle',
    Description:'Hook Included',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://m.media-amazon.com/images/I/817NtJdAx0L._AC_UF1000,1000_QL80_.jpg',
    category:'fishing',
    quantity: 40,
    price: 45
  },

  {
    title:'Mountain Bike',
    Description:'At least two wheels',
    brand:'TerraTrail Gear Co.',
    availability: true,
    image:'https://pedegoelectricbikes.com/wp-content/uploads/2020/12/pedego-ridge-rider-classic.jpg',
    category:'recreation',
    quantity: 6,
    price: 450
  },

  {
    title:'First Aid Kit',
    Description:'Heal the injured and the sick, all basics included',
    brand:'TerraTrail Gear Co.',
    availability: true,
    image:'https://m.media-amazon.com/images/I/512V-EypsTL.jpg',
    category:'medical',
    quantity: 23,
    price: 50
  },

  {
    title:'MRE',
    Description:'2,000 - 3,000 calories, beware the gum...',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/MRE_7862.jpg/1200px-MRE_7862.jpg',
    category:'food',
    quantity: 50,
    price: 30
  },

  {
    title:'Sleeping Bag',
    Description:'Probably way to hot, but at least its comfy',
    brand:'Pinepeak Adventure Supply',
    availability: true,
    image:'https://olympiadsports.com/storage/media/Do8Q1GY8bJk55fzl9eBs0iE2PrDAoFari9S0R4Oq.jpg',
    category:'camping',
    quantity: 3,
    price: 300
  },

  {
    title:'Cold Weather jacket',
    Description:'Great for breaking harsh mountain winds and keeping warm',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://www.uswings.com/wp-content/uploads/2018/01/G2ECWSPBK_2019.jpg',
    category:'clothing',
    quantity: 8,
    price: 120
  },

  {
    title:'Snowshoes',
    Description:'Keeps you from sinking into the snow',
    brand:'Alping Echo Outfitters',
    availability: true,
    image:'https://retrospec.com/cdn/shop/products/4746_2_1400x.jpg?v=1665458219',
    category:'accessories',
    quantity: 65,
    price: 120
  },

  {
    title:'Ice Pick',
    Description:'In case you want to climb a glacier...or breaking ice for coctails, your call',
    brand:'WildRoam Outdoors',
    availability: true,
    image:'https://vintageclimbing.com/cdn/shop/products/751ZeroAxeChouinardVintageclimbing.com_2048x.jpg?v=1648383528',
    category:'accessories',
    quantity: 70,
    price: 200
  },

  {
    title:'hat',
    Description:'Helps keep the sun out of your eyes',
    brand:'Pinepeak Adventure Supply',
    availability: true,
    image:'https://u7q2x7c9.stackpathcdn.com/photos/23/97/361267_28185_L.jpg',
    category:'clothing',
    quantity: 100,
    price: 35
  }

];

async function createInitialProducts() {
  try {
      console.log('posting products...') 
    await client.query(`
    INSERT INTO 
    `)
      console.log('products posted!');
  } catch(error) {
      console.error(error)
      throw error;
  }
}

async function createInitialProducts() {
  try {
      console.log('posting products...') 
    await client.query(`
    INSERT INTO products ("title", "description", "brand", "availability", "image", "category", "quantity", "price")
    VALUES
    (1, 
    'Super Tent',
    'Keeps you dry',
    'Alpine Echo Outfitters',
    true,
    'https://cdn11.bigcommerce.com/s-yaxmx/images/stencil/1280x1280/products/239/744/6173_Back_and_Side_W__16921.1641589161.jpg?c=2',
    'camping',
    12,
    150),

    (2,
    'All-Weather Tent',
    'Rugged and wind proof',
    'Alpine Echo Outfitters',
    true,
    'https://m.media-amazon.com/images/I/61YYm19tLKL._AC_UF1000,1000_QL80_.jpg',
    'camping',
    10,
    200
  ),

  ( 3,
    'Survivalist Tent',
    'its just a tent',
    'Alpine Echo Outfitters',
    true,
    'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    'camping',
    8,
    200
  ),

  ( 4,
    title:'Family Tent',
    'like regular tent but better',
    'ZordPeak Adventure Supplies',
    true,
    'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
    'camping',
    4,
    400
  ),

  ( 5,
    title:'Single Tent',
    'also a normal tent',
    'Alpine Echo Outfitters',
    true,
    'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    'camping',
    2,
    700
  ),

  ( 6,
    title:'Carabiner',
    'Great for climbing, also never fails',
    'TerraTrail Gear',
    true,
    'https://www.metoliusclimbing.com/media/Rig-auto-lock.jpg',
    'accessories',
    2000,
    10
  ),

  ( 7,
    title:'Water Bottle',
    'Stores water, and other liquids',
    'CampMaven',
    true,
    'https://img.everymarket.com/tx1sueuect5jgf8rcfup99cav9yi?width=650&height=650&format=jpg',
    'accessories',
    100,
    40
  ),

  ( 8,
    title:'Camp Burner',
    'Starts fires for....cooking..',
    'WildRoam Outdoors',
    true,
    'https://academy.scene7.com/is/image/academy/20069863?$pdp-gallery-ng$',
    'camping',
    6,
    100
  ),

  ( 9,
    title:'Stakes',
    'Holds down tents, and other accessories',
    'PinePeak Adventures',
    true,
    'https://www.rei.com/media/product/693153',
    'parts',
    200,
    5
  ),

  ( 10,
    title:'Tent Poles',
    'Spare poles for your overprices tents',
    'MorphTrek Outfitters',
    true,
    'https://m.media-amazon.com/images/I/61hj8-ZY42L._AC_UF1000,1000_QL80_.jpg',
    'parts',
    350,
    30
  ),

  ( 11,
    title:'Outdoors Tent',
    'Keeps you dry',
    'Alping Echo Outfitters',
    true,
    'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
    'camping',
    12,
    150
  ),

  ( 12,
    title:'Indoors Tent',
    'Rugged and Windproof',
    'WildRoam Outdoors',
    true,
    'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    'camping',
    10,
    200
  ),

  ( 13,
    title:'Generic Tent',
    'Its literally, just a tent',
    'Alping Echo Outfitters',
    true,
    'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    'camping',
    8,
    200
  ),

  ( 14,
    title:'Hunter Tent',
    'Like a regular tent, but more redneck',
    'Alping Echo OutFitters',
    true,
    'https://cdn11.bigcommerce.com/s-yaxmx/images/stencil/1280x1280/products/239/744/6173_Back_and_Side_W__16921.1641589161.jpg?c=2',
    'camping',
    4,
    400
  ),

  ( 15,
    title:'Mountaineer Tent',
    'Also a normal Tent',
    'MorphTrek Outfitters',
    true,
    'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
    'camping',
    2,
    700
  ),

  ( 16,
    title:'Tent',
    'Keeps you dry in outdoor enviroments!',
    'WildRoam Outdoors',
    true,
    'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    'camping',
    12,
    150
  ),

  ( 17,
    title:'Ultra Tent',
    'Rugged and wind proof',
    'ZordPeak Adventure Supplies',
    true,
    'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
    'camping',
    10,
    200
  ),

  ( 18,
    title:'The Tent',
    'Much Like the dude, it is actually just a tent',
    'Alping Echo Outfitters',
    true,
    'https://www.ferrino.it/k-components/resize/w_2000-h_2000/k-content/ferrino/themes/ferrino/html/imagebank/e-shop/photogallery-34909/2815.jpg',
    'camping',
    8,
    200
  ),

  (19,
    title:'Range Tent',
    'Like a regular tent, but bulletproof for...accidents',
    'WildRoam Outdoors',
    true,
    'https://cdn11.bigcommerce.com/s-yaxmx/images/stencil/1280x1280/products/239/744/6173_Back_and_Side_W__16921.1641589161.jpg?c=2',
    'camping',
    4,
    4000
  ),

  ( 20,
    title:'Tent 9',
    'There be aliens living among us...',
    'MorphTrek Outfitters',
    true,
    'https://media.istockphoto.com/id/142533334/photo/yellow-dome-tent-with-open-zip-enclosure.jpg?s=612x612&w=0&k=20&c=GZyiiSF95j0Yxa_7pc6LUebf8MVvRebJcrnMXETN5eU=',
    'camping',
    2,
    900
  ),

  ( 21,
    title:'Fishing Pole',
    'Sturdy construction, reliable',
    'Pinepeak Adventure Supplies',
    true,
    'https://www.outdoorlife.com/uploads/2023/01/31/Abu-Garcia-Jordan-Lee-Spinning-Rod-7-Medium.jpg?auto=webp&width=800&crop=16:10,offset-x50',
    'fishing',
    4,
    210
  ),

  ( 22,
    title:'Bait',
    'Fish eat this',
    'WildRoam Outdoors',
    true,
    'https://i5.walmartimages.com/asr/5be2a726-e5d0-4d72-8009-0900cc0f232b_1.402e5d547f53796ba88ffe88231bd9a7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    'fishing',
    20,
    30
  ),

  ( 23,
    title:'Tackle',
    'Hook Included',
    'WildRoam Outdoors',
    true,
    'https://m.media-amazon.com/images/I/817NtJdAx0L._AC_UF1000,1000_QL80_.jpg',
    'fishing',
    40,
    45
  ),

  ( 24,
    title:'Mountain Bike',
    'At least two wheels',
    'TerraTrail Gear Co.',
    true,
    'https://pedegoelectricbikes.com/wp-content/uploads/2020/12/pedego-ridge-rider-classic.jpg',
    'recreation',
    6,
    450
  ),

  ( 25,
    title:'First Aid Kit',
    'Heal the injured and the sick, all basics included',
    'TerraTrail Gear Co.',
    true,
    'https://m.media-amazon.com/images/I/512V-EypsTL.jpg',
    'medical',
    23,
    50
  ),

  ( 26,
    title:'MRE',
    '2,000 - 3,000 calories, beware the gum...',
    'WildRoam Outdoors',
    true,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/MRE_7862.jpg/1200px-MRE_7862.jpg',
    'food',
    50,
    30
  ),

  ( 27,
    title:'Sleeping Bag',
    'Probably way to hot, but at least its comfy',
    'Pinepeak Adventure Supply',
    true,
    'https://olympiadsports.com/storage/media/Do8Q1GY8bJk55fzl9eBs0iE2PrDAoFari9S0R4Oq.jpg',
    'camping',
    3,
    300
  ),

  ( 28,
    title:'Cold Weather jacket',
    'Great for breaking harsh mountain winds and keeping warm',
    'WildRoam Outdoors',
    true,
    'https://www.uswings.com/wp-content/uploads/2018/01/G2ECWSPBK_2019.jpg',
    'clothing',
    8,
    120
  ),

  ( 29,
    title:'Snowshoes',
    'Keeps you from sinking into the snow',
    'Alping Echo Outfitters',
    true,
    'https://retrospec.com/cdn/shop/products/4746_2_1400x.jpg?v=1665458219',
    'accessories',
    65,
    120
  ),

  ( 30,
    title:'Ice Pick',
    'In case you want to climb a glacier...or breaking ice for coctails, your call',
    'WildRoam Outdoors',
    true,
    'https://vintageclimbing.com/cdn/shop/products/751ZeroAxeChouinardVintageclimbing.com_2048x.jpg?v=1648383528',
    'accessories',
    70,
    200
  ),

  ( 31,
    title:'hat',
    'Helps keep the sun out of your eyes',
    'Pinepeak Adventure Supply',
    true,
    'https://u7q2x7c9.stackpathcdn.com/photos/23/97/361267_28185_L.jpg',
    'clothing',
    100,
    35
  )
    
  `);
      console.log('products posted!');
  } catch (error) {
      console.error(error)
      throw error;
    }
  }