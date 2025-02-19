"use client";

import Link from "next/link"
export default function EditButton({id}:{id: number}){
    return(
        <Link href={`/admin/manage/categories/edit/${id}`}>
            <button className=" bg-green-500 font-medium p-1 text-white/90 hover:underline">
                Editar
            </button>
        </Link>
    )
}

export  function DeleteButton({id}:{id: number}){
    return(
        
        <button className="bg-red-500 font-medium p-1 text-white/90 hover:underline">
            Excluir
        </button>
    )
}