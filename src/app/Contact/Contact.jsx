import React from 'react'
import Image from 'next/image'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

function Contact() {
    return (
        <section className='max-w-[1360px] '>
            <div className='flex justify-around m-4 bg-slate-200 max-w-[1360px] h-screen '>


                <div className=' bg-amber-200 w-full text-center ' >
                    {/* <Image className=' bg-cover blur-sm absolute h-full w-full ' height={400} width={400} alt='/' src='/Contact.png' /> */}
                    <div className=''>
                        <div className='' >
                            <h1>|</h1>
                            <p>Contact us</p>
                        </div>
                        <p>boom gouys kya kar reha ho</p>
                        <button className=''>heyy</button>
                    </div>

                </div>

                <div className='bg-red-500 max-w-[400px] w-full flex flex-col justify-around text-center'>

                    <div>
                        <h1>Address</h1>
                        <p>rajasthan</p>
                    </div>

                    <div className='flex text-center itenms-cnter'>
                        <LocationOnIcon />
                        <div>
                            <h1>Address</h1>
                            <p>rajasthan</p>
                        </div>

                    </div>

                    <div>
                        <h1>Address</h1>
                        <p>rajasthan</p>
                    </div>

                    <div>
                        <h1>Address</h1>
                        <p>rajasthan</p>
                    </div>

                    <div>
                        <h1>Moblie no.</h1>
                        <p>y7356876</p>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Contact
