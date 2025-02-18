import Footer from "@/components/footer";
import Header from "@/components/header";

export default function AdminLayout({
    children,
  }:{children: React.ReactNode;
    } ) {
      return (
       <div>
        {children}
       </div> 
      )
    }