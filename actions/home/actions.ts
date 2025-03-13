"use server"

import prisma from "@/lib/db"
import { off } from "process";

export default async function getProducts(page:number=1) {
    const offset = (page - 1) * 6;
    const products= await prisma.product.findMany({
        
     take: 6,
     skip:offset,
     orderBy:{
        id:"asc"
     }
    });
    const totalCount = await prisma.product.count(); // Total de produtos no banco
    const totalPages = Math.ceil(totalCount / 6);
    return {products,totalPages};
}