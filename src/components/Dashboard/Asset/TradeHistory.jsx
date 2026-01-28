import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const TradeHistory = () => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'text-green-500 dark:text-green-400';
            case 'Pending':
                return 'text-yellow-500 dark:text-yellow-400';
            case 'Failed':
                return 'text-red-500 dark:text-red-400';
            default:
                return 'text-gray-500 dark:text-gray-400';
        }
    };

    const typeColor = (type) => {
        switch (type) {
            case 'Buy':
                return 'text-green-500 dark:text-green-400';
            case 'Sell':
                return 'text-red-500 dark:text-red-400';
            default:
                return 'text-gray-500 dark:text-gray-400';
        }
    }

    const tradeHistory = [
        {
            dateTime: "15/04/24 - 15:50:29",
            pair: "BNB/USDT",
            type: "Buy",
            price: "$56,878.27",
            amount: "1.5",
            status: "Pending"
        },
        {
            dateTime: "15/04/24 - 15:50:29",
            pair: "BNB/USDT",
            type: "Sell",
            price: "$56,878.27",
            amount: "1.5",
            status: "Failed"
        },
        {
            dateTime: "15/04/24 - 15:50:29",
            pair: "BNB/USDT",
            type: "Buy",
            price: "$56,878.27",
            amount: "1.5",
            status: "Completed"
        },
        {
            dateTime: "15/04/24 - 15:50:29",
            pair: "BNB/USDT",
            type: "Buy",
            price: "$56,878.27",
            amount: "1.5",
            status: "Completed"
        },
        {
            dateTime: "15/04/24 - 15:50:29",
            pair: "BNB/USDT",
            type: "Sell",
            price: "$56,878.27",
            amount: "1.5",
            status: "Failed"
        },
        {
            dateTime: "15/04/24 - 15:50:29",
            pair: "BNB/USDT",
            type: "Sell",
            price: "$56,878.27",
            amount: "1.5",
            status: "Failed"
        },
        {
            dateTime: "15/04/24 - 15:50:29",
            pair: "BNB/USDT",
            type: "Sell",
            price: "$56,878.27",
            amount: "1.5",
            status: "Failed"
        },
    ]
    return (
        <div className="overflow-hidden rounded-[32px] p-[32px] bg-[#1C1C1C]">
            <div className="max-w-full overflow-x-auto">
                <div className="min-w-[1102px]">
                    <h2 className='text-[24px] text-[#F5F5F5] font-medium'>
                        Trade History
                    </h2>
                    <Table className="mt-[40px]">
                        <TableHeader className="border-b border-[#4C4C4C]">
                            <TableRow>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-[#F5F5F5] text-start text-theme-xs dark:text-gray-400"
                                >
                                    Date/Time
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-[#F5F5F5] text-start text-theme-xs dark:text-gray-400"
                                >
                                    Pair
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-[#F5F5F5] text-start text-theme-xs dark:text-gray-400"
                                >
                                    Type
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-[#F5F5F5] text-start text-theme-xs dark:text-gray-400"
                                >
                                    Price
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-[#F5F5F5] text-start text-theme-xs dark:text-gray-400"
                                >
                                    Amount
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-[#F5F5F5] text-start text-theme-xs dark:text-gray-400"
                                >
                                    Status
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        <TableBody className="">
                            {tradeHistory.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="px-4 py-3 text-[#FCFCFD] text-start text-[16px] font-medium">
                                        {item.dateTime}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-[#FCFCFD] text-start text-[16px] font-medium">
                                        {item.pair}
                                    </TableCell>
                                    <TableCell className={`px-4 py-3 text-start font-medium ${typeColor(item.type)}`}>
                                        {item.type}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-[#FCFCFD] text-start text-[16px] font-medium">
                                        {item.price}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-[#FCFCFD] text-start text-[16px] font-normal">
                                        {item.amount}
                                    </TableCell>
                                    <TableCell className={`px-4 py-3 text-start text-theme-sm font-medium ${getStatusColor(item.status)}`}>
                                        {item.status}
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

export default TradeHistory