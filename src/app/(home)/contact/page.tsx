import InputCard from "@/components/contact-input-card";
import Title from "@/components/title";

export default function Page(){
    return(
        <div className=" w-full flex p-4 gap4 text-white min-h-screen bg-[#1a1a1a]">
            <section className="bg-[#2a2a2a] flex flex-col gap-4 w-full md:w-5/12">
                <InputCard title="Escreva seu nome:" placeHolder="Nome..."/>
                <InputCard title="Escreva seu email:" placeHolder="Email..."/>
                <InputCard title="Descreva brevemente o assunto:" placeHolder="Assunto..."/>
                <InputCard title="Escreva sua mensagem:" placeHolder="Mensagem..."/>
            </section>
            <section>
                
            </section>
        </div>
    )
}