import HeroSection from "@/components/heroSection";
import Image from "next/image";
import getProducts from "../../../actions/home/actions";



export default async function Home() {
  
  const{products,totalPages}= await getProducts();
  const posts= await getProducts()
  return (
    <HeroSection posts={products} />
  )
}
