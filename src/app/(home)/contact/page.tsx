import InputCard, { EmailCard, MessageInputCard, NameCard } from "@/components/contact-input-card";
import Title from "@/components/title";
import { formSchema, FormValue } from "@/schema/form";
import { useForm } from "react-hook-form";
import {zodResolver} from  "@hookform/resolvers/zod"


export default function Page(){
    const {handleSubmit, register,formState:{errors},reset}= useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name: "",
            email:"",
            message:""
        }
    })
    const onSubmit= async (data:FormValue)=>{
        console.log(data)
    }
    return(
        <div className=" w-full flex flex-col items-center md:items-start justify-center md:flex-row p-4 gap-4
         text-white min-h-screen bg-[#1a1a1a]">
            <section className="bg-[#2a2a2a] flex flex-col gap-2 p-8 w-full md:w-7/12 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                <NameCard title="Escreva seu nome:" placeHolder="Nome..." {...register("name")}/>
                    <EmailCard title="Escreva seu email:" placeHolder="Email..." {...register("email")} />
                    <MessageInputCard title="Escreva sua mensagem:" placeHolder="Mensagem..."{...register("message")}/>
                    <button className="w-fit rounded-md text-base bg-[#7e57c2] self-center font-medium px-2 py-1
                    text-white/90 hover:underline">
                        Enviar Mensagem
                    </button>
                </form>
            </section>
            <section className="flex flex-col gap-8  justify-between p-8 text-white rounded-md bg-[#2a2a2a]">
                <div className="flex flex-col gap-2 ">
                    <h1 className="text-xl">Informações</h1>
                    <span>skillo@mentality.com.br</span>              
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