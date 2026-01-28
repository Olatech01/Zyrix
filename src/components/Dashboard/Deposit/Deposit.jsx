"use client"
import React, { useState } from 'react';
import { ChevronDown, Copy, Check } from 'lucide-react';
import Image from 'next/image';

const Deposit = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedToken, setSelectedToken] = useState(null);
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [showTokenDropdown, setShowTokenDropdown] = useState(false);
  const [copied, setCopied] = useState(false);

  const cryptoTokens = [
    { id: 'usdt', name: 'USDT', icon: '/usdt.svg', color: 'bg-emerald-500' },
    { id: 'btc', name: 'BTC', icon: '/btc.svg', color: 'bg-orange-500' },
    { id: 'eth', name: 'ETH', icon: '/eth.svg', color: 'bg-blue-500' },
    { id: 'trx', name: 'TRX', icon: '/trx.svg', color: 'bg-red-500' },
    { id: 'bnb', name: 'BNB', icon: '/bnb.svg', color: 'bg-yellow-500' },
  ];

  const networks = {
    usdt: [
      { id: 'erc20', name: 'ERC20', fee: '5 USDT' },
      { id: 'trc20', name: 'TRC20', fee: '1 USDT' },
      { id: 'bep20', name: 'BEP20', fee: '0.8 USDT' },
    ],
    btc: [
      { id: 'bitcoin', name: 'Bitcoin', fee: '0.0005 BTC' },
    ],
    eth: [
      { id: 'erc20', name: 'ERC20', fee: '0.005 ETH' },
    ],
    trx: [
      { id: 'trc20', name: 'TRC20', fee: '0 TRX' },
    ],
    sol: [
      { id: 'solana', name: 'Solana', fee: '0.000005 SOL' },
    ],
    bnb: [
      { id: 'bep20', name: 'BEP20', fee: '0.0005 BNB' },
    ],
  };

  // Mock wallet address
  const walletAddress = 'TY5aRTnjZsvvprXSf7jhJkWwfFVdD8hh1R';

  const handleTokenSelect = (token) => {
    setSelectedToken(token);
    setShowTokenDropdown(false);
    setCurrentStep(2);
    setSelectedNetwork(null);
  };

  const handleNetworkSelect = (network) => {
    setSelectedNetwork(network);
    setCurrentStep(3);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] rounded-[32px] text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-8">Deposit</h1>

          {/* Step 1: Select Cryptocurrency */}
          <div className="mb-8">
            <div className="flex items-start mb-4">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 ${currentStep >= 1 ? 'bg-white text-black' : 'bg-gray-700 text-gray-400'
                  }`}>
                  1
                </div>
                <h2 className="text-xl font-semibold">Select the cryptocurrency to deposit</h2>
              </div>
            </div>

            <div className="ml-12">
              {/* Token Dropdown */}
              <div className="relative mb-6">
                <button
                  onClick={() => setShowTokenDropdown(!showTokenDropdown)}
                  className="w-full bg-[#1a1a1a] border border-[#4C4C4C] rounded-[32px] px-4 py-3 flex items-center justify-between hover:border-gray-600 transition-colors"
                >
                  <span className="text-gray-400 flex items-center gap-2.5">
                    {selectedToken ? <Image height={20} width={20} src={selectedToken.icon} alt='image'/> : ""}
                    {selectedToken ? selectedToken.name : 'Select token'}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>

                {showTokenDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-hidden z-10">
                    {cryptoTokens.map((token) => (
                      <button
                        key={token.id}
                        onClick={() => handleTokenSelect(token)}
                        className="w-full px-4 py-3 flex items-center hover:bg-gray-800 transition-colors"
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 relative`}>
                          <Image src={token.icon} alt={token.name} width={20} height={20} />
                        </div>
                        <span>{token.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Popular Crypto Buttons */}
              <div>
                <h3 className="text-sm text-gray-400 mb-3">Popular Crypto</h3>
                <div className="flex flex-wrap gap-3">
                  {cryptoTokens.map((token) => (
                    <button
                      key={token.id}
                      onClick={() => handleTokenSelect(token)}
                      className={`px-4 py-2 rounded-full border transition-colors ${selectedToken?.id === token.id
                          ? 'border-white bg-white text-black'
                          : 'border-gray-700 hover:border-gray-600'
                        }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs relative`}>
                          <Image src={token.icon} alt={token.name} width={16} height={16} />
                        </div>
                        <span className="font-medium">{token.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="ml-4 h-12 w-0.5 bg-gray-700"></div>

          {/* Step 2: Select Network */}
          <div className="mb-8">
            <div className="flex items-start mb-4">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 ${currentStep >= 2 ? 'bg-white text-black' : 'bg-gray-700 text-gray-400'
                  }`}>
                  2
                </div>
                <h2 className="text-xl font-semibold">Select Network</h2>
              </div>
            </div>

            {selectedToken && (
              <div className="ml-12">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {networks[selectedToken.id]?.map((network) => (
                    <button
                      key={network.id}
                      onClick={() => handleNetworkSelect(network)}
                      className={`p-4 rounded-lg border transition-colors ${selectedNetwork?.id === network.id
                          ? 'border-white bg-white text-black'
                          : 'border-[#4C4C4C] hover:border-gray-600'
                        }`}
                    >
                      <div className="font-semibold mb-1">{network.name}</div>
                      <div className={`text-xs ${selectedNetwork?.id === network.id ? 'text-gray-700' : 'text-gray-400'}`}>
                        Fee: {network.fee}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Vertical Line */}
          {selectedToken && <div className="ml-4 h-12 w-0.5 bg-gray-700"></div>}

          {/* Step 3: Deposit Details */}
          <div className="mb-8">
            <div className="flex items-start mb-4">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 ${currentStep >= 3 ? 'bg-white text-black' : 'bg-gray-700 text-gray-400'
                  }`}>
                  3
                </div>
                <h2 className="text-xl font-semibold">Deposit details</h2>
              </div>
            </div>

            {selectedNetwork && (
              <div className="ml-12">
                <div className="border border-[#4C4C4C] rounded-lg p-6">
                  {/* QR Code */}
                  <div className="flex items-center gap-2 mb-6">
                    <Image height={104} width={104} src={"/code.svg"} alt='code'/>
                    <div className="flex items-center gap-2 ">
                      <input
                        type="text"
                        value={walletAddress}
                        readOnly
                        className="flex-1 bg-transparent font-medium outline-none text-[20px]"
                      />
                      <button
                        onClick={copyToClipboard}
                        className="p-2 hover:bg-gray-800 rounded transition-colors"
                      >
                        {copied ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Network Info */}
                  <div className="mb-4">
                    <label className="text-sm text-gray-400 block mb-2">Network</label>
                    <div className="text-lg font-semibold">{selectedNetwork.name}</div>
                  </div>

                  {/* Minimum Deposit */}
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                    <p className="text-sm text-yellow-500">
                      ⚠️ Minimum deposit: 10 {selectedToken.name}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          {/* Tips Section */}
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Tips</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="text-gray-500">•</span>
                <span>
                  This address only supports deposit of {selectedToken ? selectedToken.name : 'USDT'} assets.
                  Do not deposit other assets to this address as the asset will not be credited or recoverable.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-500">•</span>
                <span>
                  Please note: if the single deposit amount is less than the minimum deposit amount, it will credited.
                  The platform will not be liable for any loss of assets resulting from this. Thank you for your understanding and support!
                </span>
              </li>
            </ul>
          </div>

          {/* Deposit FAQ */}
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Deposit FAQ</h3>
              <button className="text-yellow-500 text-sm hover:underline flex items-center gap-1">
                View More
                <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
              </button>
            </div>
            <ul className="space-y-3">
              <li>
                <button className="text-sm text-gray-300 hover:text-white transition-colors text-left">
                  How to Deposit on Zyrix?
                </button>
              </li>
              <li>
                <button className="text-sm text-gray-300 hover:text-white transition-colors text-left">
                  Have an uncredited deposit? Apply for return
                </button>
              </li>
              <li>
                <button className="text-sm text-gray-300 hover:text-white transition-colors text-left">
                  View all deposit & withdrawal status
                </button>
              </li>
            </ul>
          </div>

          {/* Buy Crypto */}
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">Buy Crypto</h3>
              <ChevronDown className="w-5 h-5 rotate-[-90deg] text-gray-400" />
            </div>
            <p className="text-sm text-gray-400">
              Supports buying crypto with Visa, Mastercard, PayPal, and bank transfer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;