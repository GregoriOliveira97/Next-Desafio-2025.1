import Image from "next/image";
import Title from "../title";

export default function HeroSection(){
    return(
        <div className="bg-[#121212] text-white w-full flex flex-col items-center gap-8">
            <div className="bg-[#2a2a2a] text-white w-full flex flex-col items-center gap-6 p-4" >
                <Title title="Descubra novos mundos"/>
                <h2>Os melhores jogos pelos melhores preços, pra você sempre estar com as Skills em dia!</h2>
                <button className="bg-[#7e57c2] text-white rounded-xl px-4 py-2">Ver ofertas</button>
            </div>
            <div>
                <Title title="Alguns jogos que você vai encontrar por aqui:"/>
                <div className="grid grid-cols-2 md:grid-cols-3 ">
                    <Image
                    src={'/logo/SkilloLogoSemfundo.png'} 
                    alt="Logo do site"
                    width={904}
                    height={904}
                    className="object-fit h-20 w-24 md:h-32 md:w-48"
                />
                </div>
            </div>
        </div>
    )
}