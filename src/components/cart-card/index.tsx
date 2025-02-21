import Image from "next/image";
import Link from "next/link";

type GameCardProps={
    name:string;
    price: number;
}

export default function CartCard({name,price}:GameCardProps){
    return(
    <div className="flex w-full p-4 ">
        <section className="flex w-full md:w-8/12 justify-between flex-row h-38 gap-1 p-4 text-white shadow-lg bg-[#333333]">
            <div className="flex ">
                <Image src={'/imgs/nioh2capa.png'} 
                alt="Capa do jogo"
                width={904}
                height={904}
                className="object-fit w-32 h-32"/>
                <div className="flex flex-col my-4 gap-4">
                    <span className=" px-2 text-base xl:text-2xl">{name}</span>
                    <span className="text-[#7e57c2] px-2 text-base xl:text-2xl">R${price}</span>
                </div>
            </div>
            <button className="rounded-md p-2 self-center text-white/80 bg-[#666666]/60 h-fit">Remover</button>
        </section>
    </div>

    )
}