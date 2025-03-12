import IndividualGame from "@/components/individual-game";
import Search from "@/components/search";

export default async function Page({searchParams}: {searchParams: 
    {
        query?: string;
        page?: string;
    }
}){
    const query= searchParams?.query||''
    const currentPage= searchParams?.page||1

    return(
    <div className="flex align-center justify-center w-full  m-auto py-8 px-4 md:p-0 min-h-screen bg-[#1a1a1a] text-white">
        <Search />         
    </div>
    )
}