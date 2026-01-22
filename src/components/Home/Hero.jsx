import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='flex items-center justify-between mt-8 w-full pl-[10rem]'>
            <div className='flex flex-col gap-2'>
                <h2 className='text-[70px] font-semibold text-[#F5F5F5] leading-20'>
                    Trade, Invest, and Build <br /> Your <span className='text-[#FFC107]'>Future</span>!
                </h2>
                <div className='flex gap-4 text-[#BDBDBD] font-medium text-[20px]'>
                    <span>
                        Safe
                    </span>
                    <span>
                        Fast
                    </span>
                    <span>
                        Stable
                    </span>
                    <span>
                        Reliable
                    </span>
                </div>
                <div className='mt-6 border border-[#FFC107] w-[259px] h-[64px] p-1 flex items-center justify-center rounded-[32px] text-[#141414] font-medium text-[24px]'>
                    <button className='bg-[#FFC107] text-[18px] font-medium rounded-full w-full h-full'>
                        Start Trading
                    </button>
                </div>
            </div>
            <Image src="/scan.svg" alt="Hero Image" width={520} height={606} />
        </div>
    )
}

export default Hero