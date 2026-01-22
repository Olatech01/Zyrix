"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(1); // Second item open by default

    const faqs = [
        {
            question: "How does Zyrix work?",
            answer: "Zyrix offers a variety of trading and investment options that allow you to buy and sell crypto with as little as $1. With products like zero-fee conversion, spot trading, margin trading, and futures trading, you can try out different strategies and build your skills on Zyrix without worrying about entry costs."
        },
        {
            question: "Can I start trading with just $1?",
            answer: "Zyrix offers a variety of trading and investment options that allow you to buy and sell crypto with as little as $1. With products like zero-fee conversion, spot trading, margin trading, and futures trading, you can try out different strategies and build your skills on Zyrix without worrying about entry costs."
        },
        {
            question: "How can I buy coin?",
            answer: "You can buy coins on Zyrix through multiple methods including credit/debit card, bank transfer, P2P trading, or third-party payment processors. Simply navigate to the 'Buy Crypto' section, select your preferred payment method, choose the cryptocurrency you want to purchase, and follow the on-screen instructions to complete your transaction."
        },
        {
            question: "How can I contact Zyrix support?",
            answer: "You can contact Zyrix support through our 24/7 live chat feature available on the platform, submit a ticket through the help center, or reach out via email at support@zyrix.com. Our dedicated support team is always ready to assist you with any questions or concerns you may have."
        },
        {
            question: "How to track cryptocurrency prices?",
            answer: "Zyrix provides real-time cryptocurrency price tracking through our advanced market dashboard. You can view live prices, 24-hour price changes, market charts, and historical data for all listed cryptocurrencies. Additionally, you can set up price alerts to get notified when your chosen cryptocurrencies reach specific price points."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen p-4">
            <div className=" mx-auto">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium mb-8 md:mb-12">
                    Frequently Asked <span className="text-[#FFC107]">Questions</span>
                </h1>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-3xl transition-all duration-300 ${openIndex === index
                                    ? 'border-[#FFC107] bg-[#1A1A1A]'
                                    : 'border-[#333333] bg-transparent'
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left hover:bg-[#1A1A1A] transition-colors rounded-3xl"
                            >
                                <span className="text-white text-base md:text-lg font-medium pr-4">
                                    {faq.question}
                                </span>
                                <div className="flex-shrink-0">
                                    {openIndex === index ? (
                                        <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-300" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-gray-400 transition-transform duration-300" />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 md:px-8 pb-5 md:pb-6 pt-2">
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;