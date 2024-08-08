'use client'
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TemporaryDrawer from '@/Drawer/Drawer';
import { useRouter } from 'next/router';


export default function Header() {
    const router = useRouter
    const Shoprouter = ()=> {
        router.push("/Shop")
    }
   
    return (
        <header className=' w-full'>
            <nav className=' max-w-[1360px] mt-[0px] mb-[10px]  h-[70px]   '>


                <div className='flex  w-full'>
                    <Image alt='photo' className=' ml-[20px]' height={100} width={100} src='/logo2.png'></Image>
                  <div  className='flex md:hidden items-center justify-end w-full gap-6 font-bold'>  <TemporaryDrawer /></div>

                    <ul className='flex max-md:hidden items-center pr-[10px] justify-end w-full gap-6 font-bold'>
                        <li><Link className=' hover:border-b-2 hover:border-black' href={'#'}>HOME</Link></li>
                        <li><Link  onClick={Shoprouter} className=' hover:border-b-2 hover:border-black' href={'/Shop'}>SHOP</Link></li>
                        <li><Link className=' hover:border-b-2 hover:border-black' href={'#'}>ABOUT US</Link></li>
                        <li><Link className=' hover:border-b-2 hover:border-black' href={'#'}>GET NUTRITIONIST</Link></li>
                        <li><Link className=' hover:border-b-2 hover:border-black' href={'#'}>BLOG</Link></li>
                        <li><Link className=' hover:border-b-2 hover:border-black' href={'#'}>CONTACT US</Link></li>
                    </ul>
                </div>


            </nav>
        </header>

    )
}

