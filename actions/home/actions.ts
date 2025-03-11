"use server"

import prisma from "@/lib/db"

export default async function getProducts() {
    const products= await prisma.product.findMany({
     take: 6
    });
    return products;
}