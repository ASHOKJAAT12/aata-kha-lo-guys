import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


function Categories() {
    return (
        <div>
            <section className='max-w-[1360px] mt-10 p-[20px] bg-[#F9F9F9] h-full'>

                <div className='flex items-center text-[#333333] justify-center pt-[40px] text-2xl font-bold'>

                    <h1>Top Categories</h1>

                </div>

                <div className='flex gap-4 mx-auto items-center justify-around mt-10 w-full'>

                    <Link href='/' >
                        <Image alt='photo' className=' rounded-xl' height={500} width={500} src='/Top2.jpeg' ></Image>
                    </Link>

                    <Link href='/' >
                        <Image alt='photo' className='rounded-xl' height={500} width={500} src='/Top1.jpeg' />
                    </Link>

                </div>

                <div className='flex items-center font-semibold text-[#444444] justify-around'>
                    <h1>The Frestest Aata&apos;s</h1>
                    <h1>Healthy Fasting Aata&apos;s</h1>
                </div>
            </section>
        </div>
    )
}

export default Categories
