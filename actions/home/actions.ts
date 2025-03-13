"use server"

import prisma from "@/lib/db"

export default async function getProducts() {
    const products= await prisma.product.findMany({
     take: 6
    });
    const totalCount = await prisma.product.count(); // Total de produtos no banco
    const totalPages = Math.ceil(totalCount / 6);
    return products;
}