import Footer from "@/components/Footer";
import Frame from "@/components/Frame";
import Header from "@/components/Header";
import Image from "next/image";


export default function Shop() {
    return ( 
        <div>
            <Header />
            <div className="w-full h-[316px]">
            
                <Image src={"/assets/shop.png"} width={1650} height={316} alt='Bg image' />
                
            </div>
            <div className="w-full h-14 bg-red-200 mt-10 pl-28 p-5">
            <div className="flex gap-10">
                <Image src={"/assets/filtering icon.png"} width={20} height={20} alt='filter icon' />
                <p>Filter</p>
                <Image src={"/assets/round.png"} width={28} height={28} alt='round icon' />
                <Image src={"/assets/view-list.png"} width={24} height={24} alt='view list icon' />
                <p>Showing 1-16 of 32 results</p>

                <p className="pl-56 pr-2 ">Show</p>
                    <p className="border bg-slate-100 text-black pl-2">16</p>
                    <p className="pl-20 pr-2">Short by</p>
                    <p className="border bg-slate-100 text-black pl-2 ">Default</p>
             </div>   
                
            </div>
            <div className="m-20">
                <Image src={"/assets/frame.png"} width={1440} height={2051} alt='items' />
            </div>

            <Frame />
            <Footer />
        </div>
        
    )

}