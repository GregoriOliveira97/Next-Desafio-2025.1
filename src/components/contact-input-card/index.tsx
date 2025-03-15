import { zodResolver } from "@hookform/resolvers/zod";
import Title from "../title";
import { formSchema } from "@/schema/form";
import { useForm } from "react-hook-form";

type InputProps={
    title:string
    placeHolder:string;
}

export default function InputCard({title,placeHolder}:InputProps){

    return(
        <div className="bg-[#2a2a2a] p-2 flex flex-col gap-2 text-white rounded-md">
        <label className="text-xl">{title}</label>
        <input type="text" 
        placeholder={placeHolder} 
        className="bg-[#333333] resize-y rounded-md p-1"/>
    </div>
    )
}
export function NameCard({title,placeHolder}:InputProps){
    return(
        <div className="bg-[#2a2a2a] p-2 flex flex-col gap-2 text-white rounded-md">
        <label htmlFor="name" className="text-xl">{title}</label>
        <input type="name" id="text"
        placeholder={placeHolder} 
        className="bg-[#333333] resize-y rounded-md p-1"/>
    </div>
    )
}
export function EmailCard({title,placeHolder}:InputProps){
    return(
        <div className="bg-[#2a2a2a] p-2 flex flex-col gap-2 text-white rounded-md">
        <label htmlFor="email" className="text-xl">{title}</label>
        <input type="email" id="email"
        placeholder={placeHolder} 
        className="bg-[#333333] resize-y rounded-md p-1"/>
    </div>
    )
}
export function MessageInputCard({title,placeHolder}:InputProps){
    return(
        <div className="bg-[#2a2a2a] p-2 flex flex-col gap-2 text-white rounded-md">
        <label htmlFor="message" className="text-xl">{title}</label>
        <input id="message"
        placeholder={placeHolder} 
        className="bg-[#333333] resize-y rounded-md p-1 h-48"/>
    </div>
    )

}