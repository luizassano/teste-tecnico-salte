import { DataSource } from 'typeorm';
import { Product } from './entities/product.entity';

const products = [
  {
    name: 'PlayStation 5',
    description: 'Console PlayStation 5, 825GB SSD, Controle DualSense, 4K, Ray Tracing',
    price: 4499.99,
    image: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$'
  },
  {
    name: 'Xbox Series X',
    description: 'Console Xbox Series X, 1TB SSD, 4K, 120FPS, Ray Tracing, Compatível com todos os jogos Xbox',
    price: 4299.99,
    image: 'https://cms-assets.xboxservices.com/assets/bc/40/bc40fdf3-85a6-4c36-af92-dca2d36fc7e5.png?n=642227_Hero-Gallery-0_A1_857x676.png'
  },
  {
    name: 'Nintendo Switch OLED',
    description: 'Console Nintendo Switch OLED, Tela de 7" OLED, 64GB, Dock para TV, Joy-Con coloridos',
    price: 2399.99,
    image: 'https://a-static.mlcdn.com.br/1500x1500/nintendo-switch-oled-64gb-1x-joy-con-branco-standard-hegskaaaa/inpower4/4259/9abbbd7a82b3ea4130b1851aeaaf25fd.jpeg'
  },
  {
    name: 'Xbox Series S',
    description: 'Console Xbox Series S, 512GB SSD, 1440p, 120FPS, Digital Edition, Compacto e potente',
    price: 2299.99,
    image: 'https://m.media-amazon.com/images/I/51pNvD-nsvL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    name: 'PlayStation 4',
    description: 'Console PlayStation 4 Slim, 1TB, Controle DualShock 4, Full HD, HDR',
    price: 2599.99,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&auto=format&fit=crop&q=60'
  }
];

async function seed() {
  const dataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'products_db',
    entities: [Product],
    synchronize: true,
  });

  try {
    await dataSource.initialize();
    console.log('Database connection established');

    const productRepository = dataSource.getRepository(Product);
    await productRepository.clear();
    console.log('Products table cleared');

    for (const product of products) {
      await productRepository.save(product);
    }
    console.log('Products inserted successfully');

  } catch (error) {
    console.error('Error during seed:', error);
  } finally {
    await dataSource.destroy();
  }
}

seed(); 