'use client'

import DashboardPage from "@/components/dashboard/dashboard-page"
import DashboardTile from "@/components/dashboard/dashboard-title"

export default function AdminPage(){

    return(
        <div className="w-full space-y-12 ">
            <DashboardTile title="Página de Dashboard" desc="Faça as ações administrativas por aqui"/>
            <DashboardPage/>
            
        </div>
    )
}