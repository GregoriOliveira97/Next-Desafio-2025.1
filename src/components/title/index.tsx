type TitleProps ={
    title: string;
}
export default function Title({title}:TitleProps){
    return(
       <span className="text-base md:text-xl lg:text-xl xl:text-2xl 2xl:text-4xl">
        {title}
       </span>
    )
}