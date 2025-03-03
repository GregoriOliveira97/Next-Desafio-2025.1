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
            categories:{
                select:{
                    name:true,
                }
            }
        }, take: 6
    });
    
    return games;
}