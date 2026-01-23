import { LanguagesIcon, Link, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    const menus = [
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
                    {menus.map((item, index) => (
                        <Link key={index} href={item.link}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <Search className='text-[#FFC107]' />
                <LanguagesIcon className='text-[#BDBDBD]' />
                <Link href={"/auth/signup"}>
                    <button className='bg-[#FFC107] text-[18px] font-medium cursor-pointer w-[117px] h-[48px] rounded-[32px]'>
                        Sign Up
                    </button>
                </Link>
                <Link href={"/auth/login"}>
                    <button className='text-[18px] font-medium text-white border border-[#BDBDBD] w-[117px] h-[48px] rounded-[32px]'>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Header