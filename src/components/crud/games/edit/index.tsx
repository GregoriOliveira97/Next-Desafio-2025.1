import Image from "next/image"

const gameName =  'Game name default'
const gamePrice = 'Game price default'
const gameImg = 'Devera ser imagem aqui'
const gameDesc = 'Game desc default'

export default function EditGame(){
    return(
        <div className="w-full z-2 lg:w-9/12 xl:w-7/12 2xl:w-5/12 p-4 border-2 border-gray-700 rounded-md flex flex-col gap-4
        text-white">
            <form className="flex flex-col gap-4" autoComplete="off">
                <div className="flex flex-col gap-1">
                    <label>Nome da Game</label>
                    <input className="bg-[#3a3a3a] border-1 p-2 rounded-md" 
                    name="edit-game-name"
                    placeholder="Nome"
                    defaultValue={gameName}
                     />
                     <label>Imagem</label>
                     <div className="flex justify-center"><Image
                        src={'/imgs/nioh2capa.png'}
                        alt="Imagem do jogo default"
                        width={240}
                        height={240}/>
                    </div>
                    <label>Preço</label>
                    <input className="bg-[#3a3a3a] border-1 p-2 rounded-md" 
                    name="edit-game-price"
                    placeholder="Preço"
                    defaultValue={gamePrice}
                     />
                     <label>Descrição</label>
                    <input className="bg-[#3a3a3a] border-1 p-2 rounded-md" 
                    name="edit-game-price"
                    placeholder="Descrição"
                    defaultValue={gameDesc}
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