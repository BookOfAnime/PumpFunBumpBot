import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Swap');

  return (
    <nav className="navbar flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">Pump Fun Bump Bot</div>
        <ul className="flex space-x-6">
          {['Swap', 'Liquidity', 'Farms', 'Metastaking', 'Analytics', '...'].map(link => (
            <li key={link}>
              <a
                href="#"
                className={`nav-link ${activeLink === link ? 'active' : ''}`}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-sm">$0.00005</div>
        <button className="connect-button px-4 py-2 rounded">Connect</button>
      </div>
    </nav>
  );
};

export default Navbar;
