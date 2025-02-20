type TitleProps ={
    title: string;
    subtitle?:string
}
export default function Title({title, subtitle}:TitleProps){
    return(
        <div className="flex flex-col gap-2">
        <span className="font-semibold text-xl sm:text-2xl md:text-2xl lg:text-3xl  xl:text-4xl 2xl:text-5xl">
            {title}
        </span>
        <span className=" text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl text-white/60">
            {subtitle}
        </span>
       </div>
    )
}