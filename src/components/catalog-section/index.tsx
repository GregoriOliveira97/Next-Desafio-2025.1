"use server"

import GameCard from "@/components/games-card";
import Search from "@/components/search";
import Link from "next/link";
import {  Product } from "../../../types/home/home";
import getProducts from "../../../actions/home/actions";
import SecondarySearch from "@/components/search/secondary-search";
import Pagination from "@/components/pagination";

type GamesProps={
    currentPage:number;
    posts:Product[];
    totalPagesN:number;
}

export default async function Catalog({posts,totalPagesN}:GamesProps){

    return(
        <div className="flex flex-col items-center justify-center p-4 gap-4 bg-[#121212] h-full w-full">
            <SecondarySearch count={6} />

                <div className="grid gap-4 grid-flow-row grid-cols-2 md:grid-flow-col grid-rows-2 ">
                   {posts.map((post,index)=>
                        <Link href={`/game/${post.id}`}>
                            <GameCard key={index} post={post} buttonOff={true}/>
                        </Link>)
                    }
                </div>
                {totalPagesN>1&&(
                        <Pagination totalPages={totalPagesN}/>
                    )}
        </div>
        
    )
}