import CreateCategory from "@/components/crud/categories/create";
import CreateGame from "@/components/crud/games/create";
import DashboardTile from "@/components/dashboard/dashboard-title";

export default function Page(){
    return(
        <div className="w-full min-h-screen space-y-12">
            <DashboardTile title="Criar game" desc="criar game por aqui"/>
            <CreateGame/>
        </div>
    )
}