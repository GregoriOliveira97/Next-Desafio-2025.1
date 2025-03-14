"use server"
import fs from "fs";
import prisma from "@/lib/db"
import path from "path";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


export async function fetchGames() {
    const games= await prisma.product.findMany({
         orderBy:{
            id: "asc"
         },
    });
    const count= await prisma.product.count()
    return{games,count}

}

export async function deleteGame(id:number) {
    await prisma.product.delete({
        where:{id}
    })
    revalidatePath("/admin/manage/games")
}
export async function fetchGamebyId(id:number) {
    const game=await prisma.product.findUnique({
        where:{id},
        select:{
            id:true,
            title:true,
            price:true,
            category:true,
            description:true,
            image:true
        },
    })
    if (!game) {
        throw new Error("Jogo não encontrado.");
    }
    return game
}


export async function createGame(formData: FormData) {
    const title = formData.get("create-game-name") as string;
    const price = Number(formData.get("create-game-price") as string);
    const category = formData.get("create-game-category") as string;
    const description = formData.get("create-game-desc") as string;
    const file = formData.get("create-game-image") as File;
    let image = "";

    if (file) {
        const uploadsDir = path.join(process.cwd(), "public/imgs");
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
        }

        image = `/imgs/${file.name}`;
        const buffer = Buffer.from(await file.arrayBuffer());
        fs.writeFileSync(path.join(uploadsDir, file.name), buffer); 
    }

    await prisma.product.create({
        data:{
            title,
            price,
            category,
            description,
            image
        }
    })

redirect("/admin/manage/games")

}

export async function editGame(id:number,formData:FormData) {
    const title = formData.get("edit-game-name") as string;
    const price = Number(formData.get("edit-game-price") as string);
    const category = formData.get("edit-game-category") as string;
    const description = formData.get("edit-game-desc") as string;
    const file = formData.get("edit-game-image") as File;
    let image = "";
    if (file) {
        const uploadsDir = path.join(process.cwd(), "public/imgs");
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
        }

        image = `/imgs/${file.name}`;
        const buffer = Buffer.from(await file.arrayBuffer());
        fs.writeFileSync(path.join(uploadsDir, file.name), buffer); 
    }

    await prisma.product.update({
        where:{id},
        data:{
            title,
            price,
            category,
            description,
            image
        }
    })
    redirect("/admin/manage/games")

}