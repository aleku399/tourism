"use client";

import React, { useState, ChangeEvent } from 'react';
import { BedIcon, Time, People } from '@/components/shared/icons';
import InputField from './inputField';
import LocationCard from './locationCard';

const Search: React.FC = () => {
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [numOfPeople, setNumOfPeople] = useState('');
  const [searchStarted, setSearchStarted] = useState(false);

  const handleArrivalDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setArrivalDate(event.target.value);
    setSearchStarted(true);
  };

  const handleDepartureDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDepartureDate(event.target.value);
  };

  const handleNumOfPeopleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumOfPeople(event.target.value);
  };

  return (
    <div className="z-10 px-7 py-4 w-full max-w-screen-xl animate-fade-up flex flex-col md:flex-row items-center md:space-x-2">
      <div className="md:flex-grow w-full md:w-auto flex flex-col md:flex-row md:space-x-2">
        <div className="md:flex-grow w-full md:w-auto">
          <InputField
            icon={<BedIcon className="w-8 h-8" />}
            type="text"
            placeholder="Where are you going?"
            value={arrivalDate}
            error={false}
            onChange={handleArrivalDateChange}
          />
          {/* <LocationCard /> */}
        </div>
        <div className="md:flex-grow w-full md:w-auto">
          <InputField
            icon={<Time className="w-8 h-8" />}
            type="text"
            placeholder="Departure Date"
            value={departureDate}
            error={false}
            onChange={handleDepartureDateChange}
          />
        </div>
        <div className="md:flex-grow w-full md:w-auto">
          <InputField
            icon={<People className="w-8 h-8" />}
            type="text"
            placeholder="Number of People"
            value={numOfPeople}
            error={false}
            onChange={handleNumOfPeopleChange}
          />
        </div>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none md:w-auto w-full md:w-auto mt-4 md:mt-0">
        Search
      </button>
    </div>
  );
};

export default Search;
