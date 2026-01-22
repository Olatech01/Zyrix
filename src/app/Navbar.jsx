import { Languages, LanguagesIcon, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const menu = [
        { name: "Market", link: "/" },
        { name: "Spot", link: "/about" },
        { name: "Support", link: "/contact" },
        { name: "Blog", link: "/contact" },

    ]
    return (
        <div className='flex items-center justify-between px-20 py-6'>
            <div className='flex items-center gap-6'>
                <Image src="/logo.svg" alt="Zyrix Logo" width={114} height={48} />
                <div className='flex gap-4 text-[#BDBDBD] text-[18px] font-normal'>
                    {menu.map((item, index) => (
                        <Link key={index} href={item.link}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <Search className='text-[#FFC107]'/>
                <LanguagesIcon className='text-[#BDBDBD]'/>
                <button className='bg-[#FFC107] text-[18px] font-medium w-[117px] h-[48px] rounded-[32px]'>Sign Up</button>
                <button className='text-[18px] font-medium text-white border border-[#BDBDBD] w-[117px] h-[48px] rounded-[32px]'>Login</button>
            </div>
        </div>
    )
}

export default Navbar