import DashboardCards from "../dashboard-card";

export default function DashboardPage(){
return(
    <div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 w-full">
            <DashboardCards title="Games" desc="Gerenciar" href="/admin/manage/games"/>
            <DashboardCards title="Categorias" desc="Gerenciar" href="/admin/manage/categories"/>


        </div>
    </div>
)
}