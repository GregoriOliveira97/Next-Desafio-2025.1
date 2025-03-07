"use server"

import prisma from "@/lib/db"

export default async function getProducts() {
    const products= await prisma.product.findMany({
        select: {
            id:true,
            title:true,
            price:true,
            image:true,
            category:true,
        }, take: 6
    });
    return products;
}