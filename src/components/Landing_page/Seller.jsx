import { Star, StarBorderPurple500 } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Seller() {
    return (
        <section className='max-w-[1360] mt-32 h-full'>

            <div className='flex items-center justify-center text-2xl font-bold text-[#333333]'>
                <h1>Best Sellers Products</h1>
            </div>

            <div className=' h-full grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 items-center  gap-8 m-10 '>

                <Link className='' href='/'>
                    <Image alt='photo' className='h-[220px] w-[260px]' height={300} width={300} src='/seller1.jpeg' />
                    <h1 className='pt-2 text-[#333333] font-semibold'>Bajra Aata</h1>
                    <h1><Star />
                        <Star />
                        <Star />
                        <Star />
                        <StarBorderPurple500 />
                    </h1>
                </Link>

                <Link href='/'>
                    <Image alt='photo' className='h-[220px] w-[260px]' height={300} width={300} src='/seller2.jpg' />
                    <h1 className='pt-2 text-[#333333] font-semibold'>Ragi Flour</h1>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <StarBorderPurple500 />



                </Link>
                <Link href='/'>
                    <Image alt='photo' className='h-[220px] w-[260px]' height={300} width={300} src='/seller3.jpg' />
                    <h1 className='pt-2 text-[#333333] font-semibold'>Jowar Flour</h1>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <StarBorderPurple500 />


                </Link>

                <Link href='/'>
                    <Image alt='photo' className='h-[220px] w-[260px]' height={300} width={300} src='/seller4.jpg' />
                    <h1 className='pt-2 text-[#333333] font-semibold'>Besan Flour</h1>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <StarBorderPurple500 />


                </Link>

                <Link href='/'>
                    <Image alt='photo' className='h-[220px] w-[260px]' height={300} width={300} src='/seller5.jpg' />
                    <h1 className='pt-2 text-[#333333] font-semibold'>Rice Flour</h1>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <StarBorderPurple500 />


                </Link>

                <Link href='/'>
                    <Image alt='photo' className='h-[220px] w-[260px]' height={300} width={300} src='/seller6.jpg' />
                    <h1 className='pt-2 text-[#333333] font-semibold'>Sharbati Wheat Flour</h1>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <StarBorderPurple500 />


                </Link>

                <Link href='/'>
                    <Image alt='photo' className='h-[220px] w-[260px]' height={300} width={300} src='/seller7.jpg' />
                    <h1 className='pt-2 text-[#333333] font-semibold'>Multigrain Flour</h1>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <StarBorderPurple500 />


                </Link>

            </div>
            <div className='flex max-md:flex-col max-md:gap-4 items-center pt-10 m-10 justify-around'>

                <div className=' pr-[150px] max-md:pb-[20px] md:pb-[295px] text-[#333333] font-bold text-2xl'>
                    <h1>Top Rated</h1>

                </div>

                <div >

                    <div className='pb-4'>
                        <h1 className='text-[#333333] font-bold text-2xl'>Best Selling</h1>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-4'>
                            <Link href='/' >
                                <Image alt='photo' height={100} width={100} src='/seller6.jpg' />
                            </Link>
                            <Link href='/' className='text-lg font-medium hover:text-yellow-600' >Sharbati Wheat Flour</Link>
                        </div>

                        <div className='flex gap-4'>
                            <Link href='/' >
                                <Image alt='photo' height={100} width={100} src='/seller3.jpg' />
                            </Link>
                            <Link href='/' className='text-lg font-medium hover:text-yellow-600' >Jowar Flour</Link>
                        </div>

                        <div className='flex gap-4'>
                            <Link href='/' >
                                <Image alt='photo' height={100} width={100} src='/seller7.jpg' />
                            </Link>
                            <Link href='/' className='text-lg font-medium hover:text-yellow-600' >Multigrain Flour</Link>
                        </div>
                    </div>


                </div>

                <div className=''>

                    <div className='pb-4'>
                        <h1 className='text-[#333333] font-bold text-2xl'>Deal of The Day</h1>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-4'>
                            <Link href='/' >
                                <Image alt='photo' height={100} width={100} src='/seller3.jpg' />
                            </Link>
                            <Link href='/' className='text-lg font-medium hover:text-yellow-600' >Barley/Jau ka aata</Link>
                        </div>

                        <div className='flex gap-4'>
                            <Link href='/' >
                                <Image alt='photo' height={100} width={100} src='/seller2.jpg' />
                            </Link>
                            <Link href='/' className='text-lg font-medium hover:text-yellow-600' >Chakli Premix</Link>
                        </div>

                        <div className='flex gap-4'>
                            <Link href='/' >
                                <Image alt='photo' height={100} width={100} src='/seller6.jpg' />
                            </Link>
                            <Link href='/' className='text-lg font-medium hover:text-yellow-600' >Sharbati Wheat Flour</Link>
                        </div>
                    </div>
                </div>

            </div>


            <div className='text-[#333333] max-w-[1360px] h-full pt-8 m-10'>

                <div className='flex items-center max-md:text-center my-10  justify-center'>
                    <h1 className='font-bold text-[#333333] text-3xl'>What our customers say about us?</h1>
                </div>

                <div className='flex max-md:flex-col  gap-6 items-center justify-around'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[#F49619] text-center text-2xl font-bold'>Fatima Marvel</h1>
                        <hr />
                        <p>”Yes, it’s really nice. super soft Rotis… even the next day it isn’t as dry as the readymade flours… thanks for this really good aata.”</p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h1  className='text-[#F49619] text-center text-2xl font-bold'>Sandeep Agrawal</h1>
                        <hr />
                        <p>”Used the laddu aata today. It was perfect thickness and consistency. Thank you for this amazing aata. Really good quality products.”</p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h1  className='text-[#F49619] text-center text-2xl font-bold'>Supriya Ivy</h1>
                         <hr />
                         <p>”I have been using your multi-grain aata, and I must say it’s up to mark. The dough was too smooth and the roti was too enjoyable.”</p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h1  className='text-[#F49619] text-center text-2xl font-bold'>Pink Club (Pune)</h1>
                        <hr />
                        <p>”Truly sharmaji.ka.aata from Sangeeta is absolutely fantastic. They customized the aata exactly as I wanted. Thank you.”</p>
                    </div>

                </div>

                <div className='my-10'>
                    <Link href='/' >
                    <Image alt='photo' className=' md:h-[200px] w-full' height={200} width={1000} src='/custmer.png' />
                    </Link>
                </div>

            </div>
            

        </section>
    )
}

export default Seller
