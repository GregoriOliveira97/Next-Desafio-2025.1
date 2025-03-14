
import DashboardTile from "@/components/dashboard/dashboard-title";
import ManageGamesTable from "@/components/table/manage-games";
import { fetchGames } from "../../../../../actions/admin/games/actions";

export default async function ManageGames(){
    const {games,count}= await fetchGames()
    return(
        <div className="w-full space-y-12">
            <DashboardTile title="Gerenciar Jogos" desc="Faça as ações administrativas relacionada aos jogos por aqui"/>
            <ManageGamesTable games={games} count={count}/>
        </div>
    )
}