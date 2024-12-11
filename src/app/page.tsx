
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      <Header />

      <div>
      <div>
            <Image src={"/assets/Mask Group.jpg"} width={1590} height={1007.93} alt='bg image'></Image>
        </div>
        <div>
        <div className='w-full h-[685px] mt-50 pt-20'>
        <div className='justify-center items-center '>
            <h1 className='text-3xl font-bold text-center '>Browse The Range</h1>
            <p className='text-center pb-30'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {/* Range section */}
        <div className='flex justify-center gap-10 pt-16'>
        <div>
            <Image src={"/assets/Dining.png"} width={381} height={480} alt='Dinning'></Image>
            <p className='text-center pt-2'>Dining</p>
        </div>
        <div>
            <Image src={"/assets/living room.png"} width={381} height={480} alt='Dinning'></Image>
            <p className='text-center pt-2'>Living</p>
        </div>
        <div>
            <Image src={"/assets/Bedroom.png"} width={381} height={480} alt='Dinning'></Image>
            <p className='text-center pt-2 '>Bedroom</p>
        </div>
        </div>
        
    </div>
        </div>

        {/* products section */}
        <div className='w-[1236px] h-[1084px] ml-28 pt-36 flex justify-center items-center'>
        <div>
            <h1 className='text-3xl font-bold justify-center text-center pb-10 '>Our Products</h1>
            <div className='flex gap-20 pb-10'>
                <Image src={"/assets/Featured Products.png"} width={285} height={301} alt='product'></Image>
                <Image src={"/assets/Featured Products (1).png"} width={285} height={301} alt='product'></Image>
                <Image src={"/assets/Featured Products (2).png"} width={285} height={301} alt='product'></Image>
                <Image src={"/assets/Featured Products (3).png"} width={285} height={301} alt='product'></Image>
            </div>

            <div className='flex gap-20'>
                <Image src={"/assets/Featured Products (7).png"} width={285} height={301} alt='product'></Image>
                <Image src={"/assets/Featured Products (4).png"} width={285} height={301} alt='product'></Image>
                <Image src={"/assets/Featured Products (5).png"} width={285} height={301} alt='product'></Image>
                <Image src={"/assets/Featured Products (6).png"} width={285} height={301} alt='product'></Image>
            </div>

        </div>
    </div>
    {/* Inspiration section */}
    <div className='w-full h-[700px] bg-red-200 mt-36 flex '>
        <div className='pl-16 pt-56 w-[380px] '>
            <div>
            <h1 className='text-3xl font-bold '>50+ Beautiful rooms inspiration</h1>
            <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        
            </div>

            </div>
        <div className='justify-end items-end pt-12 pl-80 pb-10'>
        <Image src={"/assets/Products.png"} width={1196} height={580} alt='product'></Image>
        </div>
    </div>
    {/* Share setup section */}
    <div className='w-full pt-20 pb-10 '>
        <div className='justify-center text-center'>
            <p>Share your setup with</p>
            <h2 className='text-2xl font-bold'>#FuniroFurniture</h2>
        </div>
        <div>
        <Image src={"/assets/share.png"} width={1799} height={780} alt='product'></Image>
        </div>
    </div>
      </div>
      <Footer />
    </div>
  )
}
