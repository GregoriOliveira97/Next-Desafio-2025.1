import { PrismaClient } from '@prisma/client';
import { title } from 'process';

const prisma = new PrismaClient();

async function main() {

const category1= await prisma.category.create({
    data:{
      name: "Ação",
    },
  })
  const category2= await prisma.category.create({
    data:{
      name: "RPG",
    },
  })
  const category3= await prisma.category.create({
    data:{
      name: "Hack and Slash",
    },
  })
  const category4= await prisma.category.create({
    data:{
      name: "Aventura",
    },
  })


const games =[
  {
      gameTitle: 'Exemplo de Jogo',
      gameDesc: 'Descrição do jogo de exemplo',
      gamePrice: 59.99,
      image: '/imgs/nioh2capa.png',
      categories: {
        connect:[{id: category2.id},{id:category3.id}]
      },
      published: true
    
  }
  
];
for (const game of games) {
  await prisma.games.create({
    data: game,
  });
}


  const products = [
    {
      title: 'Wireless Mouse',
      description: 'A smooth and responsive wireless mouse.',
      price: 29.99,
      createdAt: new Date(),
    },
    {
      title: 'Mechanical Keyboard',
      description: 'A durable mechanical keyboard with RGB lighting.',
      price: 89.99,
      createdAt: new Date(),
    },
    {
      title: 'Noise Cancelling Headphones',
      description: 'Comfortable headphones with active noise cancelling.',
      price: 199.99,
      createdAt: new Date(),
    },
    {
      title: '4K Monitor',
      description: 'A high-resolution 4K monitor for professional use.',
      price: 399.99,
      createdAt: new Date(),
    },
    {
      title: 'USB-C Hub',
      description: 'A versatile USB-C hub with multiple ports.',
      price: 49.99,
      createdAt: new Date(),
    },
    {
      title: 'Portable SSD',
      description: 'A fast and portable SSD with 1TB capacity.',
      price: 129.99,
      createdAt: new Date(),
    },
    {
      title: 'Bluetooth Speaker',
      description: 'A compact Bluetooth speaker with excellent sound quality.',
      price: 59.99,
      createdAt: new Date(),
    },
    {
      title: 'Smartwatch',
      description: 'A stylish smartwatch with fitness tracking features.',
      price: 149.99,
      createdAt: new Date(),
    },
    {
      title: 'Gaming Chair',
      description: 'An ergonomic gaming chair with lumbar support.',
      price: 249.99,
      createdAt: new Date(),
    },
    {
      title: 'Webcam',
      description: 'A high-definition webcam for video conferencing.',
      price: 79.99,
      createdAt: new Date(),
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
