import React, { useState, useEffect } from 'react';
import { ChevronDown, Loader, RefreshCw } from 'lucide-react';

const CryptoSwapInterface = () => {
  const [selectedToken, setSelectedToken] = useState('LTC');
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleConnect = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    // Simulate periodic refreshing
    const intervalId = setInterval(handleRefresh, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-[#00171F] text-white font-sans">
      <div className="container mx-auto flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md bg-[#003459] rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#007EA7]/20">
          <h1 className="text-3xl font-bold mb-2 text-[#007EA7]">Swap</h1>
          <p className="text-gray-300 mb-6">Trade Token In An Instant</p>
          
          <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
            <button className="bg-[#007EA7] px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 hover:bg-[#00A8E8]">Core</button>
            <button className="text-gray-300 text-sm transition-colors duration-300 hover:text-white">Ecosystem</button>
            <button className="text-gray-300 text-sm transition-colors duration-300 hover:text-white">Community</button>
            <button className="text-gray-300 text-sm transition-colors duration-300 hover:text-white">Experimental</button>
          </div>
          
          <div className="bg-[#00171F] rounded-xl p-4 mb-4 transition-all duration-300 hover:bg-[#002B3D]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Swap From:</span>
              <span className="text-sm text-gray-300">Balance: 0 EGLD</span>
            </div>
            <div className="flex justify-between items-center">
              <input type="text" placeholder="Amount" className="bg-transparent text-white text-2xl w-2/3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#007EA7]" />
              <button className="flex items-center bg-[#003459] px-3 py-2 rounded-lg transition-all duration-300 hover:bg-[#004872]">
                <img src="/api/placeholder/24/24" alt="LTC" className="mr-2" />
                {selectedToken} <ChevronDown className="ml-2" />
              </button>
            </div>
          </div>
          
          <div className="bg-[#00171F] rounded-xl p-4 mb-4 transition-all duration-300 hover:bg-[#002B3D]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Swap To:</span>
            </div>
            <div className="flex justify-between items-center">
              <input type="text" placeholder="Amount" className="bg-transparent text-white text-2xl w-2/3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#007EA7]" />
              <button className="flex items-center bg-[#003459] px-3 py-2 rounded-lg transition-all duration-300 hover:bg-[#004872]">
                Select Token <ChevronDown className="ml-2" />
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-300 mb-6 flex items-center justify-between">
            <span>1 XLM = 0.00005869 ETC ($232.45)</span>
            <button onClick={handleRefresh} className="text-[#007EA7] hover:text-[#00A8E8] transition-colors duration-300">
              <RefreshCw size={16} className={`${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>
          
          <button 
            className="w-full bg-[#007EA7] py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-[#00A8E8] focus:outline-none focus:ring-2 focus:ring-[#00A8E8] focus:ring-opacity-50 flex justify-center items-center"
            onClick={handleConnect}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="animate-spin mr-2" size={20} />
            ) : null}
            {isLoading ? 'Connecting...' : 'Connect'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoSwapInterface;