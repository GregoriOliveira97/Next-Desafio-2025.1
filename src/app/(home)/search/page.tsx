import IndividualGame from "@/components/individual-game";
import SearchPage from "@/components/search";
import Search from "@/components/search";
import { fetchFilteredGames } from "../../../../actions/search/actions";

export default async function Page({searchParams}: {searchParams: 
    {
        query?: string;
        page?: string;
    }
}){
    const query= searchParams?.query||''
    const currentPage= Number(searchParams?.page)||1

    const {games, count} = await fetchFilteredGames(query,currentPage)

    return(
    <div className="flex align-center justify-center w-full  m-auto py-8 px-4 md:p-0 min-h-screen bg-[#222222] text-white">
        <SearchPage count={count} games={games} />         
    </div>
    )
}