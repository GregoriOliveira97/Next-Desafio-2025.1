import Image from "next/image";
import Link from "next/link";
import { Product} from "../../../../types/home/home";

type GameCardProps={
    post: Product
    buttonOff?: boolean

} 

export default async function GameCard({post,buttonOff=true}:GameCardProps){
    
    return(
        <div className="flex flex-col sm:flex-row w-fit sm:w-full p-2 gap-1 bg-[#333333] items-center justify-start
         text-white shadow-lg group-hover:shadow-2xl duration-200 overflow-hidden">
            <Image src={post.image|| "/imgs/nioh2capa.png"}
            alt="Capa do jogo"
            width={904}
            height={904}
            className="object-fit h-80 w-80 sm:w-32 sm:h-32 "/>
            <div className="flex w-full flex-col gap-2">
                <span className="text-sm px-2 w-full md:text-base xl:text-2xl">{post.title}</span>
                <div className="flex gap-2 px-2">
                        <span className="bg-[#7e57c2] p-1 rounded-sm text-[12px] md:text-base xl:text-2xl" 
                        >{post.category}</span>
                </div>
                <span className="text-[12px] px-2 md:text-base xl:text-2xl">R${post.price}</span>
                <div className="flex justify-center items-center p-1">
                {!buttonOff && (
                    <Link href={`/game/${post.id}`} className="bg-[#7e57c2] p-1 text-[12px] rounded-md w-fit md:text-base xl:text-2xl">
                        Ver mais
                    </Link>
                    )}
                </div>
            </div>
            
        </div>


    )
}