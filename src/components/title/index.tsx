type TitleProps ={
    title: string;
}
export default function Title({title}:TitleProps){
    return(
       <span className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        {title}
       </span>
    )
}