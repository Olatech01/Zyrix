'use client';

import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function Charts() {
    const [timeframe, setTimeframe] = useState('All');

    const assets = [
        { name: 'Bitcoin', symbol: 'BTC', percentage: 24, color: '#FDB022' },
        { name: 'Ethereum', symbol: 'ETH', percentage: 36, color: '#26A69A' },
        { name: 'Tron', symbol: 'TRX', percentage: 16, color: '#EF5350' },
        { name: 'Tether', symbol: 'USDT', percentage: 16, color: '#26A69A' },
    ];

    const balanceData = [
        3500, 800, 1600, 1000, 2000, 600, 2900, 700, 900, 3000, 2600, 4800, 2300
    ];

    const chartData = {
        labels: Array(13).fill('16 Dec'),
        datasets: [
            {
                data: balanceData,
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#4CAF50',
                pointBorderColor: '#000',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#1a1a1a',
                    drawBorder: false
                },
                ticks: {
                    color: '#666',
                    font: {
                        size: 11
                    }
                }
            },
            y: {
                min: 0,
                max: 5000,
                ticks: {
                    color: '#666',
                    font: {
                        size: 11
                    },
                    callback: (value) => {
                        if (value === 0) return '0';
                        if (value === 1000) return '1K';
                        if (value === 2000) return '2K';
                        if (value === 3000) return '3K';
                        if (value === 4000) return '4K';
                        if (value === 5000) return '5K';
                        return '';
                    },
                    stepSize: 1000
                },
                grid: {
                    color: '#1a1a1a',
                    drawBorder: false
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'index'
        }
    };

    const totalBalance = 94475;
    const balancePercentage = 60;

    return (
        <div className="min-h-screen text-white py-8">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6">
                {/* Asset Overview */}
                <div className="bg-[#1C1C1C] rounded-2xl p-8 border border-[#222]">
                    <h2 className="text-2xl font-semibold mb-8">Asset Overview</h2>

                    {/* Donut Chart */}
                    <div className="relative w-[280px] h-[280px] mx-auto mb-10">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                            <circle
                                cx="100"
                                cy="100"
                                r="80"
                                fill="none"
                                stroke="#1a1a1a"
                                strokeWidth="32"
                            />
                            {/* Bitcoin - 24% */}
                            <circle
                                cx="100"
                                cy="100"
                                r="80"
                                fill="none"
                                stroke="#FDB022"
                                strokeWidth="32"
                                strokeDasharray={`${24 * 5.026} ${100 * 5.026}`}
                                strokeDashoffset="0"
                            />
                            {/* Ethereum - 36% */}
                            <circle
                                cx="100"
                                cy="100"
                                r="80"
                                fill="none"
                                stroke="#26A69A"
                                strokeWidth="32"
                                strokeDasharray={`${36 * 5.026} ${100 * 5.026}`}
                                strokeDashoffset={`-${24 * 5.026}`}
                            />
                            {/* Tron - 16% */}
                            <circle
                                cx="100"
                                cy="100"
                                r="80"
                                fill="none"
                                stroke="#EF5350"
                                strokeWidth="32"
                                strokeDasharray={`${16 * 5.026} ${100 * 5.026}`}
                                strokeDashoffset={`-${(24 + 36) * 5.026}`}
                            />
                            {/* Tether - 16% */}
                            <circle
                                cx="100"
                                cy="100"
                                r="80"
                                fill="none"
                                stroke="#4CAF50"
                                strokeWidth="32"
                                strokeDasharray={`${16 * 5.026} ${100 * 5.026}`}
                                strokeDashoffset={`-${(24 + 36 + 16) * 5.026}`}
                            />
                            {/* Remaining - 8% */}
                            <circle
                                cx="100"
                                cy="100"
                                r="80"
                                fill="none"
                                stroke="#42A5F5"
                                strokeWidth="32"
                                strokeDasharray={`${8 * 5.026} ${100 * 5.026}`}
                                strokeDashoffset={`-${(24 + 36 + 16 + 16) * 5.026}`}
                            />
                        </svg>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                            <div className="text-sm text-gray-400 mb-1">Total</div>
                            <div className="text-3xl font-bold">${totalBalance.toLocaleString()}</div>
                            <div className="text-sm text-gray-500 mt-1">12 Asset</div>
                        </div>
                    </div>

                    {/* Asset List */}
                    <div className="space-y-4">
                        {assets.map((asset, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-3 flex-1">
                                    <span className="text-white">
                                        {asset.name}{' '}
                                        <span style={{ color: asset.color }}>({asset.symbol})</span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="flex-1 h-1.5 bg-[#2a2a2a] rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full"
                                            style={{
                                                width: `${asset.percentage}%`,
                                                backgroundColor: asset.color
                                            }}
                                        />
                                    </div>
                                    <span className="text-white font-medium w-10 text-right">
                                        {asset.percentage}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                        <button className="text-gray-400 hover:text-white">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <span className="text-gray-400">1/3</span>
                        <button className="text-gray-400 hover:text-white">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Total Balance Chart */}
                <div className="bg-[#1C1C1C] rounded-2xl flex flex-col justify-between p-8 border border-[#222]">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-semibold">Total balance</h2>

                        <div className="flex gap-2">
                            {['1D', '7M', '1M', '3M', '1Y', 'All'].map((period) => (
                                <button
                                    key={period}
                                    onClick={() => setTimeframe(period)}
                                    className={`px-4 py-1.5 rounded-lg text-sm transition-colors ${timeframe === period
                                            ? 'bg-[#FDB022] text-black font-medium'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {period}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="relative h-[420px]">
                        {/* Balance Tooltip */}
                        <div className="absolute top-8 left-12 z-10">
                            <div className="text-sm text-gray-400 mb-1">Balance</div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-16 h-1 bg-[#4CAF50] rounded-full"></div>
                                    <span className="text-xs text-gray-400">{balancePercentage}%</span>
                                </div>
                                <span className="text-lg font-semibold">${totalBalance.toLocaleString()}</span>
                            </div>
                        </div>

                        <Line data={chartData} options={chartOptions} />
                    </div>
                </div>
            </div>
        </div>
    );
}