import CartCard from "@/components/cart-card";

export default function Page(){
    return(
        <div className="bg-[#1a1a1a] w-full flex flex-col gap-4 p-4 md:flex-row">
            <section className="flex flex-col w-full min-h-screen bg-[#1a1a1a]">
                <CartCard name="Nioh2-Complete Edition" price={199.90}/>
                <CartCard name="Nioh2-Complete Edition" price={199.90}/>
                <CartCard name="Nioh2-Complete Edition" price={199.90}/>
            </section>
            <section className="flex flex-col text-xl gap-8 h-fit p-8 text-white rounded-md bg-[#2a2a2a]">
                <div className="flex flex-col gap-4 p-8 ">
                    <h1 className="text-xl">Resumo</h1>
                    <span className="text-white/80">Total:</span>
                    <span>R$ 599,70</span>
                    <button className="rounded-md bg-[#7e57c2] p-2">Finalizar</button>

                </div>
            </section>
        </div>
        
    )
}