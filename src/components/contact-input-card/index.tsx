import Title from "../title";
type InputProps={
    title:string
    placeHolder:string;
}

export default function InputCard({title,placeHolder}:InputProps){
    return(
        <div className="bg-[#2a2a2a] p-2 flex flex-col gap-2 text-white">
        <label >{title}</label>
        <input type="text"
        placeholder={placeHolder} 
        className="bg-[#333333] rounded-md p-1"/>
    </div>
    )

}