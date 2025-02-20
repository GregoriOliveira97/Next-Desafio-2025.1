import EditCategory from "@/components/crud/categories/edit";
import DashboardTile from "@/components/dashboard/dashboard-title";

export default function Page(){
    return(
        <div className="w-full space-y-12">
            <DashboardTile title="Editar Categoria" desc="edite a categoria por aqui"/>
            <EditCategory/>
        </div>
    )
}