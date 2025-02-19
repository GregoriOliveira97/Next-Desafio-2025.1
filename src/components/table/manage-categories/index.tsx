import Link from "next/link";
import EditButton, { DeleteButton } from "../button";

export default function ManageCategoriesTable(){
    return(
        <div className="w-full p-4 border-2 border-gray-700 rounded-md flex flex-col gap-4">
            <div className="flex  flex-wrap items-center w-full justify-between">
                <span className="text-base self-end text-white/80">
                    99 categorias encontradas
                </span>
                <Link
                href={'/admin/manage/categories'}>
                    <button className="py-2 px-6 md:w-52 border-1 border-gray-700 rounded-md text-white bg-[#7e57c2] hover:bg-[#876db4]">+ Nova Categoria</button>
                </Link>
            </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                                    Games associados
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" bg-[#2a2a2a] text-white/90 border-b border-gray-700">
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nome
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="hover:underline">Game1, Game2, Game3...</span>
                                </th>
                                <th scope="col" className="px-6 py-3 flex items-center gap-4">
                                    <EditButton id={1}/>
                                    <DeleteButton id={1}/>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    )
}