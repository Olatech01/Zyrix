import React from 'react'

const Hero = () => {
    const usage = [
        {name: "Select the Token and Copy the Wallet Address", text: "Select the token and network you want to deposit and copy the wallet address shown on this page."},
        {name: "Withdraw to wallet Address", text: "Paste the copied wallet address on other exchange platforms and submit a withdrawal application."},
        {name: "Transfer Conirmation", text: "Wait for the blockchain network to confirm the transfer."},
        {name: "Deposit Succeseful", text: "After the blockchain network has confirmed the transfer, Zyrix will transfer the asset to your wallet address."},
    ]
  return (
    <div className='h-[231px] bg-[#1C1C1C] rounded-[32px] p-[32px]'>
        <div className='border-t grid grid-cols-4 gap-[70px] border-[#4C4C4C] w-full relative'>
            {usage.map((item, index) => (
                <div key={index} className='flex flex-col gap-3 relative'>
                    <div className='absolute -top-[17px] left-0'>
                        <span className='bg-[#FDB022] text-black font-bold text-[16px] w-[32px] h-[32px] rounded-full flex items-center justify-center'>
                            {index + 1}
                        </span>
                    </div>
                    <h2 className='text-[#F5F5F5] mt-6 text-[16px] font-medium'>
                        {item.name}
                    </h2>
                    <p className='text-[#BDBDBD] text-[14px] font-normal'>
                        {item.text}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Hero