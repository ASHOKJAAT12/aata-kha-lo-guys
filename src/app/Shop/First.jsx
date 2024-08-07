import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function First() {
 
    return (
        <section className=' max-w-[1360px]'>

            <div className='h-[120px]'>
                <Image alt='photo' className='h-[140px] w-full z-0  absolute' height={1000} width={1400} src='/shop-theme.jpg' />
                <div className=' flex flex-col pt-[50px] text-center relative  '>
                    <h1 className='font-black text-2xl text-[#444444]'>Shop</h1>
                    <Link className='hover:text-white font-semibold text-[#444444]' href='/'>Home</Link>
                </div>
            </div>

            <section className='max-w-[1360px]  p-[50px]  h-full'>

                <div className='flex items-center text-[#333333] justify-center pt-[40px] text-3xl font-extrabold'>

                    <h1>Categories</h1>

                </div>

                <div className='grid grid-cols-4 max-md:grid-cols-2 gap-4 mx-auto items-center justify-around mt-10 w-full'>

                    <Link href='/' >
                        <Image alt='photo' className=' rounded-lg' height={400} width={400} src='/Top2.jpeg' ></Image>
                        <h1 className='items-center font-bold p-2 text-[#444444] text-center'>The Frestest Aata's</h1>

                    </Link>

                    <Link href='/' >
                        <Image alt='photo' className='rounded-lg' height={40} width={400} src='/Top1.jpeg' />
                        <h1 className='items-center font-bold p-2 text-[#444444] text-center'>Healthy Fasting Aata's</h1>

                    </Link>

                    <Link href='/' >
                        <Image alt='photo' className='rounded-lg' height={40} width={400} src='/OIL.png' />
                        <h1 className='items-center font-bold p-2 text-[#444444] text-center'>Cold Pressed Oil</h1>

                    </Link>

                    <Link href='/' >
                        <Image alt='photo' className='rounded-lg' height={40} width={400} src='/OIL2.png' />
                        <h1 className='items-center font-bold p-2 text-[#444444] text-center'>positive Millets Flours</h1>

                    </Link>

                </div>


            </section>

            

        </section>
    )
}

export default First
