import { Settings } from "lucide-react";
import Link from "next/link";

type DashboardCardProps={
    title:string;
    href:string;
    desc:string;
}
export default function DashboardCards({title,href,desc}:DashboardCardProps){
    return(
        <Link
        href={href}
        className="hover:scale-[1.02] transition-all duration-200 w-11/12 sm:w-72 sm:min-h-[96px] bg-gradient-to-r
         from-[#7e57c2] to-[#4B0082] rounded-lg p-4 font-semibold">
            <div className="flex flex-col justify-center ">
                <div className="flex justify-between text-white">
                    <h3 className="text-xl">{title}</h3>
                    <Settings/>
                </div>
                <span className="text-white/50 text">{desc}</span>

            </div>
        </Link>
    )
}