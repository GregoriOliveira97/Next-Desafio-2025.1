import { PrismaClient } from '@prisma/client';
import { title } from 'process';

const prisma = new PrismaClient();

async function main() {

  const products = [
    {
      title: 'The Witcher 3: Wild Hunt',
      description: 'Um RPG de mundo aberto focado em uma narrativa épica em um universo de fantasia deslumbrante.',
      price: 49.99,
      createdAt: new Date(),
      category: 'RPG',
      image: '/imgs/witcher3.png',
  },
  {
      title: 'Red Dead Redemption 2',
      description: 'Uma história épica de vida nos Estados Unidos durante o surgimento da era moderna.',
      price: 59.99,
      createdAt: new Date(),
      category: 'Ação-Aventura',
      image: '/imgs/rdr2.png',
  },
  {
      title: 'Dark Souls III',
      description: 'Um RPG de ação desafiador ambientado em um mundo sombrio e interconectado.',
      price: 39.99,
      createdAt: new Date(),
      category: 'Ação RPG',
      image: '/imgs/ds3.png',
  },
  {
      title: 'Cyberpunk 2077',
      description: 'Um RPG de ação e aventura em mundo aberto, ambientado no vibrante e neon mundo de Night City.',
      price: 44.99,
      createdAt: new Date(),
      category: 'RPG de Ficção Científica',
      image: '/imgs/cyberpunk2077.png',
  },
  {
      title: 'Hollow Knight',
      description: 'Um jogo Metroidvania desenhado à mão, situado em um misterioso reino subterrâneo.',
      price: 14.99,
      createdAt: new Date(),
      category: 'Indie',
      image: '/imgs/hollowknight.png',
  },
  {
      title: 'DOOM Eternal',
      description: 'Um jogo de tiro em primeira pessoa acelerado, onde você luta contra as forças do Inferno.',
      price: 39.99,
      createdAt: new Date(),
      category: 'FPS',
      image: '/imgs/doom_eternal.png',
  },
  {
      title: 'Stardew Valley',
      description: 'Um simulador de fazenda relaxante com elementos de RPG e interações encantadoras.',
      price: 19.99,
      createdAt: new Date(),
      category: 'Simulação',
      image: '/imgs/stardewvalley.png',
  },
  {
      title: 'The Legend of Zelda: Breath of the Wild',
      description: 'Explore um vasto mundo aberto neste jogo de aventura aclamado pela crítica.',
      price: 59.99,
      createdAt: new Date(),
      category: 'Aventura',
      image: '/imgs/zelda_botw.png',
  },
  {
      title: 'Sekiro: Shadows Die Twice',
      description: 'Um jogo de ação aclamado, com combates intensos de espada e visuais deslumbrantes.',
      price: 49.99,
      createdAt: new Date(),
      category: 'Ação RPG',
      image: '/imgs/sekiro.png',
  },
  {
      title: 'Minecraft',
      description: 'Um jogo sandbox infinito onde você pode construir, explorar e sobreviver em mundos imensos.',
      price: 26.99,
      createdAt: new Date(),
      category: 'Sandbox',
      image: '/imgs/minecraft.png',
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
