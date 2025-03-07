import { PrismaClient } from '@prisma/client';
import { title } from 'process';

const prisma = new PrismaClient();

async function main() {

  const products = [
    {
      title: 'Nioh2- Complete Edition',
      description: 'A durable mechanical keyboard with RGB lighting.',
      price: 89.99,
      createdAt: new Date(),
      category: 'RPG',
      image:'/imgs/nioh2capa.png',
    },
    {
      title: 'Nioh2- Complete Edition',
      description: 'A durable mechanical keyboard with RGB lighting.',
      price: 89.99,
      createdAt: new Date(),
      category: 'RPG',
      image:'/imgs/nioh2capa.png',
    },
    {
      title: 'Nioh2- Complete Edition',
      description: 'A durable mechanical keyboard with RGB lighting.',
      price: 89.99,
      createdAt: new Date(),
      category: 'RPG',
      image:'/imgs/nioh2capa.png',
    },
    {
      title: 'Nioh2- Complete Edition',
      description: 'A durable mechanical keyboard with RGB lighting.',
      price: 89.99,
      createdAt: new Date(),
      category: 'RPG',
      image:'/imgs/nioh2capa.png',
    },
    {
      title: 'Nioh2- Complete Edition',
      description: 'A durable mechanical keyboard with RGB lighting.',
      price: 89.99,
      createdAt: new Date(),
      category: 'RPG',
      image:'/imgs/nioh2capa.png',
    },
    {
      title: 'Nioh2- Complete Edition',
      description: 'A durable mechanical keyboard with RGB lighting.',
      price: 89.99,
      createdAt: new Date(),
      category: 'RPG',
      image:'/imgs/nioh2capa.png',
    },
    {
      title: 'Nioh2- Complete Edition',
      description: 'A durable mechanical keyboard with RGB lighting.',
      price: 89.99,
      createdAt: new Date(),
      category: 'RPG',
      image:'/imgs/nioh2capa.png',
    },
    {
      title: 'Nioh2- Complete Edition',
      description: 'A durable mechanical keyboard with RGB lighting.',
      price: 89.99,
      createdAt: new Date(),
      category: 'RPG',
      image:'/imgs/nioh2capa.png',
    },
    {
      title: 'Nioh2- Complete Edition',
      description: 'A durable mechanical keyboard with RGB lighting.',
      price: 89.99,
      createdAt: new Date(),
      category: 'RPG',
      image:'/imgs/nioh2capa.png',
    },
    {
      title: 'Nioh2- Complete Edition',
      description: 'A durable mechanical keyboard with RGB lighting.',
      price: 89.99,
      createdAt: new Date(),
      category: 'RPG',
      image:'/imgs/nioh2capa.png',
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
