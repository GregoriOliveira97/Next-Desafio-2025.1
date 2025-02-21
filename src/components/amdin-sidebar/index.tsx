"use client";
import { ChartBarBig, Gamepad2, HomeIcon, Icon, LayoutDashboard, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react"


const LinksSidebar=[
    {href:'/admin', label: 'Dashboard', icon: LayoutDashboard},
    {href:'/admin/manage/games', label: 'Games', icon: Gamepad2},
    {href:'/admin/manage/categories', label: 'Categorias', icon: ChartBarBig},
    {href:'/', label: 'Página Inicial', icon: HomeIcon}
]

export default function AdminSidebar(){
    const [isAdminSidebarOpen,setIsAdminSideBarOpen] = useState(false)
    const toggleAdminSidebar = ()=> setIsAdminSideBarOpen(!isAdminSidebarOpen)

    return(
        <div>
             <div className={`sm:hidden bg-[#7e57b7] flex flex-wrap items-center justify-between px-3 py-4
             ${isAdminSidebarOpen? 'hidden':''}`}>
                <div className="flex items-center gap-2 cursor-default">
                    <Image
                    src={'/logo/SkilloLogoSemfundo.png'}
                    alt="Logo do Site"
                    width={72}
                    height={72}
                    className="w-16 h-16 object-fit"/>
                    <span className="text-2xl text-white font-semibold">SkilloMentality</span>
                </div>
                <Menu
                className="w-8 h-8 text-white"
                onClick={toggleAdminSidebar}/>
            </div>
            <aside
                className={`fixed top-0 left-0 z-100 w-full sm:w-72 h-screen transition-transform 
                ${isAdminSidebarOpen? '':'-translate-x-full'}
                sm:translate-x-0`}>
                <div className="bg-[#7e57b7] h-full py-4 px-3 overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 cursor-default">
                        <Image
                            src={'/logo/SkilloLogoSemfundo.png'}
                            alt="Logo do Site"
                            width={72}
                            height={72}
                            className="w-16 h-16 object-fit"/>
                            <span className="text-2xl text-white font-semibold">SkilloMentality</span>
                        </div>
                        <X
                            className="w-12 h-12 text-white sm:hidden"
                            onClick={toggleAdminSidebar}
                        />
                    </div>
                    <div className="h-[1px] w-full bg-black/20 my-4" />
                    <ul className="space-y-8">
                        {LinksSidebar.map(({href,label,icon:Icon},index)=>(
                            <li key={index}>
                                <Link href={href}
                                onClick={toggleAdminSidebar}
                                className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-white/20">
                                    <Icon className="w-8 h-8 text-white"/>
                                    <span className="text-white">
                                        {label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    )
}