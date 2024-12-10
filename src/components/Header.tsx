import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <div className='w-full h-[80px] flex border-b-2'>
        <div className='w-[80%] h-full flex ml-20'>
            {/* {left side} */}
            <div className='flex items-center'>
            <Image src={"/assets/logo.png"}  width={50} height={50} alt='logo' />
            <h1 className='text-3xl font-bold'>Furniro</h1>
            
            
            {/* Center Navigation */}
             
             <ul className='flex justify-between items-center gap-20 pl-80'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/shop'>Shop</Link>
                </li>
                <li>
                    <Link href='/blog'>Blog</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
                </ul>
                
                
                {/* {Right side} */}
                <div className='flex justify-end gap-10 pl-[450px]'>
                <Image src={"/assets/account-alert.png"}  width={30} height={30} alt='account-alert' />
                <Image src={"/assets/search-icon.png"}  width={30} height={30} alt='search icon' />
                <Image src={"/assets/heart-icon.png"}  width={30} height={30} alt='heart icon' />
                <Image src={"/assets/shopping-cart.png"}  width={30} height={30} alt='shopping cart' />
                </div>
                    
             </div>
        </div>
    </div>
  )
}

export default Header