type DashboardTileProps={
    title:string;
    desc:string;
}

export default function DashboardTile({title,desc}:DashboardTileProps){
    return(
        <div>
            <h1 className="text-3xl font-bold mb-2 text-white ">{title} </h1>
            <span className="text-white/70">{desc}</span>
        </div>
    )
}