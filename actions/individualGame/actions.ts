"use server"

import prisma from "@/lib/db";

export default async function fetchGameById(id:number) {
    const game = await prisma.product.findUnique({
        where: {id},
        select:{
            id: true,
            title: true,
            description: true,
            price: true,
            category: true,
            image: true,
        }
        
    })
    return game;
}