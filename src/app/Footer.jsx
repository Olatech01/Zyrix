import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {

    const services = [
        { name: "Exchange", link: "/" },
        { name: "Spot", link: "/about" },
        { name: "P2P Trading", link: "/contact" },
        { name: "Securities Trading", link: "/contact" },
    ]

    const products =[
        { name: "Mobile App", link: "/" },
        { name: "Lending Pro", link: "/about" },
        { name: "Reporting APP", link: "/contact" },
    ]

    const company = [
        { name: "About Us", link: "/" },
        { name: "Affiliates", link: "/about" },
        { name: "Blog", link: "/contact" },
        { name: "Announcement", link: "/contact" },
    ]

    const support = [   
        { name: "Help Center", link: "/" },
        { name: "Contact Us", link: "/about" },
        { name: "API Support", link: "/contact" },
        { name: "Fees", link: "/contact" },
    ]
  return (
    <div className='flex flex-col py-10 items-center'>
        <div className='flex items-center justify-between gap-6 w-full'>
            <Image src="/logo.svg" alt="Zyrix Logo" width={114} height={48} />
            <span className='border border-[#333333] w-full'/>
            <div className='flex gap-3 items-center text-[#E0E0E0]'>
                <Instagram />
                <Facebook />
                <Twitter />
                <Linkedin />
            </div>
        </div>
        <div className='grid grid-cols-4 mt-6 w-[700px]'>
            <div className='flex flex-col gap-2'>
                <h2 className='text-[#F5F5F5] text-[20px] font-medium mb-2'>
                    Services
                </h2>
                {services.map((item, index) => (
                    <div key={index} className='text-[#E0E0E0] text-[14px] font-normal hover:text-white transition-colors cursor-pointer'>
                        {item.name}
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-2'>
                <h2 className='text-[#F5F5F5] text-[20px] font-medium mb-2'>
                    Products
                </h2>
                {products.map((item, index) => (
                    <div key={index} className='text-[#E0E0E0] text-[14px] font-normal hover:text-white transition-colors cursor-pointer'>
                        {item.name}
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-2'>
                <h2 className='text-[#F5F5F5] text-[20px] font-medium mb-2'>
                    Company
                </h2>
                {company.map((item, index) => (
                    <div key={index} className='text-[#E0E0E0] text-[14px] font-normal hover:text-white transition-colors cursor-pointer'>
                        {item.name}
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-2'>
                <h2 className='text-[#F5F5F5] text-[20px] font-medium mb-2'>
                    Support
                </h2>
                {support.map((item, index) => (
                    <div key={index} className='text-[#E0E0E0] text-[14px] font-normal hover:text-white transition-colors cursor-pointer'>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Footer