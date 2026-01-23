"use client";
import { Home, Wallet, BarChart3, Settings, ChevronDown, Coins, ArrowDownToLine, ArrowUpFromLine, Lock, User, FileText } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const [expandedMenu, setExpandedMenu] = useState(null);
    const pathname = usePathname()

    const menu = [
        {
            name: "Dashboard", path: "/dashboard", icon: <Home size={20} />
        },
        {
            name: "Wallet", icon: <Wallet size={20} />,
            subMenu : [
                {
                    name: "Asset", path: "/dashboard/wallet/asset", icon: <Coins size={18} />,
                },
                {
                    name: "Deposit", path: "/dashboard/wallet/deposit", icon: <ArrowDownToLine size={18} />,
                },
                {
                    name: "Withdraw", path: "/dashboard/wallet/withdraw", icon: <ArrowUpFromLine size={18} />,
                },
            ]
        },
        {
            name: "Orders", icon: <BarChart3 size={20} />,
            subMenu : [
                {
                    name: "Spot History", path: "/dashboard/orders/spot-history", icon: <BarChart3 size={18} />,
                },
                {
                    name: "Transaction History", path: "/dashboard/orders/transaction-history", icon: <FileText size={18} />,
                },
            ]
        },
        {
            name: "Settings", icon: <Settings size={20} />,
            subMenu : [
                {
                    name: "Overview", path: "/dashboard/settings/overview", icon: <User size={18} />,
                },
                {
                    name: "Security", path: "/dashboard/settings/security", icon: <Lock size={18} />,
                },
                {
                    name: "Identification", path: "/dashboard/settings/identification", icon: <FileText size={18} />,
                },
                {
                    name: "Account", path: "/dashboard/settings/account", icon: <User size={18} />,
                },
            ]
        },
    ]

    const toggleMenu = (index) => {
        setExpandedMenu(expandedMenu === index ? null : index);
    };

    return (
        <div className="fixed left-0 top-24 w-64 border-r border-neutral-800 h-[calc(100vh-96px)] overflow-y-auto z-40">
            <div className="p-6">
                <nav className="space-y-2">
                    {menu.map((item, index) => (
                        <div key={index}>
                            {item.subMenu ? (
                                <div>
                                    <button
                                        onClick={() => toggleMenu(index)}
                                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-white transition-colors font-medium"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-yellow-400 group-hover:text-black">{item.icon}</span>
                                            <span>{item.name}</span>
                                        </div>
                                        <ChevronDown
                                            size={18}
                                            className={`transition-transform ${expandedMenu === index ? 'rotate-180' : ''}`}
                                        />
                                    </button>

                                    {/* Submenu */}
                                    {expandedMenu === index && (
                                        <div className="pl-4 mt-2 space-y-1 border-l border-neutral-700">
                                            {item.subMenu.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    href={subItem.path}
                                                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-neutral-300 hover:bg-yellow-400 hover:text-black transition-colors text-sm"
                                                >
                                                    <span>{subItem.icon}</span>
                                                    <span>{subItem.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href={item.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-white ${pathname === item.path ? "border-l bg-gradient from-[#FFCD39] to-[#FFC107] border-amber-300 rounded-[32px]" : ""} hover:text-black transition-colors font-medium`}
                                >
                                    <span className="text-yellow-400 group-hover:text-black">{item.icon}</span>
                                    <span>{item.name}</span>
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default Sidebar