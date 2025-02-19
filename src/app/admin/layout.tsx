import AdminSidebar from "@/components/amdin-sidebar";


export default function AdminLayout({
    children,
  }:{children: React.ReactNode;
    } ) {
      return (
       
        <section className="bg-[#2a2a2a] h-screen">
          <AdminSidebar/>
          <section className="px-4 py-4 sm:px-20 sm:ml-72">
            {children}
          </section>
       </section> 
      )
    }