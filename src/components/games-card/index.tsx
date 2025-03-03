import Image from "next/image";
import Link from "next/link";
import { Games } from "../../../types/home/home";

type GameCardProps={
    post: Games
    buttonOff?: boolean

}

export default function GameCard({post,buttonOff=false}:GameCardProps){
    
    return(
        <div className="flex flex-col gap-1 w-36 md:w-44 lg:w-56 xl:w-80 text-white shadow-lg group-hover:shadow-2xl duration-200 overflow-hidden">
            <Image src={post.image} 
            alt="Capa do jogo"
            width={904}
            height={904}
            className="object-fit h-30 w-full md:h-42"/>
            <span className="text-sm px-2 md:text-base xl:text-2xl">{post.gameTitle}</span>
            {post.categories&&post.categories.length>0 &&(
            <div className="flex gap-2 px-2">
                {post.categories.map((category,index) =>
                    <span className="bg-[#7e57c2] p-1 rounded-sm text-[12px] md:text-base xl:text-2xl" 
                    key={index}>{category.name}</span>
                )}
            </div>)}
            <span className="text-[12px] px-2 md:text-base xl:text-2xl">R${post.gamePrice}</span>
            <div className="flex justify-center items-center p-1">
            {!buttonOff && (
                <Link href={`/game/${post.id}`} className="bg-[#7e57c2] p-1 text-[12px] rounded-md w-fit md:text-base xl:text-2xl">
                    Ver mais
                </Link>
             )}
            </div>
        </div>


    )
}