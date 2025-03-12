"use client"

import { Search as SearchIcon } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react";

export default function Search(){
    
    const searchParams= useSearchParams();
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
        <form onSubmit={handleSubmit} className="flex flex-col w-full lg:w-10/12 gap-4"
        id="search"
        autoComplete="off">
            <div className="bg-[#2a2a2a] flex flex-col items-center justify-center p-3 gap-4 md:text-base xl:text-2xl">
                <div className="relative flex items-center w-full gap-4">
                    <SearchIcon className="w-8 h-8 absolute text-[#7e57c2] p-1 rounded-sm"/>
                    <input 
                    type="text"
                    id="search-input"
                    name="search-input-name"
                    className="flex text-white bg-[#444444]/80 w-full px-12 rounded-xl py-3 transition-all duration-200 transition-colors-black "
                    placeholder="Busque o jogo desejado..."
                    onChange={(e)=>setSearchTerm(e.target.value)}
                     />
                </div>

            </div>

        </form>
    )
}