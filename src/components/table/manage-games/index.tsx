import Link from "next/link";
import EditButton, { DeleteButton, EditGameButton, ViewGameButton } from "../button";
import { Product } from "../../../../types/home/home";

export default function ManageGamesTable({games,count}:{games:Product[], count:number}){
    return(
        <div className="w-full z-2 p-4 border-2 border-gray-700 rounded-md flex flex-col gap-4">
            <div className="flex  flex-wrap items-center w-full justify-between">
                <span className="text-base self-end text-white/80">
                    99 categorias encontradas
                </span>
                <Link
                href={'/admin/manage/games/create'}>
                    <button className="py-2 px-6 md:w-52 border-1 border-gray-700 rounded-md text-white bg-[#7e57c2]
                     hover:bg-[#876db4]">+ Novo Jogo</button>
                </Link>
            </div>
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-base text-white text-left">
                        <thead className="uppercase bg-[#3a3a3a]">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nome
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Preço
                                </th>                                
                                <th scope="col" className="px-6 py-3">
                                    Categoria
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {games.map((game,index)=>(
                                <tr key={index} className=" bg-[#2a2a2a] text-white/90 border-b border-gray-700">
                                <th scope="col" className="px-6 py-3">
                                    {game.id}
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    {game.title}
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="hover:underline">R${game.price}</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="hover:underline">{game.category}</span>
                                </th>
                                <th scope="col" className="px-6 py-3 flex items-center gap-4">
                                    <ViewGameButton id={game.id}/>
                                    <EditGameButton id={game.id}/>
                                    <DeleteButton id={game.id}/>
                                </th>
                            </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
        </div>
    )
}