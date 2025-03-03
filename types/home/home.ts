import { Category } from "@prisma/client";

export type Games={
    id: number;
    gameTitle: string;
    image: string;
    gamePrice: number;
    categories: {name:string}[];
}