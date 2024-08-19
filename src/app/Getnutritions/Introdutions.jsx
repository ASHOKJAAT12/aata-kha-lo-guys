import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Introdutions() {
    return (
        <section className='max-w-[1360px] h-full'>
            <div className='h-[120px]  mx-auto w-full mb-[30px]'>
                <Image alt='photo' className='h-[140px] w-full z-0  absolute' height={1000} width={1400} src='/shop-theme.jpg' />
                <div className=' flex flex-col mx-auto pt-[50px]  items-center relative  '>
                    <h1 className='font-black text-2xl text-[#444444]'>Nutritionist</h1>
                    <Link className='hover:text-white font-semibold text-[#444444]' href='/'>Home</Link>
                </div>
            </div>
            <div className='flex pr-6 mx-auto max-w-[1360px] justify-around  p-4 items-center h-full   gap-6 max-sm:flex-col '>
                <div className=''>
                    <Image className='h-[600px] w-[400px] ' height={400} width={400} alt='/' src='/nutritionist-image.png' />
                </div>


                <div className=''>
                    <h1 className='text-3xl font-bold pb-4'>Expert Nutritionist</h1>
                    <p className='text-sm font-normal text-[#333333]'>Im Sapna, a Certified Clinical Nutritionist, with and MSC in Food Technology and Specialization in Clinical Nutrition.</p>
                    <ul className=' '>
                        <li>12+ Years of experience in the field of nutrition.</li>
                        <li>She has helped more than 1500 + people to maintain a healthy weight and manage their health conditions.</li>
                        <li>Transforming lifestyles across the globe in 15 + countries.</li>
                        <li>She Founded a brand called Vedkosh keeping in my healthy foods. the plant-based protein sources and nutrition provided by mother earth.</li>
                        <li>She is also a regular columnist in US Based magazine called “Eagle tribe”.</li>
                        <li>She has conducted many workshops at places like Corporates. Schools and NGOS. A few Of her clients are Enza Zaden India Pvt Ltd Jobizaa Pvt Ltd Shavish HR and Digital marketing Pvt Ltd . Shabdh Education Pvt Ltd. Hoonar Tekwurks. , Mansukh bhai Kothari national school, Whiz kids school.</li>
                        <li>She is also invited as a Guest speaker at an event by UNICEF and CYDA.</li>
                    </ul>
                    <hr />
                    <h1 className='text-xl font-bold'>Contact Me</h1>
                    <div className='flex'>
                        <h1  className='text-xl font-bold'>Email:</h1>
                        <p> dietitian.sharmajikaaata@gmail.com</p>
                    </div>
                   

                </div>



            </div>
        </section>
    )
}

export default Introdutions
