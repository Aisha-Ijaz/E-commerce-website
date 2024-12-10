import Footer from "@/components/Footer";
import Frame from "@/components/Frame";
import Header from "@/components/Header";
import Image from "next/image";


export default function Blog() {
    return (
        <div>
            <Header />
            <div>
                <div>
                <Image src={"/assets/blog.png"} width={1650} height={316} alt='Bg img' />
                </div>
                <div className="pb-10">
                <Image src={"/assets/Group 185.png"} width={1650} height={316} alt='Bg img' />
                </div>
            
            </div>

            <Frame />
            <Footer/>
        </div>
    )

}