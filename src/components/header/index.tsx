"use client";
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MenuIcon, ShoppingCart, X } from "lucide-react";


const links = [
    {href: '/', label: 'Home'},
    {href: '/games', label: 'Games'},
    {href: '/contact', label: 'Contato'},
]

export default function Header(){
    const [isSideOpen, setIsSideOpen] = useState(false)
    const toggleSide =  () => setIsSideOpen(!isSideOpen)

    return(
        <header className="bg-zinc-800 sticky gap-4 top-0 z-20 mx-auto w-full px-6 md:p-0 ">
            <div className="flex justify-between text-sm text-white gap-6 items-center md:text-base" >
               {/*depois tentar fazer a logo nao mudar de lugar ao abrir sidebar*/}
                <Link href='/' className="flex  items-center">
                    <Image
                    src={'/logo/SkilloLogoSemfundo.png'} 
                    alt="Logo do site"
                    width={904}
                    height={904}
                    className="object-fit h-20 w-24 md:h-32 md:w-48"
                />
                 </Link>
                <div className="hidden gap-6 md:flex">
                    <div className="flex gap-4">
                        {links.map((link,index) =>
                            <Link href={link.href} key={index}>
                                <span>{link.label}</span>
                            </Link> 
                        )}
                        <button className="bg-[#7e57c2] px-2 rounded-sm ">Login</button>
                    </div>
                    <div className="flex gap-4">
                            <button className="bg-[#7e57c2] px-2 py-2 rounded-sm ">
                                <ShoppingCart/>
                            </button>
                            <Link className="text-[#7e57c2]" href="">Gerenciamento de produtos</Link>
                    </div>
               </div>

                {isSideOpen && (
                    <div className="md:hidden flex flex-col text-center items-center gap-4 mt-8 pb-2 w-32">
                                                {links.map((link,index) =>
                            <Link href={link.href} key={index}>
                                <span>{link.label}</span>
                            </Link> 
                        )}                   
                        <Link href={'/login'}>
                            <button className="bg-[#7e57c2] px-2 rounded-sm ">Login</button>
                        </Link>    
                        <Link  href={'/management'}>
                            <span className="text-[#7e57c2]">Gerenciamento de Produtos</span>
                        </Link>
       
                        
                        
                    </div>
                )}
                                <nav className="flex justify-end ">
                    <div className="flex md:hidden">
                        <button onClick={toggleSide}>
                            {isSideOpen?
                                <X/>
                                :
                                <MenuIcon />
                            }
                        
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}