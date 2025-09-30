import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center text-center mb-8 md:mb-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-fuchsia-400" style={{ textShadow: '0 0 10px #ec4899, 0 0 20px #ec4899' }}>
        Prospecting Stack
      </h1>
      <div className="mt-4">
        <div className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-violet-600 rounded-lg blur opacity-75"></div>
          <div className="relative px-4 py-2 bg-black rounded-lg leading-none">
            <span className="text-gray-300 text-sm">hand-curated by</span>
            <span className="ml-2 font-bold text-lg text-white">The Signal</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;