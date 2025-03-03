import HeroSection from "@/components/heroSection";
import Image from "next/image";
import getGames from "../../../actions/home/actions";
import { Category } from "@prisma/client";


export default async function Home() {
  const posts= await getGames()
  return (
    <HeroSection posts={posts}/>
  )
}
