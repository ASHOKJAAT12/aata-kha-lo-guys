import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <>
      <section className='h-full w-full'>
        <div>
          <Image alt='photo' className=' h-screen w-full  ' height={400} width={400} src='/home-theme-1.png' />
        </div>

        <div className='flex max-md:flex-col max-md:gap-10 items-center pt-10 px-[40px] md:justify-around text-center'>

          <div className=''>
            <Image alt='photo' className='p-4 h-[65px]  w-[65px]  mx-auto ' height={20} width={20} src='/transport.png' />
            <h1 className=' font-extrabold text-lg  m-[15px 0px 3px] text-[#333333]'>Free Delivery</h1>
            <p className='text-[#999999]  h-[44px]'>Free Delivery for orders over ₹750 for Pune people </p>
          </div>

          <div>
            <Image alt='photo' className='p-4 h-[65px] w-[65px] mx-auto' height={30} width={30} src='/refresh.png' />
            <h1 className=' font-extrabold text-lg  m-[15px 0px 3px] text-[#333333]'>Return & Exchange</h1>
            <p className='text-[#999999]  h-[44px]'>We have 7 days return policy and 100% exchange guarantee</p>
          </div>

          <div>
            <Image alt='photo' className='p-4 h-[65px] w-[65px] mx-auto' height={30} width={30} src='/gift-box.png' />
            <h1 className=' font-extrabold text-lg  m-[15px 0px 3px] text-[#333333]'>Payment Secure</h1>
            <p className='text-[#999999]  h-[44px]'>We ensure secure payment for your orders</p>
          </div>

        </div>
      </section>

   
    </>
  )
}

export default Hero
