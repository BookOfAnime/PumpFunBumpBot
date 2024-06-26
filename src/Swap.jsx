import React from 'react';

const Swap = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg mx-auto mt-12">
      <h1 className="text-xl font-semibold mb-6 text-center">Swap</h1>
      <input type="text" placeholder="Amount" className="w-full p-2 mb-4 rounded bg-gray-700 text-white" />
      <input type="text" placeholder="Swap From" className="w-full p-2 mb-4 rounded bg-gray-700 text-white" />
      <button className="w-full p-2 rounded bg-blue-600 hover:bg-blue-700 text-white">Connect</button>
    </div>
  );
};

export default Swap;
