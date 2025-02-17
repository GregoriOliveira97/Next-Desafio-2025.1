import Image from "next/image";
import Link from "next/link";

type GameCardProps={
    name:string;
    price?: number;
    categories?: string[];

}

export default function GameCard({name,price,categories}:GameCardProps){
    return(
       <Link href={'/'}
       className="w-40 md:w-64 flex flex-col group">
        <div className="flex flex-col gap-1 text-white shadow-lg group-hover:shadow-2xl duration-200 overflow-hidden">
            <Image src={'/imgs/nioh2capa.png'} 
            alt="Capa do jogo"
            width={904}
            height={904}
            className="object-fit h-30 w-40 md:h-52 md:w-64"/>
            <span className="text-sm px-2">{name}</span>
            {categories&&categories.length>0 &&(
            <div className="flex gap-2 px-2">
                {categories.map((category,index) =>
                    <span className="bg-[#7e57c2] p-1 rounded-sm text-[12px]" key={index}>{category}</span>
                )}
            </div>)}
            <span className="text-[12px] px-2">R${price}</span>

        </div>

       </Link>
    )
}