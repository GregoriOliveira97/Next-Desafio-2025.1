import InputCard from "@/components/contact-input-card";
import Title from "@/components/title";

export default function Page(){
    return(
        <div className=" w-full flex flex-col md:flex-row p-4 gap-4 text-white min-h-screen bg-[#1a1a1a]">
            <section className="bg-[#2a2a2a] flex flex-col gap-4 p-8 w-full md:w-5/12 rounded-md">
                <InputCard title="Escreva seu nome:" placeHolder="Nome..."/>
                <InputCard title="Escreva seu email:" placeHolder="Email..."/>
                <InputCard title="Descreva brevemente o assunto:" placeHolder="Assunto..."/>
                <InputCard title="Escreva sua mensagem:" placeHolder="Mensagem..."/>
                <button className="w-fit rounded-md text-base bg-[#7e57c2] self-center font-medium px-2 py-1 text-white/90 hover:underline">
                Enviar Mensagem
                </button>
            </section>
            <section className="flex flex-col gap-8 justify-between p-8 text-white rounded-md bg-[#2a2a2a]">
                <div className="flex flex-col gap-2 ">
                    <h1 className="text-xl">Informações</h1>
                    <span>contato@gamementality.com</span>              
                    <span>(32) 0011 - 2233</span>
                    <span>Rua dos SeiLá, 123</span>

                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl">Redes Sociais</h1>
                    <span className="text-[#7e57c2]">Discord</span>
                    <span className="text-[#7e57c2]">Instagram</span>
                    <span className="text-[#7e57c2]">Twitter</span>
                </div>
                
            </section>
        </div>
    )
}