import { Search as SearchIcon } from "lucide-react"
type SearchProps ={
    count: number
}
export default function Search({count}:SearchProps){
    return(
        <form className="flex flex-col w-full lg:w-10/12 gap-4"
        id="search"
        autoComplete="off">
            <div className="bg-[#2a2a2a] flex flex-col items-center justify-center p-3 gap-4">
                <div className="relative flex items-center w-full gap-4">
                    <SearchIcon className="w-8 h-8 absolute text-[#7e57c2] p-1 rounded-sm"/>
                    <input 
                    type="text"
                    id="search-input"
                    name="search-input-name"
                    className="flex text-white bg-[#444444]/80 w-full px-12 rounded-xl py-3 transition-all duration-200 transition-colors-black "
                    placeholder="Busque o jogo desejado..."
                     />
                </div>
                <span className="text-white/70 text-sm">Total de {count} jogos encontrados.</span>
            </div>

        </form>
    )
}