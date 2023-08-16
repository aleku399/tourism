"use client";

import React, { useState, ChangeEvent } from 'react';
import { BedIcon, Time, People } from "@/components/shared/icons";
import InputField from './inputField';

const Search: React.FC = () => {
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [numOfPeople, setNumOfPeople] = useState('');

  const handleArrivalDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setArrivalDate(event.target.value);
  };

  const handleDepartureDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDepartureDate(event.target.value);
  };

  const handleNumOfPeopleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumOfPeople(event.target.value);
  };

  return (
    <div className="z-10 px-7 py-4 w-full max-w-screen-xl animate-fade-up  flex justify-center space-x-2 ">
      <div className="flex flex-row space-x-2">
        <div className="basis-1/2">
            <InputField
                icon={<BedIcon className="w-8 h-8" />}
                type="text"
                placeholder="Where are you going?"
                value={arrivalDate}
                error={false}
                onChange={handleArrivalDateChange}
            />
        </div>
        <div  className="basis-1/2">
            <InputField
                icon={<Time className="w-8 h-8"  />}
                type="text"
                placeholder="Departure Date"
                value={departureDate}
                error={false}
                onChange={handleDepartureDateChange}
            />
        </div>
        <div  className="basis-1/2">
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
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
             Search
        </button>
    </div>
  );
};

export default Search;

