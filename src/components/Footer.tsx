import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <div>
        <div className='flex gap-20 m-24 pt-10 border '>
        <div>
            <h2 className='text-2xl font-bold'>Funiro.</h2>
            <p className='text-gray-500'>400 University Drive Suite 200 Coral</p>
            <p className='text-gray-500'>Gables,</p>
            <p className='text-gray-500'>FL 33134 USA</p>
            
        </div>
        <div>
            <p className='text-gray-500'>Links</p>
            <p><Link href={"/"}>Home</Link></p>
            <p><Link href={"/shop"}>Shop</Link></p>
            <p><Link href={"/about"}>About</Link></p>
            <p><Link href={"/contact"}>Contact</Link></p>
        </div>
        <div>
            <p className='text-gray-500'>Help</p>
            <p>Payment Options</p>
            <p>Returns</p>
            <p>Privacy Policies</p>
        </div>
        <div>
            <p className='text-gray-500'>Newsletter</p>
            <p className='text-gray-500 underline'>Enter your Email Address</p>
        </div>
        <div>
            <p className='underline'>subscribe</p>
        </div>
        </div>
       <hr />
        <div className='ml-24 mt-5'>
            <p>2023 furino. All rights reverved</p>
        </div>
    </div>
  )
}

export default Footer