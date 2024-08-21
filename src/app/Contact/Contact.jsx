import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

function Contact() {
    return (
        <section className='max-w-[1360px] '>
            <div className='flex justify-around m-4  max-md:flex-col max-md:h-full  max-w-[1360px] h-screen '>


                <div className=' bg-white w-full ' >
                    {/* <Image className=' bg-cover blur-sm absolute h-full w-full ' height={400} width={400} alt='/' src='/Contact.png' /> */}
                    <div className='pl-10  max-md:pb-10   max-w-[600px] pt-[100px]'>
                        <div className='flex pb-8 gap-1' >
                            <h1 className='font-extrabold text-[#0b0b0b]  text-3xl'>|</h1>
                            <p className='text-xl pt-3 font-semibold'>Contact us</p>
                        </div>
                        <p className='text-medium text-[#333333]'>Check my website and give me feadback to best experince, This aata are create by natureal fautry</p>
                        <div className='pt-8 gap-10 flex justify-center '>
                        <button className=' h-[40px] font-semibold rounded-lg w-[90px] bg-slate-200'>Sign up</button>
                        <button className=' h-[40px] font-semibold rounded-lg w-[90px] bg-slate-200'>Login</button>
                        </div>
                    </div>

                </div>

                <div className='bg-slate-200 max-md:w-full  max-md:h-[450px] rounded-r-lg max-md:gap-6 md:max-w-[500px] w-full flex flex-col justify-around'>

                    <div className='pl-6'>
                        <h1 className='text-lg font-bold pb-1'>Lets get in touch</h1>
                        <p className='text-medium font-normal text-[#333333]'>were open for any suggestion or just to have a chat</p>
                    </div>

                    <div className='flex  gap-1 pl-6'>
                        <LocationOnIcon className='border-1  rounded-full border-white h-10 w-10 p-1' />
                        <div className='flex pt-2 gap-2'>
                            <h1 className='text-medium font-semibold'>Address: </h1>
                            <p>Mandawara kuildiya ki dani, kuchaman city, nagaur (Rajasthan)</p>
                        </div>

                    </div>

                    <div className='flex gap-2 pl-6'>
                        <CallIcon className='border-1  rounded-full border-white h-10 w-10 p-1' />
                        <div className='flex pt-2 gap-2'>
                            <h1 className='text-medium font-semibold'>Phone:</h1>
                            <p>+ 1234 1234 123</p>
                        </div>

                    </div>

                    <div className='flex gap-2 pl-6 '>
                        <EmailIcon className='border-1  rounded-full border-white h-10 w-10 p-1'  />
                        <div className='flex pt-2 gap-2'>
                            <h1 className='text-medium font-semibold'>Email:</h1>
                            <p>aapa@yoursite.com</p>
                        </div>

                    </div>

                    <div className='flex gap-1 pl-6'>
                        <LanguageIcon className='border-1  rounded-full border-white h-10 w-10 p-1'  />
                        <div className='flex pt-2'>
                            <h1>Website yoursite.com</h1>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Contact
