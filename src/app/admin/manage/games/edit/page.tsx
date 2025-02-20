import EditGame from "@/components/crud/games/edit";
import DashboardTile from "@/components/dashboard/dashboard-title";

export default function Page(){
    return(
        <div className="w-full space-y-12">
            <DashboardTile title="Editar Game" desc="edite o game por aqui"/>
            <EditGame/>
        </div>
    )
}