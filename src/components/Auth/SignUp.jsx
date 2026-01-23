"use client";
import React, { useState } from 'react';
import { Eye, EyeOff, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function SignUpPage() {
    const [activeTab, setActiveTab] = useState('phone');
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: '',
        referralCode: '',
        agreeToTerms: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Image src="/logo.svg" alt="Zyrix Logo" width={114} height={48} className="mx-auto" />
                </div>

                {/* Tab Selector */}
                <div className="flex gap-1 mb-6  rounded-full border border-[#FFC107] p-1">
                    <button
                        onClick={() => setActiveTab('email')}
                        className={`flex-1 py-3 px-6 rounded-full cursor-pointer font-medium transition-all ${activeTab === 'email'
                            ? 'bg-yellow-400 text-black'
                            : 'bg-transparent text-white hover:bg-neutral-800'
                            }`}
                    >
                        Email
                    </button>
                    <button
                        onClick={() => setActiveTab('phone')}
                        className={`flex-1 py-3 px-6 rounded-full font-medium cursor-pointer transition-all ${activeTab === 'phone'
                            ? 'bg-yellow-400 text-black'
                            : 'bg-transparent text-white hover:bg-neutral-800'
                            }`}
                    >
                        Phone number
                    </button>
                </div>

                <div className="space-y-4">
                    {activeTab === 'email' ? (
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-[#333333] text-white px-4 py-4 rounded-full border border-neutral-700 focus:border-yellow-400 focus:outline-none placeholder-neutral-500"
                        />
                    ) : (
                        <div className="flex gap-2">
                            <button
                                type="button"
                                className="flex items-center gap-2 bg-[#333333] text-white px-4 py-4 rounded-full border border-neutral-700 hover:border-neutral-600"
                            >
                                <span className="text-xl">🇺🇸</span>
                                <span className="text-sm">+1</span>
                                <ChevronDown size={16} />
                            </button>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="flex-1 bg-[#333333] text-white px-4 py-4 rounded-full border border-neutral-700 focus:border-yellow-400 focus:outline-none placeholder-neutral-500"
                            />
                        </div>
                    )}

                    {/* Password Input */}
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full bg-[#333333] text-white px-4 py-4 rounded-full border border-neutral-700 focus:border-yellow-400 focus:outline-none placeholder-neutral-500 pr-12"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    {/* Referral Code */}
                    <div>
                        <button
                            type="button"
                            className="flex items-center gap-2 text-white text-sm mb-2"
                        >
                            Referral Code
                            <ChevronDown size={16} />
                        </button>
                        <input
                            type="text"
                            name="referralCode"
                            value={formData.referralCode}
                            onChange={handleInputChange}
                            className="w-full bg-[#333333] text-white px-4 py-4 rounded-full border border-neutral-700 focus:border-yellow-400 focus:outline-none"
                        />
                    </div>

                    {/* Terms Checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleInputChange}
                            className="mt-1 w-4 h-4 rounded border-neutral-600 bg-neutral-800 text-yellow-400 focus:ring-yellow-400 focus:ring-offset-0"
                        />
                        <span className="text-neutral-400 text-sm">
                            By creating an account, I agree to Zyrix's Terms and Privacy Policy
                        </span>
                    </label>

                    {/* Sign Up Button */}
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-yellow-400 text-black cursor-pointer font-semibold py-4 rounded-full hover:bg-yellow-500 transition-colors"
                    >
                        Sign Up to your account
                    </button>

                    {/* Google Sign In */}
                    <button
                        type="button"
                        className="w-full bg-white text-black font-semibold cursor-pointer py-4 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                    >
                        <svg viewBox="0 0 24 24" className="w-5 h-5">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
}