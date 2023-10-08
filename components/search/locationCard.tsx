"use client";

import React from 'react';
import { LocationIcon } from '@/components/shared/icons';

interface LocationProps {
  locations: any[];
  onLocationClick: (location: any) => void;
}

const LocationCard: React.FC<LocationProps> = ({ locations, onLocationClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-2 z-40 sm:w-96 md:max-h-80 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Popular Destinations Nearby</h2>
      <ul className="space-y-2">
        {locations.map((location, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 cursor-pointer transition"
            onClick={() => onLocationClick(location)}
          >
            <LocationIcon />
            <span>{location.heading}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationCard;
