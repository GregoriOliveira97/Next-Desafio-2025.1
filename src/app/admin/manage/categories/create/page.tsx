import CreateCategory from "@/components/crud/categories/create";
import DashboardTile from "@/components/dashboard/dashboard-title";

export default function Page(){
    return(
        <div className="w-full space-y-12">
            <DashboardTile title="Criar Categoria" desc="criar categoria por aqui"/>
            <CreateCategory/>
        </div>
    )
}