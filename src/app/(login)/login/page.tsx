import Title from "@/components/title";
import Link from "next/link";

export default function Page(){
    return(
        <div className="flex justify-center items-center text-sm md:text-base xl:text-xl  text-white bg-[#1a1a1a] min-h-screen">
            <div className="p-4 rounded-md w-8/12 flex items-center  flex-col space-y-4 md:space-y-8 bg-[#2a2a2a]">
                <div className="w-full flex justify-center">
                    <Title title="Login"/>
                </div>
                <div className="md:w-6/12 w-full flex flex-col justify-center gap-2">         
                    <label>Email:</label>
                    <input type="text"
                    placeholder="email..." 
                    className="w-full rounded-md bg-[#444444] text-white p-1"/>
                </div>
                <div className="md:w-6/12 w-full pb-8 flex flex-col justify-center gap-2">         
                    <label>Senha:</label>
                    <input type="text"
                    placeholder="senha..." 
                    className="w-full rounded-md bg-[#444444] text-white p-1"/>
                </div>
                <div className="flex text-center flex-col gap-2">
                    <Link href={'/admin'} className="rounded-md px-12 md:px-24 py-2 bg-[#7e57c2]">Entrar</Link>
                    <Link href={'/register'}
                    className="text-white/40 text-[12px] xl:text-base underline">nao tenho conta</Link>
                </div>
            </div>
        </div>
    )
}