import DashboardTile from "@/components/dashboard/dashboard-title";
import ManageCategoriesTable from "@/components/table/manage-categories";
import ManageGamesTable from "@/components/table/manage-games";

export default function ManageGames(){
    return(
        <div className="w-full space-y-12">
            <DashboardTile title="Gerenciar Jogos" desc="Faça as ações administrativas relacionada aos jogos por aqui"/>
            <ManageGamesTable/>
        </div>
    )
}