
import {  Product } from "../../../../types/home/home";
import getProducts from "../../../../actions/home/actions";

import Catalog from "@/components/catalog-section";

type GamesProps={
    currentPage:number;
    posts:Product[];
    totalPagesN:number;
}

export default async function Games({
    searchParams
}:{
    searchParams:{
        page?:string
    }
}){
 
    const currentPage=Number(searchParams.page)||1;
    const{products,totalPages}= await getProducts(currentPage)


    return(
    <Catalog currentPage={currentPage} posts={products} totalPagesN={totalPages}/>
        
    )
}