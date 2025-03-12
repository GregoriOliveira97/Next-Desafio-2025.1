import IndividualGame from "@/components/individual-game";
import fetchGameById from "../../../../../actions/individualGame/actions";

export default async function Page({params}: {params: {id: string}}){
    const id= parseInt(params.id, 10);
    const game = await fetchGameById(id);
    return(
        <div className="w-full  m-auto py-8 px-4 md:p-0 min-h-screen bg-[#1a1a1a] text-white">
            <IndividualGame game={game}/>
        </div>
    )
}