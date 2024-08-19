import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function About() {


  return (
    <section className='w-full  h-full '>
      <div className='h-[120px]  mx-auto w-full mb-[30px]'>
        <Image alt='photo' className='h-[140px] w-full z-0  absolute' height={1000} width={1400} src='/shop-theme.jpg' />
        <div className=' flex flex-col mx-auto pt-[50px]  items-center relative  '>
          <h1 className='font-black text-2xl text-[#444444]'>About US</h1>
          <Link className='hover:text-white font-semibold text-[#444444]' href='/'>Home</Link>
        </div>
      </div>

      <div className='flex pr-6 mx-auto max-w-[1200px] justify-between p-4 items-center h-full   gap-6 max-sm:flex-col '>
        <div className='sm:w-[600px] '>
          <h1 className='text-3xl font-bold pb-4'>Our Story</h1>
          <p className='text-sm font-normal text-[#333333]'>Founded in the year 2015 by Sangeeta Prabhakar Sharma and Mr. Prabhakar Sharma, Sharma Ji Ka Atta ( MOHKANT VENTURES PRIVATE LIMITED ) gives you freshly milled atta of your own choice. We started it to provide a solution to people who are looking for lower adulteration, healthier versions, and even lesser chemical content in their daily food routine. The soils of the farms where the cultivation of these staples happen havent been messed up and tempered with harsh chemicals and fertilizers. We take pride in the fact that we dont let contamination and compromises come in the way of the purest harvests. </p>
          <p className='text-sm font-normal text-[#333333]'>Starting from a small township in Pune, today we serve customers all across Pune. Our vision turned into our passion to provide services to the residents of the township due to no flour mill being present nearby. Our range of attas is freshly milled with each batch of super nutritious grains. We consciously opt for grains that you can customize as per your needs without compromising on quality. We ensure that what reaches your plate doesnt harm your palette.</p>
        </div>

        <div>
          <Image className='h-[400px] w-[900px] ' height={400} width={400} alt='/' src='/About.png' />
        </div>

      </div>

      <div className='p-4 mx-auto max-w-[1200px] '>
        <h1 className='text-xl font-bold pb-4'>Hour Of Operation </h1>
        <div className='flex justify-between max-w-[600px] px-8'>
          <div className='text-medium font-semibold '>
            <h1>Sunday</h1>
            <h1>Monday</h1>
            <h1>Tuesday</h1>
            <h1>Wednesday</h1>
            <h1>Thursday</h1>
            <h1>Friday</h1>
            <h1>Saturday</h1>
          </div>
          <div className='text-medium font-semibold '>
            <h1>10:00 AM - 4:00 PM</h1>
            <h1>8:00 AM - 10:00 PM</h1>
            <h1>8:00 AM - 10:00 PM</h1>
            <h1>8:00 AM - 10:00 PM</h1>
            <h1>8:00 AM - 10:00 PM</h1>
            <h1>8:00 AM - 10:00 PM</h1>
            <h1>8:00 AM - 10:00 PM</h1>

          </div>
        </div>
      </div>

      <div className='p-4 mt-20 mx-auto max-w-[1200px] '>
        <h1 className='text-3xl font-bold text-center pb-4'>Our Team</h1>
        <div className='flex pt-10 items-center justify-center gap-10 max-sm:flex-col'>
          <div className='text-center '>
            <Image className='  h-[200px] w-[200px] rounded-full' height={300} width={300} alt='/' src='/Shop-4.png' />
            <h1 className=' pt-4 text-lg font-medium'>Sangeeta Prabhakar</h1>
            <h1 className='font-medium text-base text-[#333333]'>Founder</h1>
          </div>
          <div  className='text-center '>
            <Image className=' h-[200px] w-[200px] rounded-full' height={200} width={200} alt='/' src='/Shop-5.png' />
            <h1  className=' pt-4 text-lg font-medium'>Prabhakar Sharma</h1>
            <h1 className='font-medium text-base text-[#333333]'>Co-founder</h1>
          </div>

        </div>
      </div>

    </section>
  )
}

export default About
