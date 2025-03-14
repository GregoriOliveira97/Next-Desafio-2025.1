import Image from "next/image";
import { IndividualGame } from "../../../../types/data";

export default function View({game}:{game:IndividualGame}){
    return(
        <div className="w-full lg:w-9/12 xl:w-7/12 2xl:w-5/12 p-4 border-2 border-gray-700 rounded-md 
                text-white bg-[#1a1a1a]">
            <div className="flex flex-col gap-6">
                {/* Imagem do Jogo */}
                <div className="flex justify-center">
                    <Image
                        src={game.image}
                        alt={`Capa do Jogo`}
                        width={400}
                        height={400}
                        className="rounded-lg"
                    />
                </div>

                {/* Detalhes do Jogo */}
                <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-400">Nome do Jogo</label>
                        <div className="bg-[#3a3a3a] p-2 rounded-md">{game.title}</div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-gray-400">Categorias</label>
                        <div className="bg-[#3a3a3a] p-2 rounded-md">
                            <span>{game.category}</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-gray-400">Preço</label>
                        <div className="bg-[#3a3a3a] p-2 rounded-md"><span>{game.price}</span></div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-gray-400">Descrição</label>
                        <div className="bg-[#3a3a3a] p-2 rounded-md min-h-[100px]">
                            <span>{game.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}