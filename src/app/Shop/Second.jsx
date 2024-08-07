'use client'
import React, { useState } from 'react';
import Slidar from '@/Slider/Sliider'
import Radie from '@/Radio/Radie'

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
        <section className=' max-w-[1360px]'>
 
            <div className='text-md max-md:hidden font-bold text-[#333333] flex w-full justify-between '>

                <div className='flex  gap-10 pl-10'>
                    <h1>Filter by:</h1>
                    <button className='hover:text-yellow-500'>Categories</button>
                    <button onClick={handleToggle} className='hover:text-yellow-500' >Price</button>
                    <button onClick={Rediahandle} className='hover:text-yellow-500'>Status</button>
                </div>


                <div className=' pr-[100px]'>
                    <h1>Short By:</h1>
                </div>


            </div>

            <div className='w-[600px] mt-6 '>
            { showSlidarGroup && ( <Slidar  />  )  }
            { redia && ( <Radie /> ) }

            </div>
        </section>
    )
}

export default Second
