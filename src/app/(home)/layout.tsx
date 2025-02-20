import Footer from "@/components/footer";
import Header from "@/components/header";

export default function HomeLayout({
    children,
  }:{children: React.ReactNode;
    } ) {
      return (
       <div className="flex flex-col w-full">
        <Header/>
        {children}
        <Footer/>
       </div> 
      )
    }
  