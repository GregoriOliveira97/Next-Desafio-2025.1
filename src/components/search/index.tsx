"use client"

import { Search as SearchIcon } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react";
import SecondarySearch from "./secondary-search";
import Link from "next/link";
import GameCard from "../games-card";



export default function SearchPage(){
    const count=0;

    return(
     <div className="w-full">
        {count!=0? (
            <div className="w-full flex flex-col">
                <span className="text-base text-white font-extrabold">
                    Nenhum jogo encontrado
                </span>
                <span className="text-sm text-white/70">
                    tente outra coisa, ou explore <Link href={"/catalog"}/>
                </span>
            </div>
        ):(
            <div className="w-full flex flex-col gap-4">
                {/*<GameCard />*/}
            </div>
        )}
        <SecondarySearch count={count}/>
     </div>
    )
}