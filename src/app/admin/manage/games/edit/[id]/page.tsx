import EditGame from "@/components/crud/games/edit";
import DashboardTile from "@/components/dashboard/dashboard-title";
import { fetchGamebyId } from "../../../../../../../actions/admin/games/actions";

export default async function Page(
    {params}:
    {
        params:{id:number}
    
    }
){
    const id= Number(params.id)
    const game= await fetchGamebyId(id);
    return(
        <div className="w-full space-y-12">
            <DashboardTile title="Editar Game" desc="edite o game por aqui"/>
            <EditGame game={game}/>
        </div>
    )
}