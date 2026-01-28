import Image from 'next/image'
import React from 'react'

const Market = () => {
    const market = [
        { name: 'Bitcoin', symbol: 'BTC', price: "$98,004.77", change: 2.5, graph: "/greenGraph.svg", image: "/btc.svg" },
        { name: 'Ethereum', symbol: 'ETH', price: "$3,635.80", change: -1.2, graph: "/redGraph.svg", image: "/eth.svg" },
        { name: 'Dogecoin', symbol: 'XRP', price: "$0.38", change: 0.8, graph: "/greenGraph.svg", image: "/doge.svg" },
        { name: 'Binance coin', symbol: 'LTC', price: "$705.22", change: -0.5, graph: "/redGraph.svg", image: "/bnb.svg" },
    ]
    return (
        <div className='bg-[#1C1C1C] rounded-[32px] h-[308px] px-6 py-8'>
            <h2 className='text-[#F5F5F5] text-[24px] font-medium'>
                Market
            </h2>
            <div className='grid grid-cols-4 gap-4'>
                {market.map((item, index) => (
                    <div key={index} className='space-x-4 h-[192px] flex flex-col justify-between pt-4 bg-[#141414] rounded-[24px] mt-6'>
                        <div className='px-3'>
                            <div className='flex gap-2'>
                                <Image height={24} width={24} src={item.image} alt={item.symbol}/>
                                <h2 className='text-[#F5F5F5] text-[18px] font-medium'>
                                    {item.name}
                                </h2>
                            </div>
                            <div className='flex items-center justify-between'>
                                <span className='text-[#F5F5F5] text-[24px] font-medium'>
                                    {item.price}
                                </span>
                                <span className={`text-[14px] font-medium ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                    {item.change >= 0 ? `+${item.change}%` : `${item.change}%`}
                                </span>
                            </div>
                        </div>
                        <Image height={80} width={285} src={item.graph} alt={item.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Market