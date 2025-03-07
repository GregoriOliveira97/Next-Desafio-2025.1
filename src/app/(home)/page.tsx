import HeroSection from "@/components/heroSection";
import Image from "next/image";
import getProducts from "../../../actions/home/actions";



export default async function Home() {
  const posts= await getProducts()
  return (
    <HeroSection posts={posts}/>
  )
}
