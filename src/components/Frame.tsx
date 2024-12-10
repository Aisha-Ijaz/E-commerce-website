
import Image from 'next/image'
import React from 'react'

const Frame = () => {
  return (
    <div>
        <div className="w-full h-[270px] bg-red-200">
                <div className="flex justify-center items-center pt-24 gap-10">
                <Image src={"/assets/high quality.png"} width={337} height={70} alt='Quality image' />
                <Image src={"/assets/protection.png"} width={328} height={70} alt='protection image' />
                <Image src={"/assets/free shipping.png"} width={244} height={70} alt='free shipping' />
                <Image src={"/assets/support.png"} width={259} height={70} alt='24/7 support image' />
                </div>

            </div>

    </div>
  )
}

export default Frame