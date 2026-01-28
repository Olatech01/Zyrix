import Image from 'next/image'
import React from 'react'
import { MdCurrencyExchange } from "react-icons/md";
import { PiHandWithdraw } from "react-icons/pi";
import { PiHandDeposit } from "react-icons/pi";


const AssetCard = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='grid grid-cols-3 gap-5'>
                <div className='bg-[#1C1C1C] h-[218px] flex px-4 py-5 items-center justify-between rounded-[32px]'>
                    <div className='flex flex-col justify-between h-full'>
                        <div>
                            <div className='flex items-center gap-2.5'>
                                <Image height={24} width={24} src={"/btc.svg"} alt='image'/>
                                <span className='text-[16px] font-medium text-white'>
                                    Bitcoin
                                </span>
                            </div>
                            <span className='text-[#1ECB4F] text-[14px]'>
                                +14.25%
                            </span>
                        </div>
                        <div>
                            <h2 className='text-[24px] font-medium text-white'>
                                6,882 <span className='text-[14px]'>btc</span>
                            </h2>
                            <p className='text-[#BDBDBD] text-[14px]'>
                                1 BTC = $95,518.00
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between h-full'>
                        <div className='w-[127px] h-[37px] rounded-[32px] text-[#FFC107] flex items-center justify-between px-3.5 border-2 border-[#FFC107]'>
                            <PiHandDeposit size={20}/>
                            <span className='text-[16px] font-medium'>
                                Deposit
                            </span>
                        </div>
                        <div className='w-[127px] h-[37px] rounded-[32px] text-[#FFC107] flex items-center justify-between px-3.5 border-2 border-[#FFC107]'>
                            <PiHandWithdraw />
                            <span className='text-[16px] font-medium'>
                                Withdraw
                            </span>
                        </div>
                        <div className='w-[127px] h-[37px] rounded-[32px] text-[#FFC107] flex items-center justify-between px-3.5 border-2 border-[#FFC107]'>
                            <MdCurrencyExchange />
                            <span className='text-[16px] font-medium'>
                                Exchange
                            </span>
                        </div>
                    </div>
                </div>
                <div className='bg-[#1C1C1C] h-[218px] rounded-[32px] py-5 flex flex-col justify-between'>
                    <div className='flex flex-col gap-2 px-3.5'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-1.5'>
                                <Image height={24} width={24} src={"/trx.svg"} alt='image' />
                                <span className='text-[16px] font-medium text-[#F5F5F5]'>
                                    Tron
                                </span>
                            </div>
                            <select className='text-[#F5F5F5] outline-0 border-0 text-[14px]'>
                                <option value="">
                                    USD
                                </option>
                                <option value="">
                                    ETH
                                </option>
                            </select>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-[24px] font-medium text-white'>
                                1,450
                            </h2>
                            <span className='text-[#BDBDBD] text-sm font-normal'>
                                1 BTC = $950,518.00
                            </span>
                        </div>
                    </div>
                    <Image height={100} width={100} src={"/greenGraph.svg"} alt='image' className='w-full' />
                </div>


                <div className='bg-[#1C1C1C] flex flex-col justify-between py-5 h-[218px] rounded-[32px]'>
                    <div className='flex flex-col gap-2 px-3.5'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-1.5'>
                                <Image height={24} width={24} src={"/eth.svg"} alt='image' />
                                <span className='text-[16px] font-medium text-[#F5F5F5]'>
                                    Ethereum
                                </span>
                            </div>
                            <select className='text-[#F5F5F5] outline-0 border-0 text-[14px]'>
                                <option value="">
                                    USD
                                </option>
                                <option value="">
                                    ETH
                                </option>
                            </select>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-[24px] font-medium text-white'>
                                5,356
                            </h2>
                            <span className='text-[#BDBDBD] text-sm font-normal'>
                                1 ETH = $950,518.00
                            </span>
                        </div>
                    </div>
                    <Image height={100} width={100} src={"/redGraph.svg"} alt='image' className='w-full h-[107.5px]' />
                </div>
            </div>
        </div>
    )
}

export default AssetCard