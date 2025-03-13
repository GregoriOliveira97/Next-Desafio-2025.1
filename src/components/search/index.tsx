"use client"

import { Search as SearchIcon } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import SecondarySearch from "./secondary-search";
import Link from "next/link";
import GameCard from "../games-card/search-card";
import { Product } from "../../../types/home/home";
import Pagination from "../pagination";



export default function SearchPage({games, count, totalPages}:{games: Product[], count:number, totalPages:number}){
    const searchParams= useSearchParams()

    const router= useRouter()
    const [searchTerm, setSearchTerm] = useState<string|''>(searchParams.get('query') || '')

    const handleSearch=(query:string)=>{
        if(!query){
            return 
        }
        const params= new URLSearchParams();
        params.set('query', query)
        router.push(`/search/?${params.toString()}`)
    }

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        handleSearch(searchTerm)
    }

    return(
     <div className="flex  gap-2 sm:mx-12 items-center align-center flex-col w-full">
        <SecondarySearch count={count}/>
        {count===0? (
            <div className="w-full flex flex-col items-center">
                <span className="text-base text-white font-extrabold">
                    Nenhum jogo encontrado
                </span>
                <span className="text-sm text-white/70">
                    tente outra coisa, ou explore <Link href={"/catalog"}/>
                </span>
            </div>
        ):(
            <div className="w-full flex flex-col flex-wrap justify-center items-center gap-4">
                {games.map((game,index)=>(
                    <Link className="w-full" href={`/game/${index+11}`}>
                        <GameCard key={index} post={game}/>
                    </Link>

                ))}
                {totalPages>1 &&(
                    <Pagination totalPages={totalPages}/>
                )}
            </div>
        )}
     </div>
    )
}