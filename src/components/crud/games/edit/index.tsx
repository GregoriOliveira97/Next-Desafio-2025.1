"use client"

import Image from "next/image"
import { Product } from "../../../../../types/home/home"
import { editGame } from "../../../../../actions/admin/games/actions"
import { useState } from "react";


export default function EditGame({game}:{game:Product}){
    const [imagePreview, setImagePreview] = useState<string>(game.image);
    const updategameWithId=editGame.bind(null,game.id)
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string); // Atualiza a prévia com a nova imagem
            };
            reader.readAsDataURL(file); // Lê o arquivo como URL
        }
    };
    return(
        <div className="w-full z-2 lg:w-9/12 xl:w-7/12 2xl:w-5/12 p-4 border-2 border-gray-700 rounded-md flex flex-col gap-4
        text-white">
            <form className="flex flex-col gap-4" autoComplete="off" action={updategameWithId}>
                <div className="flex flex-col gap-1">
                    <label>Nome da Game</label>
                    <input className="bg-[#3a3a3a] border-1 p-2 rounded-md" 
                    name="edit-game-name"
                    placeholder="Nome"
                    defaultValue={game.title}
                     />
                     <label>Imagem</label>
                     <div className="flex justify-center"><Image
                        src={game.image}
                        alt="Imagem do jogo default"
                        width={240}
                        height={240}/>
                    </div>
                    <input
                    type="file"
                    accept="image/*"
                    className="bg-[#3a3a3a] border-1 p-2 rounded-md text-white"
                    name="edit-game-image"
                    onChange={(e) => handleImageChange(e)}
                     />
                    <label>Preço</label>
                    <input className="bg-[#3a3a3a] border-1 p-2 rounded-md" 
                    name="edit-game-price"
                    placeholder="Preço"
                    defaultValue={game.price}
                     />
                     <label>Categoria</label>
                        <input className="bg-[#3a3a3a] border-1 p-2 rounded-md" 
                        name="edit-game-category"
                        placeholder="Categoria"
                        defaultValue={game.category}
                     />
                     <label>Descrição</label>
                    <input className="bg-[#3a3a3a] border-1 p-2 rounded-md" 
                    name="edit-game-desc"
                    placeholder="Descrição"
                    defaultValue={game.description||''}
                     />
                </div>
                <div className="w-full flex justify-end">
                    <button className="w-full lg:w-6/12 xl:w-3/12 2xl:w-2/12 bg-[#7e57c2]
                     hover:bg-[#7e57c2]/60 rounded-md px-6 py-2">Salvar</button>

                </div>
            </form>
        </div>
    )
}