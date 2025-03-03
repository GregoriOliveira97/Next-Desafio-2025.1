"use server"

import prisma from "@/lib/db"

export default async function getGames() {
    const games= await prisma.games.findMany({
        where:{
            published: true
        },
        select: {
            id:true,
            gameTitle:true,
            image:true,
            gamePrice:true,
            categories:true
        }, take: 6
    });
    return games.map((game) => ({
        ...game,
        categories: game.categories.map((cat) => cat.name),
      }));
    console.log(games);
    return games;
}