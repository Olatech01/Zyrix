import React from 'react';

const MarketTrend = () => {
    const cryptoData = [
        {
            rank: 1,
            name: 'Bitcoin',
            symbol: 'BTC',
            price: '$94,456.987',
            change: '+16.5',
            trend: 'up',
            icon: '₿',
            iconBg: 'bg-orange-500'
        },
        {
            rank: 2,
            name: 'Ethereum',
            symbol: 'ETH',
            price: '$50,632.964',
            change: '-10.8',
            trend: 'down',
            icon: 'Ξ',
            iconBg: 'bg-gray-600'
        },
        {
            rank: 3,
            name: 'Tether',
            symbol: 'USDT',
            price: '$15,896.123',
            change: '-5.8',
            trend: 'down',
            icon: '₮',
            iconBg: 'bg-emerald-500'
        },
        {
            rank: 4,
            name: 'Ripple',
            symbol: 'XRP',
            price: '$5,548.621',
            change: '+14.6',
            trend: 'up',
            icon: '✕',
            iconBg: 'bg-gray-700'
        },
        {
            rank: 4,
            name: 'Dogecoin',
            symbol: 'DOGE',
            price: '$15,548.621',
            change: '+14.6',
            trend: 'down',
            icon: 'Ð',
            iconBg: 'bg-yellow-600'
        },
        {
            rank: 4,
            name: 'Binance Coin',
            symbol: 'BNB',
            price: '$55,548.621',
            change: '+14.6',
            trend: 'up',
            icon: 'B',
            iconBg: 'bg-yellow-500'
        }
    ];

    const MiniChart = ({ trend }) => {
        const points = trend === 'up'
            ? 'M0,20 L10,18 L20,15 L30,16 L40,12 L50,10 L60,8'
            : 'M0,8 L10,10 L20,12 L30,11 L40,15 L50,18 L60,20';

        return (
            <svg width="60" height="28" viewBox="0 0 60 28" className="inline-block">
                <path
                    d={points}
                    fill="none"
                    stroke={trend === 'up' ? '#22c55e' : '#ef4444'}
                    strokeWidth="2"
                />
            </svg>
        );
    };

    return (
        <div className="">
            <h2 className="text-[#F5F5F5] font-medium text-[28px] md:text-[32px] mb-6">
                <span className="text-[#FFC107]">Market</span> Trend
            </h2>

            <div className="overflow-x-auto">
                <div className="min-w-[800px] px-4 bg-[#1C1C1C] rounded-[20px]">
                    <table className="w-full ">
                        <thead>
                            <tr className="border-b border-[#333333]">
                                <th className="text-left text-gray-400 font-normal text-sm py-4 px-4">#</th>
                                <th className="text-left text-gray-400 font-normal text-sm py-4 px-4">Name</th>
                                <th className="text-left text-gray-400 font-normal text-sm py-4 px-4">Price</th>
                                <th className="text-left text-gray-400 font-normal text-sm py-4 px-4">24h Changes</th>
                                <th className="text-left text-gray-400 font-normal text-sm py-4 px-4">Chart</th>
                                <th className="text-left text-gray-400 font-normal text-sm py-4 px-4">Action</th>
                            </tr>
                        </thead>
                        <tbody className='mt-4'>
                            {cryptoData.map((crypto, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-[#141414] rounded-[16px] transition-colors"
                                >
                                    <td className="py-5 px-4 text-gray-300">{crypto.rank}</td>
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-9 h-9 rounded-full ${crypto.iconBg} flex items-center justify-center text-white font-bold text-lg`}>
                                                {crypto.icon}
                                            </div>
                                            <div>
                                                <div className="text-white font-medium">{crypto.name}</div>
                                                <div className="text-gray-500 text-sm">{crypto.symbol}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 text-white font-medium">{crypto.price}</td>
                                    <td className="py-5 px-4">
                                        <span className={crypto.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                                            {crypto.change}
                                        </span>
                                    </td>
                                    <td className="py-5 px-4">
                                        <MiniChart trend={crypto.trend} />
                                    </td>
                                    <td className="py-5 px-4">
                                        <button className="text-[#FFC107] hover:text-[#FFD54F] transition-colors font-medium">
                                            Trade
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MarketTrend;