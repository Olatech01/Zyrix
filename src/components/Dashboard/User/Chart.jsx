"use client";

import React, { useState } from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

const data = [
    { time: "19:00", green: 32000, red: 26000 },
    { time: "19:05", green: 38000, red: 18000 },
    { time: "19:10", green: 14000, red: 26000 },
    { time: "19:15", green: 25000, red: 19000 },
    { time: "19:20", green: 33000, red: 21000 },
    { time: "19:25", green: 30000, red: 26000 },
    { time: "19:30", green: 18000, red: 39000 },
    { time: "19:35", green: 26000, red: 16000 },
    { time: "19:40", green: 45000, red: 33000 },
    { time: "19:45", green: 16000, red: 32000 },
    { time: "19:50", green: 31000, red: 38000 },
];

export default function Chart() {
    const [currency, setCurrency] = useState("BTC/USD");

    return (
        <div className="w-full bg-gradient-to-br from-[#1e1e1e] to-[#151515] rounded-2xl p-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-white text-2xl font-semibold mb-2">
                        Choose a Currency
                    </h2>

                    <button className="flex items-center gap-2 text-white">
                        {currency}
                        <ChevronDown size={18} />
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 bg-neutral-800 rounded-lg">
                        <SlidersHorizontal size={18} className="text-white" />
                    </button>

                    <button className="px-4 py-2 bg-neutral-800 rounded-lg text-white">
                        Monthly
                    </button>
                </div>
            </div>

            {/* Price */}
            <div className="flex justify-between items-end mb-4">
                <div className="text-right">
                    <p className="text-white text-3xl font-semibold">$95,352.02</p>
                    <p className="text-green-500 text-sm">+15.69%</p>
                </div>
                <div></div>
            </div>

            {/* Chart */}
            <div className="w-full h-[380px] min-w-0 min-h-0">
                <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                    <LineChart data={data}>
                        <CartesianGrid
                            stroke="#2a2a2a"
                            strokeDasharray="4 4"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="time"
                            tick={{ fill: "#6b7280", fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            tick={{ fill: "#6b7280", fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(v) => v / 1000 + "k"}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#111",
                                border: "none",
                                borderRadius: "8px",
                            }}
                            labelStyle={{ color: "#22c55e" }}
                        />

                        <Line
                            type="monotone"
                            dataKey="green"
                            stroke="#22c55e"
                            strokeWidth={3}
                            dot={false}
                        />

                        <Line
                            type="monotone"
                            dataKey="red"
                            stroke="#ef4444"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-green-500"></span>
                    <p className="text-gray-400 text-sm">Currency A</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-red-500"></span>
                    <p className="text-gray-400 text-sm">Currency B</p>
                </div>
            </div>
        </div>
    );
}
