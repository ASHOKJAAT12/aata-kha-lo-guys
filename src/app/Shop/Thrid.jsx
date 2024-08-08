import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function Thrid() {
    return (

        <section className='max-w-[1360px] my-[40px]  p-[14px]  h-full'>

            <div className='flex items-center text-[#333333] justify-center pt-[40px] text-3xl font-extrabold'>

                <h1>Recommend Products</h1>

            </div>

            <div className='grid grid-cols-4 max-md:grid-cols-2 gap-4 mx-auto items-center justify-around mt-10 w-full'>

                <Link href='/' >
                    <Image alt='photo' className=' rounded-sm' height={300} width={300} src='/Shop-6.png' ></Image>
                    <h1 className='items-center font-bold p-2 text-[#444444] text-center'>The Frestest Aata&apos;s</h1>
                    <div className='flex gap-2'>
                        <h1 className='text-[#5b5a5a] line-through'>₹300</h1>
                        <h1>  ₹100</h1>
                    </div>
                </Link>

                <Link href='/' >
                    <Image alt='photo' className='rounded-sm' height={300} width={300} src='/Shop-11.png' />
                    <h1 className='items-center font-bold p-2 text-[#444444] text-center'>Healthy Fasting Aata&apos;s</h1>
                    <div className='flex gap-2'>
                        <h1 className='text-[#5b5a5a] line-through'>₹173</h1>
                        <h1>  ₹100</h1>
                    </div>
                </Link>

                <Link href='/' >
                    <Image alt='photo' className='rounded-sm' height={300} width={300} src='/Shop-9.png' />
                    <h1 className='items-center font-bold p-2 text-[#444444] text-center'>Cold Pressed Oil</h1>
                    <div className='flex gap-2'>
                        <h1 className='text-[#5b5a5a] line-through'>₹173</h1>
                        <h1>  ₹50</h1>
                    </div>
                </Link>

                <Link href='/' >
                    <Image alt='photo' className='rounded-sm' height={300} width={300} src='/Shop-10.png' />
                    <h1 className='items-center font-bold p-2 text-[#444444] text-center'>positive Millets Flours</h1>
                    <div className='flex gap-2'>
                        <h1 className='text-[#5b5a5a] line-through'>₹173</h1>
                        <h1>  ₹40</h1>
                    </div>
                </Link>

            </div>


        </section>
    )
}

export default Thrid
