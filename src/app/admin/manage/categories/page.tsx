import DashboardTile from "@/components/dashboard/dashboard-title";
import ManageCategoriesTable from "@/components/table/manage-categories";

export default function ManageCategories(){
    return(
        <div className="w-full space-y-12">
            <DashboardTile title="Gerenciar Categorias" desc="Faça as ações administrativas relacionada a categorias por aqui"/>
            <ManageCategoriesTable/>
        </div>
    )
}