"use server"

import GameCard from "@/components/games-card";
import Search from "@/components/search";
import Link from "next/link";
import {  Product } from "../../../../types/home/home";
import getProducts from "../../../../actions/home/actions";

type GamesProps={
    posts: Product[]
}

export default async function Games({posts}:GamesProps){
    const count=1;
    posts= await getProducts()

    
    return(
        <div className="flex flex-col items-center justify-center p-4 gap-4 bg-[#121212] h-full w-full">
            <Search />
            {count == 0 ?(
                <div className="flex flex-col gap-4">
                    <span className="text-white/70 text-sm text-center lg:text-base font-extrabold">
                        Nenhum jogo encontrado
                    </span>
                    <span className="text-white/70 text-base text-center lg:text-sm">
                        Tente outra coisa ou navegue em <Link href={'/games'}>Games</Link>
                    </span>
                </div>
            ):(
                <div className="grid gap-4 grid-flow-row grid-cols-2 md:grid-flow-col grid-rows-2 ">
                   {posts.map((post,index)=>
                        <Link href={`/game/${post.id}`}>
                            <GameCard key={index} post={post} buttonOff={true}/>
                        </Link>)
                    }
                </div>
            )}
            {/*Paginação falta aqui*/ }
        </div>
        
    )
}