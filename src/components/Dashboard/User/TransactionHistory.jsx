import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const TransactionHistory = () => {
    const transactions = [
        { crypto: 'BTC', icon: '/btc.svg', color: 'bg-yellow-500', id: '1SJshdscickIx...', date: '2025-06-12', amount: '+$71,3 BTC', amountColor: 'text-green-400' },
        { crypto: 'ETH', icon: '/eth.svg', color: 'bg-gray-400', id: '1SJshdscickIx...', date: '2025-06-13', amount: '+$71,3 ETH', amountColor: 'text-green-400' },
        { crypto: 'BNB', icon: '/bnb.svg', color: 'bg-yellow-400', id: '1SJshdscickIx...', date: '2025-06-14', amount: '+$71,3 BNB', amountColor: 'text-green-400' },
        { crypto: 'USD', icon: '/usdt.svg', color: 'bg-green-400', id: '1SJshdscickIx...', date: '2025-06-15', amount: '+$71,3 USDT', amountColor: 'text-green-400' },
        { crypto: 'TRX', icon: '/trx.svg', color: 'bg-red-500', id: '1SJshdscickIx...', date: '2025-06-16', amount: '+$71,3 TRX', amountColor: 'text-green-400' },
        { crypto: 'UNI', icon: '/uni.svg', color: 'bg-pink-400', id: '1SJshdscickIx...', date: '2025-06-17', amount: '+$71,3 UNI', amountColor: 'text-green-400' },
        { crypto: 'UNI', icon: '/uni.svg', color: 'bg-pink-400', id: '1SJshdscickIx...', date: '2025-06-17', amount: '+$71,3 UNI', amountColor: 'text-green-400' },
        { crypto: 'ETC', icon: '/eth.svg', color: 'bg-green-500', id: '1SJshdscickIx...', date: '2025-06-18', amount: '+$71,3 ETC', amountColor: 'text-green-400' },
        { crypto: 'BTC', icon: '/btc.svg', color: 'bg-yellow-500', id: '1SJshdscickIx...', date: '2025-06-19', amount: '+$71,3 BTC', amountColor: 'text-green-400' },
    ];

    const pageNumbers = [1, 2, 3, '...', 10, 11];
    const currentPage = 1;

    return (
        <div className="min-h-screen bg-[#1a1a1a] rounded-[32px] text-white p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Transaction History</h1>

                {/* Table wrapper for horizontal scroll on small screens */}
                <div className="overflow-x-auto">
                    <div className="min-w-[640px]">
                        {/* Header */}
                        <div className="grid grid-cols-4 gap-4 pb-4 border-b border-gray-700 mb-4">
                            <div className="text-[#F5F5F5] text-[16px] font-normal">Crypto trade</div>
                            <div className="text-[#F5F5F5] text-[16px] font-normal">ID</div>
                            <div className="text-[#F5F5F5] text-[16px] font-normal">Date</div>
                            <div className="text-[#F5F5F5] text-[16px] font-normal text-right">Amount</div>
                        </div>

                        {/* Transaction rows */}
                        <div className="space-y-3">
                            {transactions.map((transaction, index) => (
                                <div key={index} className="grid grid-cols-4 gap-4 items-center py-3 hover:bg-gray-800/50 rounded-lg transition-colors">
                                    <div className="flex items-center gap-3">
                                        <Image height={24} width={24} src={transaction.icon} alt={transaction.crypto} />
                                        <span className="font-medium">{transaction.crypto}</span>
                                    </div>
                                    <div className="text-[#F5F5F5] text-sm">{transaction.id}</div>
                                    <div className="text-[#F5F5F5] text-[16px]">{transaction.date}</div>
                                    <div className={`${transaction.amountColor} text-[16px] font-medium text-right`}>
                                        {transaction.amount}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-800 transition-colors">
                        <ChevronLeft size={20} />
                    </button>

                    {pageNumbers.map((page, index) => (
                        <button
                            key={index}
                            className={`w-10 h-10 rounded-lg transition-colors ${page === currentPage
                                ? 'bg-yellow-500 text-black font-semibold'
                                : 'hover:bg-gray-800 text-gray-300'
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-800 transition-colors">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;