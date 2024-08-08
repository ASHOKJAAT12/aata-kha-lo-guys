'use client'
import React, { useState } from 'react';
import Slidar from '@/Slider/Sliider'
import Radie from '@/Radio/Radie'
import Image from 'next/image'
import Link from 'next/link'
import { Star, StarBorderPurple500 } from '@mui/icons-material';

function Second() {
    const [showSlidarGroup, setShowSlidarGroup] = useState(false);
    const [redia, setRedia] = useState(false);

    const Rediahandle = () => {
        setRedia(prev => !prev);
    };

    const handleToggle = () => {
        setShowSlidarGroup(prev => !prev);
    };

    return (
        <section className='h-full my-[20px] p-[14px] max-w-[1360px]'>

            <div className='text-md  font-bold text-[#333333] flex w-full justify-between '>

                <div className='flex max-md:hidden gap-10 pl-10'>
                    <h1>Filter by:</h1>
                    <button className='hover:text-yellow-500'>Categories</button>
                    <button onClick={handleToggle} className='hover:text-yellow-500' >Price</button>
                    <button onClick={Rediahandle} className='hover:text-yellow-500'>Status</button>
                </div>


                <div className='max-md:hidden pr-[100px]'>
                    <h1>Short By:</h1>
                </div>

                <div className='pl-6 md:hidden'>
                    <button className='text-[#333333] font-normal text-base   hover:text-yellow-500'>Filters</button>
                </div>

                <div className='md:hidden pr-[60px]'>
                    <button className='text-[#333333] font-normal text-base hover:text-yellow-500'>Sort by</button>
                </div>


            </div>

            <div className='w-[600px] mt-6 '>
                {showSlidarGroup && (<Slidar />)}
                {redia && (<Radie />)}

            </div>


        

                <div className=' h-full grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2  gap-4 mx-auto items-center justify-around mt-10 w-full '>

                    <Link className='' href='/'>
                        <Image alt='photo' height={400} width={400} src='/Shop-2.png' />
                        <h1 className='pt-2 text-[#333333] font-semibold'>Bajra Aata</h1>
                        <h1><Star />
                            <Star />
                            <Star />
                            <Star />
                            <StarBorderPurple500 />
                        </h1>
                        <div className='flex gap-2'>
                         <h1 className='text-[#5b5a5a] line-through'>₹173</h1>
                         <h1>  ₹160</h1>
                        </div>
                       
                    </Link>

                    <Link href='/'>
                        <Image alt='photo' height={400} width={400} src='/Shop-3.png' />
                        <h1 className='pt-2 text-[#333333] font-semibold'>Ragi Flour</h1>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <StarBorderPurple500 />
                          <div className='flex gap-2'>
                         <h1 className='text-[#5b5a5a] line-through'>₹173</h1>
                         <h1>  ₹160</h1>
                        </div>



                    </Link>
                    <Link href='/'>
                        <Image alt='photo' height={400} width={400} src='/Shop-4.png' />
                        <h1 className='pt-2 text-[#333333] font-semibold'>Jowar Flour</h1>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <StarBorderPurple500 />
                        <div className='flex gap-2'>
                         <h1 className='text-[#5b5a5a] line-through'>₹173</h1>
                         <h1>  ₹160</h1>
                        </div>


                    </Link>

                    <Link href='/'>
                        <Image alt='photo' height={400} width={400} src='/Shop-5.png' />
                        <h1 className='pt-2 text-[#333333] font-semibold'>Besan Flour</h1>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <StarBorderPurple500 />
                        <div className='flex gap-2'>
                         <h1 className='text-[#5b5a5a] line-through'>₹173</h1>
                         <h1>  ₹160</h1>
                        </div>


                    </Link>

                    <Link href='/'>
                        <Image alt='photo' height={400} width={400} src='/Shop-6.png' />
                        <h1 className='pt-2 text-[#333333] font-semibold'>Rice Flour</h1>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <StarBorderPurple500 />
                        <div className='flex gap-2'>
                         <h1 className='text-[#5b5a5a] line-through'>₹300</h1>
                         <h1>  ₹200</h1>
                        </div>


                    </Link>

                    <Link href='/'>
                        <Image alt='photo' height={400} width={400} src='/Shop-7.png' />
                        <h1 className='pt-2 text-[#333333] font-semibold'>Sharbati Wheat Flour</h1>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <StarBorderPurple500 />
                        <div className='flex gap-2'>
                         <h1 className='text-[#5b5a5a] line-through'>₹173</h1>
                         <h1>  ₹100</h1>
                        </div>


                    </Link>

                    <Link href='/'>
                        <Image alt='photo' height={400} width={400} src='/Shop-8.png' />
                        <h1 className='pt-2 text-[#333333] font-semibold'>Multigrain Flour</h1>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <StarBorderPurple500 />
                        <div className='flex gap-2'>
                         <h1 className='text-[#5b5a5a] line-through'>₹173</h1>
                         <h1>  ₹160</h1>
                        </div>


                    </Link>
                    <Link href='/'>
                        <Image alt='photo'  height={400} width={400} src='/Shop-9.png' />
                        <h1 className='pt-2 text-[#333333] font-semibold'>Multigrain Flour</h1>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <StarBorderPurple500 />
                        <div className='flex gap-2'>
                         <h1 className='text-[#5b5a5a] line-through'>₹173</h1>
                         <h1>  ₹160</h1>
                        </div>


                    </Link>

                    <Link href='/'>
                        <Image alt='photo' height={400} width={400} src='/Shop-10.png' />
                        <h1 className='pt-2 text-[#333333] font-semibold'>Multigrain Flour</h1>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <StarBorderPurple500 />
                        <div className='flex gap-2'>
                         <h1 className='text-[#5b5a5a] line-through'>₹173</h1>
                         <h1>  ₹160</h1>
                        </div>


                    </Link>

                    <Link href='/'>
                        <Image alt='photo' height={400} width={400} src='/Shop-11.png' />
                        <h1 className='pt-2 text-[#333333] font-semibold'>Multigrain Flour</h1>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <StarBorderPurple500 />
                        <div className='flex gap-2'>
                         <h1 className='text-[#5b5a5a] line-through'>₹173</h1>
                         <h1>  ₹160</h1>
                        </div>


                    </Link>

                    <Link href='/'>
                        <Image alt='photo' height={400} width={400} src='/Shop-12.png' />
                        <h1 className='pt-2 text-[#333333] font-semibold'>Multigrain Flour</h1>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <StarBorderPurple500 />
                        <div className='flex gap-2'>
                         <h1 className='text-[#5b5a5a] line-through'>₹173</h1>
                         <h1>  ₹160</h1>
                        </div>


                    </Link>

                </div>
        </section>
    )
}

export default Second
