"use client";

import React from 'react';

interface PaxProps {
  paxs: string[];
  onPaxClick: (pax: string) => void;
}

const PaxCard: React.FC<PaxProps> = ({ paxs, onPaxClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-2 z-40 sm:w-96 md:max-h-80 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Number of People</h2>
      <ul className="space-y-2">
        {paxs.map((pax, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 cursor-pointer transition"
            onClick={() => onPaxClick(pax)}
          >
            <span>{pax}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaxCard;
