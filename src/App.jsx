import React from 'react';
import Navbar from './Navbar';
import Swap from './Swap';
import Footer from './Footer';
import CryptoSwapInterface from './CryptoSwapInterface';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <CryptoSwapInterface/>
     
      <Footer />
    </div>
  );
}

export default App;
