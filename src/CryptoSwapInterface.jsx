import React, { useState } from 'react';
import { ChevronDown, Loader } from 'lucide-react';

const CryptoSwapInterface = () => {
  const [selectedToken, setSelectedToken] = useState('LTC');
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = () => {
    setIsLoading(true);
    // Simulating an async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <div className="container mx-auto flex justify-center items-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
          <h1 className="text-3xl font-bold mb-2">Swap</h1>
          <p className="text-gray-400 mb-4">Trade Token In An Instant</p>
          
          <div className="flex space-x-4 mb-6 overflow-x-auto">
            <button className="bg-blue-900 px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 hover:bg-blue-800">Core</button>
            <button className="text-gray-400 text-sm transition-colors duration-300 hover:text-white">Ecosystem</button>
            <button className="text-gray-400 text-sm transition-colors duration-300 hover:text-white">Community</button>
            <button className="text-gray-400 text-sm transition-colors duration-300 hover:text-white">Experimental</button>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4 transition-all duration-300 hover:bg-gray-600">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Swap From:</span>
              <span className="text-sm text-gray-400">Balance: 0 EGLD</span>
            </div>
            <div className="flex justify-between items-center">
              <input type="text" placeholder="Amount" className="bg-transparent text-white text-2xl w-2/3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="flex items-center bg-gray-600 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-500">
                <img src="/api/placeholder/24/24" alt="LTC" className="mr-2" />
                {selectedToken} <ChevronDown className="ml-2" />
              </button>
            </div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4 transition-all duration-300 hover:bg-gray-600">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Swap To:</span>
            </div>
            <div className="flex justify-between items-center">
              <input type="text" placeholder="Amount" className="bg-transparent text-white text-2xl w-2/3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="flex items-center bg-gray-600 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-500">
                Select Token <ChevronDown className="ml-2" />
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-400 mb-4">
            1 XLM = 0.00005869 ETC ($232.45)
          </div>
          
          <button 
            className="w-full bg-blue-600 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex justify-center items-center"
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