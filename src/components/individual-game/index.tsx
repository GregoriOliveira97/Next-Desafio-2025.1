import Image from "next/image";
import Title from "../title";

export default function IndividualGame(){
    return(
        <div className="flex flex-col items-center text-center ">
            <div className="w-full flex flex-col md:flex-row gap-4 p-4">
                <section className="p-4 w-full md:w-8/12 flex flex-col gap-4 items-center">
                    <div className="flex relative w-full aspect-video max-w-2xl flex-col">
                        <Image
                            src={'/imgs/nioh2capa.png'}
                            alt="Capa do Jogo"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-2 text-center">
                        <h2>Gêneros:</h2>
                        <div className="flex gap-2 text-base">
                            <span className="w-fit px-4 py-1 rounded-md bg-purple-600 text-white" >RPG</span>
                            <span className="w-fit px-4 py-1 rounded-md bg-purple-600 text-white" >Ação</span>
                            <span className="w-fit px-4 py-1 rounded-md bg-purple-600 text-white" >Hack and Slash</span>
                        </div>
                    </div>
                </section>
                <section className="p-4">
                    <div className="flex flex-col gap-4">
                        <div>
                            <Title title="Nioh 2 - Complete Edition"
                            subtitle="KOEI TECMO GAMES CO., LTD."/>
                        </div> 
                        <div className="flex flex-col gap-2 p-2">
                            <span className="text-xl text-purple-400">
                            R$ 199.90
                            </span>
                            <button className="px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                            Adicionar ao Carrinho
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <section className="w-full max-w-[1400px] mx-auto p-6">
                <div className="bg-[#3A3A3A] rounded-lg p-6">
                    <Title title="Descrição"/>
                    <div className="max-h-[300px] overflow-y-auto text-base text-gray-300">
                    <p >INTRODUÇÃO:
                         A sequência de um dos RPGs mais aclamados dos últimos anos está aqui! Liberte a escuridão em Nioh 2 – The Complete Edition.

                        Após um feedback positivo de fãs e críticos do título anterior, Nioh 2 volta a conter uma história imensa e original à volta de comandantes militares do Período Sengoku. No entanto, Nioh 2 supera em tudo o seu antecessor ao incluir a nova Transformação em Yokai que te permite utilizar novas transformações poderosas para derrotar os mais temíveis yokai. Agora, seus inimigos podem criar um Reino das Trevas que tornam as batalhas ainda mais emocionantes com novos desafios para superar. Esperamos que você se divirta a dominar os temíveis monstros enquanto liberta o seu lado negro no mundo de Nioh 2.
                    </p>
                    <br />
                    <p>
                        DESTAQUES:

                        Nioh 2 - Complete Edition inclui: O jogo base Nioh 2 assim como as 3 expansões de DLC, The Tengu's Disciple, Darkness in the Capital e The First Samurai.
                        The Tengu's Disciple: Viaje até ao final do Período Heian com The Tengu's Disciple, onde os clãs Genji e Heike competiam entre si de forma impiedosa. Desfrute da batalha que consiste como o prefácio para explicar como se desenrolou a história de Nioh 2.
                        Darkness in the Capital: Darkness in the Capital situa-se em meados do Período Heian, no momento em que os espíritos malignos e yokai estavam à solta por todo o Japão. Regressa a este período para se aventurar na capital e descobra as ligações entre um passado ainda mais longínquo e o presente.
                        The First Samurai: The First Samurai te leva à passagem Suzuka durante o início do Período Heian. Na fantástica 3.ª expansão da saga Nioh 2, volte a enfrentar o seu arqui-inimigo Otakemaru.
                    </p>
                    <br /> 
                    <p>
                        REQUISITOS DE SISTEMA:

                        Mínimos
                        SO: Windows® 10 64bit / Windows® 8.1 64bit
                        Armazenamento: 85 GB
                        Processador: Intel Core i5 4460+
                        Memória: 6 GB
                        Placa de vídeo: NVIDIA GeForce GTX 970 / VRAM 4GB+
                        Placa de som: 16 bit stereo / 48KHz WAVE file can be played
                        DirectX: 11

                        Recomendados
                        SO: Windows® 10 64bit
                        Armazenamento: 85 GB
                        Processador: Intel Core i7 6700K+
                        Memória: 16 GB
                        Placa de vídeo: NVIDIA GeForce GTX 1660 SUPER or over / VRAM 6GB+
                        Placa de som: 16 bit stereo / 48KHz WAVE file can be played
                        DirectX: 11

                    </p>
                    </div>
                </div>
            </section>
        </div>
    )
    
}