import Image from "next/image";
import Title from "../title";
import GameCard from "../games-card";
import Link from "next/link";

export default function HeroSection(){
    return(
        <div className="bg-[#121212] text-white w-full flex flex-col items-center gap-8">
            <div className="bg-[#2a2a2a] text-white w-full flex flex-col items-center gap-6 p-4" >
                <Title title="Descubra novos mundos"/>
                <h2 className=" text-sm md:text-base lg:text-xl">Os melhores jogos pelos melhores preços, pra você sempre estar com as Skills em dia!</h2>
                <button className="bg-[#7e57c2] text-white rounded-xl px-4 py-2">Ver ofertas</button>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center text-center">
                <Title title="Alguns dos jogos que você vai encontrar por aqui: "/>
                <div className="flex items-center justify-center gap-4 w-full">
                    {/*Trocar por cards(componente) depois*/}
                        <Image
                            src={'/imgs/nioh2capa.png'}  
                            alt="Logo do site"
                            width={904}
                            height={904}
                            className="object-fit h-20 w-16 md:h-36 md:w-32"/>    
                         <Image
                            src={'/imgs/nioh2capa.png'} 
                            alt="Logo do site"
                            width={904}
                            height={904}
                            className="object-fit h-20 w-16 md:h-36 md:w-32"/>    
                         <Image
                            src={'/imgs/nioh2capa.png'} 
                            alt="Logo do site"
                            width={904}
                            height={904}
                            className="object-fit h-20 w-16 md:h-36 md:w-32"/>  
                        <Image
                            src={'/imgs/nioh2capa.png'}  
                            alt="Logo do site"
                            width={904}
                            height={904}
                            className="object-fit h-20 w-16 md:h-36 md:w-32"/>  

                </div>
            </div>

            <div className="flex flex-col gap-4 text-center items-center justify-center">
                <Title title="Destaques: "/>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                    {/*Trocar por cards(componente) depois*/}
                    <GameCard
                    name="Nioh2- Complete Edition"
                    price={199.90} 
                    categories={['RPG','Ação']}
                    buttonOff={true} />
                      <GameCard
                    name="Nioh2- Complete Edition"
                    price={199.90} 
                    categories={['RPG','Ação']}
                    buttonOff={true}/>
                      <GameCard
                    name="Nioh2- Complete Edition"
                    price={199.90} 
                    categories={['RPG','Ação']}
                    buttonOff={true}/>
                      <GameCard
                    name="Nioh2- Complete Edition"
                    price={199.90} 
                    categories={['RPG','Ação']}
                    buttonOff={true}/>
                         <GameCard
                    name="Nioh2- Complete Edition"
                    price={199.90} 
                    categories={['RPG','Ação']}
                    buttonOff={true}/>
                      <GameCard
                    name="Nioh2- Complete Edition"
                    price={199.90} 
                    categories={['RPG','Ação']}
                    buttonOff={true}/>

                </div>
                <Link href={'/catalog'}
                className="bg-[#7e57c2] text-white rounded-xl px-4 py-2">
                    Ver mais 
                </Link>
            </div>

            <div className=" bg-[#2a2a2a] w-full flex flex-col gap-4 p-4 text-center items-center justify-center py-4 text-white">
                    <Title title="Sobre nós:"/>
                    {/*Trocar isso aqui por componente tbm*/}
                    <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex flex-col w-fit md:w-60 gap-4 p-2 bg-[#7e57c2] rounded-xl justify-center items-center text-center">
                        <Title title="Missão"/>
                        <span className="flex flex-col w-fit text-sm">Fornecer aos gamers a melhor experiência de jogos digitais por meio de 
                            uma seleção cuidadosa de jogos de alta qualidade, atendimento excepcional ao cliente e uma plataforma fácil de usar.
                        </span>
                    </div>
                    <div className="flex flex-col w-fit md:w-60 gap-4 p-2 bg-[#7e57c2] rounded-xl justify-center items-center text-center">
                        <Title title="Visão"/>
                        <span className="flex flex-col w-fit text-sm">Ser o principal destino online para gamers, oferecendo uma escolha, 
                            valor e conveniência incomparáveis, ao mesmo tempo que cultiva uma vibrante comunidade de jogadores apaixonados.
                        </span>
                    </div>
                    <div className="flex flex-col w-fit md:w-60 gap-4 p-2 bg-[#7e57c2] rounded-xl justify-center items-center text-center">
                        <Title title="Valores"/>
                        <span className="flex flex-col w-fit content- text-sm">-Foco no cliente: Colocar as necessidades e a 
                            satisfação de nossos clientes em primeiro lugar em todas as nossas decisões e ações. <br /> 

                            -Integridade: Manter os mais altos padrões de honestidade, transparência e práticas comerciais éticas. <br />

                            -Diversidade e Inclusão: Cultivar um ambiente que celebre o rico tecido das culturas de jogos e receba jogadores 
                            de todos os perfis.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}