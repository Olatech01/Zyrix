"use client"
import { LanguagesIcon, Link, Search } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
    const router = useRouter()
    const menu = [
        { name: "Market", link: "/" },
        { name: "Spot", link: "/spot" },
        { name: "Support", link: "/support" },
        { name: "Blog", link: "/blog" },

    ]
    return (
        <div className='flex items-center fixed top-0 left-0 right-0 z-50 justify-between px-20 py-4'>
            <div className='flex items-center gap-6'>
                <Image src="/logo.svg" alt="Zyrix Logo" width={114} height={48} />
                <div className='flex gap-4 text-[#BDBDBD] text-[18px] font-normal'>
                    {menu.map((item, index) => (
                        <div key={index} onClick={() => router.push(item.link)} className='cursor-pointer hover:text-white duration-300'>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <Search className='text-[#FFC107]' />
                <LanguagesIcon className='text-[#BDBDBD]' />
                {/* <div href={"/auth/signup"}>
                    <button className='bg-[#FFC107] text-[18px] font-medium cursor-pointer w-[117px] h-[48px] rounded-[32px]'>
                        Sign Up
                    </button>
                </div>
                <div href={"/auth/login"}>
                    <button className='text-[18px] font-medium text-white border border-[#BDBDBD] w-[117px] h-[48px] rounded-[32px]'>Login</button>
                </div> */}
            </div>
        </div>
    )
}

export default Header