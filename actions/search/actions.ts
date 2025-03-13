import prisma from "@/lib/db";

const itemsPerPage=6;

export async function fetchFilteredGames(query: string, currentPage: number) {
    const offset=(currentPage-1)*itemsPerPage

    const games=await prisma.product.findMany({
        where:{
            OR:[{title:{contains: query, mode:"insensitive"}}]
        },

        orderBy:{
            title:"asc"
        },
        take:itemsPerPage,
        skip: offset
    })

    const count= await prisma.product.count ({
        where:{
            OR:[{title:{contains: query, mode: "insensitive"}}]
        }, 
    });
    const totalPages = Math.ceil(count/itemsPerPage)
    return{games,count,totalPages};

}