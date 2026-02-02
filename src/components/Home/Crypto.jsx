import Image from 'next/image'
import React from 'react'

const Crypto = () => {
    const data = [
        {
            image: "/bitcoin.svg",
            name: "Insight",
            color: "Gain Valuable",
            text: "Unlock data-driven insights to make smarter crypto decisions."
        },
        {
            image: "/quick.svg",
            name: "Transactions",
            color: "Quick",
            text: "Send and receive crypto instantly with lightning-fast transaction speeds."
        },
        {
            image: "/financial.svg",
            name: "Overview",
            color: "Financial",
            text: "Get a clear, comprehensive view of your crypto portfolio and finances."
        },
    ]
    return (
        <div>
            <h2 className='text-[#F5F5F5] font-medium text-[32px]'>
                <span className='text-[#FFC107]'>Powering</span> Your Crypto Journey
            </h2>

            <div className='grid md:grid-cols-3 grid-cols-1 w-full gap-6 items-center mt-8'>
                {data.map((item, index) => (
                    <div key={index} className='flex bg-[#1C1C1C] rounded-[10px] md:h-[520px] w-full min-h-[320px] md:p-4 px-4 py-6 flex-col justify-between'>
                        <Image src={item.image} alt={item.name} width={326} height={344} />
                        <div>
                            <h3 className='text-[20px] font-semibold text-[#F5F5F5] mt-4'>
                               <span className='text-[#FFC107]'>{item.color}</span> {item.name}
                            </h3>
                            <p className='text-[#BDBDBD] font-normal text-[16px] mt-2 w-[280px]'>
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='bg-[#1C1C1C] w-full min-h-[426px] rounded-[16px] mt-6 flex md:flex-row flex-col items-center md:justify-between px-8'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[24px] font-medium text-[#F5F5F5]'>
                        <span className='text-[#FFC107]'>Trusted</span> exchange platform
                    </h2>
                    <p className='md:w-[284px] w-full text-[#E0E0E0] text-[14px]'>
                        Empowering you to streamline your crypto transactions effortlessly while keeping you ahead in the ever-evolving decentralized finance ecosystem. Join a network of forward-thinkers who trust our secure and innovative solutions to navigate the world of digital assets with confidence and ease
                    </p>
                </div>
                <Image src="/token.svg" alt="Crypto Background" width={774} height={400} className='md:w-[774px] w-full'/>
            </div>
        </div>
    )
}

export default Crypto