import Image from 'next/image'
import React from 'react'
import Chart from './Chart'

const Hero = () => {
    const method = [
        {name: "Complete Identity Verification", text: "Please Complete Advanced Identity Verification To Get Higher", icon: "/mail.svg", btn: "Verify Now"},
        {name: "2-factor Authentication (2FA)", text: "Please Get Verifacation Code From Google Authenticator To Enable", icon: "/2fa.svg", btn: "Bid"},
        {name: "Buy Crypto With One-click", text: "Buy Crypto With One-click", icon: "/buy.svg", btn: "Buy Crypto"},
    ]
    return (
        <div className='flex flex-col gap-8'>
            <div className='w-full rounded-[32px] border items-center px-8 border-[#333333] flex justify-between h-[106px]'>
                <div className='flex items-center gap-2'>
                    <Image height={58} width={58} src={"/user.svg"} alt='user' />
                    <div >
                        <h2 className='text-[#F5F5F5] text-[16px] font-medium'>
                            User ID
                        </h2>
                        <span className='text-[12px] font-medium text-[#E0E0E0]'>
                            88230293
                        </span>
                    </div>
                </div>
                <div>
                    <h2 className='text-[#F5F5F5] text-[16px] font-medium'>
                        Identity Verification
                    </h2>
                    <span className='text-[12px] font-medium text-[#FFB74D]'>
                        Unverified
                    </span>
                </div>
                <div>
                    <h2 className='text-[#F5F5F5] text-[16px] font-medium'>
                        Security
                    </h2>
                    <span className='text-[12px] font-medium text-[#D32F2F]'>
                        Low
                    </span>
                </div>
                <div >
                    <h2 className='text-[#F5F5F5] text-[16px] font-medium'>
                        Last login
                    </h2>
                    <span className='text-[12px] font-medium text-[#E0E0E0]'>
                        09/16/2025, Austin, Texas
                    </span>
                </div>
                <div >
                    <h2 className='text-[#F5F5F5] text-[16px] font-medium'>
                        Time Zone
                    </h2>
                    <span className='text-[12px] font-medium text-[#E0E0E0]'>
                        Chicago (GMT-6)
                    </span>
                </div>
            </div>
            <div className='bg-[#1C1C1C]  flex flex-col gap-6 py-5 px-8 min-h-[312px] rounded-[32px]'>
                <h2 className='text-[24px] font-medium text-[#F5F5F5]'>
                    Start Your Crypto Journey
                </h2>

                <div className='grid grid-cols-3 gap-6'>
                    {method.map((item, index) => (
                        <div key={index} className='flex flex-col justify-center gap-2.5'>
                            <Image height={50} width={50} src={item.icon} alt={item.name}/>
                            <h2 className='text-[#F5F5F5] text-[20px] font-medium'>
                                {item.name}
                            </h2>
                            <p className='text-[#BDBDBD] text-[12px] font-normal'>
                                {item.text}
                            </p>
                            <button className='w-[100px] h-[32px] rounded-[16px] font-medium text-[12px] cursor-pointer hover:bg-[#FFCD39] hover:text-black text-[#FFCD39] border border-[#FFDA6A]'>
                                {item.btn}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Chart />
        </div>
    )
}

export default Hero