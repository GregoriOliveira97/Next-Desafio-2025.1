import Image from "next/image"
import Link from "next/link"


export default function Footer(){
    return(
        <div className="bg-zinc-800 flex flex-col text-gray-300 text-[12px] w-full py-8 min-h-[250px] gap-12 items-center justify-center md:text-base">
            <div className="flex justify-between w-full px-8">
                <div className="flex flex-col gap-4">
                    <Image
                        src={'/logo/SkilloLogoSemfundo.png'} 
                        alt="Logo do site"
                        width={904}
                        height={904}
                        className="object-fit h-20 w-24 md:h-32 md:w-48"
                    />
                    <span>Sua loja de jogos digitais</span>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-gray-100">Contato</h2>
                    <span>@discord.gg/skillomentality</span>
                    <span>skillo@mentality.com.br</span>
                    <span>+55 32 0011 2233</span>
                </div>
            </div>
            <span>© 2025 GameStore. Todos os direitos reservados.</span>
        </div>
    )
}