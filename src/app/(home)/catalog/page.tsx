import GameCard from "@/components/games-card";
import Search from "@/components/search";
import Link from "next/link";

export default function Games(){
    const count=0;
    return(
        <div className="flex flex-col items-center justify-center p-4 gap-4 bg-[#121212] h-full w-full">
            <Search count={count}/>
            {count!=0 ?(
                <div className="flex flex-col gap-4">
                    <span className="text-white/70 text-xl text-center lg:text-2xl font-extrabold">
                        Nenhum jogo encontrado
                    </span>
                    <span className="text-white/70 text-base text-center lg:text-xl">
                        Tente outra coisa ou navegue em <Link href={'/games'}>Games</Link>
                    </span>
                </div>
            ):(
                <div className="grid gap-4 grid-flow-row grid-cols-2 md:grid-flow-col grid-rows-2 ">
                    <GameCard
                    name="Nioh2- Complete Edition"
                    price={199.90} 
                    categories={['RPG','Ação']}/>
                      <GameCard
                    name="Nioh2- Complete Edition"
                    price={199.90} 
                    categories={['RPG','Ação']}/>
                      <GameCard
                    name="Nioh2- Complete Edition"
                    price={199.90} 
                    categories={['RPG','Ação']}/>
                      <GameCard
                    name="Nioh2- Complete Edition"
                    price={199.90} 
                    categories={['RPG','Ação']}/>
                                       <GameCard
                    name="Nioh2- Complete Edition"
                    price={199.90} 
                    categories={['RPG','Ação']}/>
                                       <GameCard
                    name="Nioh2- Complete Edition"
                    price={199.90} 
                    categories={['RPG','Ação']}/>
                                       <GameCard
                    name="Nioh2- Complete Edition"
                    price={199.90} 
                    categories={['RPG','Ação']}/>
                                       <GameCard
                    name="Nioh2- Complete Edition"
                    price={199.90} 
                    categories={['RPG','Ação']}/>
                </div>
            )}
            {/*Paginação falta aqui*/ }
        </div>
        
    )
}