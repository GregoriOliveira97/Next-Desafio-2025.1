import Image from "next/image";
import Link from "next/link";

type GameCardProps={
    name:string;
    price: number;
    categories: string[];

}

export default function GameCard({name,price,categories}:GameCardProps){
    return(
       <Link href={'/'}
       className="w-40 md:w-64 flex flex-col group">
        <div className="flex flex-col text-white shadow-lg group-hover:shadow-2xl duration-200 overflow-hidden">
            <Image src={'/imgs/nioh2capa.png'} 
            alt="Capa do jogo"
            width={904}
            height={904}
            className="object-fit h-30 w-40 md:h-52 md:w-64"/>
            
        </div>

       </Link>
    )
}