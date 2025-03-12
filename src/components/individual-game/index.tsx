import Image from "next/image";
import Title from "../title";
import { IndividualGame as IndGame } from "../../../types/data";


export default function IndividualGame({game}: {game:IndGame}){
    return(
        <div className="flex flex-col items-center text-center ">
            <div className="w-full flex flex-col md:flex-row gap-4 p-4">
                <section className="p-4 w-full md:w-8/12 flex flex-col gap-4 items-center">
                    <div className="flex relative w-full aspect-video max-w-2xl flex-col">
                        <Image
                            src={game?.image||'/imgs/nioh2capa.png'}
                            alt="Capa do Jogo"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-2 text-center">
                        <h2>Gênero:</h2>
                        <div className="flex gap-2 text-base">
                            <span className="w-fit px-4 py-1 rounded-md bg-purple-600 text-white" >{game?.category}</span>
 
                        </div>
                    </div>
                </section>
                <section className="p-4">
                    <div className="flex flex-col gap-4">
                        <div>
                            <Title title={game?.title}
                            />
                        </div> 
                        <div className="flex flex-col gap-2 p-2">
                            <span className="text-xl text-purple-400">
                            R${game?.price}
                            </span>
                            <button className="px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                            Adicionar ao Carrinho
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <section className="w-full max-w-[1400px] mx-auto p-6">
                <div className="bg-[#3A3A3A] rounded-lg p-6">
                    <Title title="Descrição"/>
                    <div className="max-h-[300px] overflow-y-auto text-base text-gray-300">
                    <p >{game?.description}</p>
                    </div>
                </div>
            </section>
        </div>
    )
    
}