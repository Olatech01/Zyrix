import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import Image from 'next/image';
import React from 'react'

const Transaction = () => {
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
        <div className="overflow-hidden rounded-[32px] p-[32px] bg-[#1C1C1C]">
            <div className="max-w-full overflow-x-auto">
                <div className="min-w-[1102px]">
                    <h2 className='text-[24px] text-[#F5F5F5] font-medium'>
                        Transaction <span className='text-[#FFC107]'>History</span>
                    </h2>

                    <Table>
                        <TableHeader className="border-b border-[#4C4C4C]">
                            <TableRow>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-[#F5F5F5] text-start text-theme-xs dark:text-gray-400"
                                >
                                    Crypto trade
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-[#F5F5F5] text-start text-theme-xs dark:text-gray-400"
                                >
                                    ID
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-[#F5F5F5] text-start text-theme-xs dark:text-gray-400"
                                >
                                    Date
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-[#F5F5F5] text-start text-theme-xs dark:text-gray-400"
                                >
                                    Amount
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {transactions.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="px-4 py-3 text-[#FCFCFD] text-start text-[16px] font-medium">
                                        <div className="flex items-center gap-3">
                                            <Image height={24} width={24} src={item.icon} alt={item.crypto} />
                                            <span className="font-medium">{item.crypto}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-[#FCFCFD] text-start text-[14px] font-normal">
                                        {item.id}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-[#FCFCFD] text-start text-[16px] font-normal">
                                        {item.date}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-green-400 text-start text-[16px] font-normal">
                                        {item.amount}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Transaction