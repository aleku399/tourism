"use client";

import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BedIcon, Time, People } from '@/components/shared/icons';
import useOutsideClick from "@/lib/hooks/use-outside-click";
import InputField from './inputField';
import LocationCard from './locationCard';

import "./styles.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Search: React.FC = () => {
  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const locationInputRef = useRef<HTMLInputElement | null>(null);

  const [location, setLocation] = useState('');
  const [departureDate, setDepartureDate] = useState<Value>(new Date());
  const [numOfPeople, setNumOfPeople] = useState('');
  const [searchStarted, setSearchStarted] = useState(false);
  const [dateSearch, setDateSearch] = useState(false);

  useOutsideClick({
    ref: searchContainerRef,
    handlers: [() => setSearchStarted(false), () => setDateSearch(false)],
  });


  const handleLocationFocus = () => {
    setSearchStarted(true);
  };

  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleDateFocus = () => {
    setDateSearch(true);
  };

  const handleNumOfPeopleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumOfPeople(event.target.value);
  };

  return (
    <div ref={searchContainerRef} className="z-10 px-7 py-4 w-full max-w-screen-xl animate-fade-up  flex-col md:flex-row items-center md:space-x-2">
      <div className="md:flex-grow w-full md:w-auto flex flex-col md:flex-row md:space-x-2">
        <div className="md:flex-grow w-full md:w-auto">
          <InputField
            icon={<BedIcon className="w-8 h-8" />}
            type="text"
            placeholder="Where are you going?"
            value={location}
            error={false}
            inputRef={locationInputRef}
            onChange={handleLocationChange}
            handleFocus={handleLocationFocus} 
            isFocused={searchStarted} 
            
          />
          <div className="relative z-50">
            <div className="absolute">
              {searchStarted && <LocationCard />}
            </div>
          </div>
        </div>
        <div className="md:flex-grow w-full md:w-auto">
          <InputField
            icon={<Time className="w-8 h-8" />}
            type="text"
            placeholder="Departure Date"
            value={departureDate ? departureDate.toString().slice(0, 10) : ''}
            error={false}
            isFocused={dateSearch}
            handleFocus={handleDateFocus}
          />
          <div className="relative z-50 mt-2">
            <div className="absolute">
              { dateSearch && <Calendar onChange={setDepartureDate} value={departureDate} /> }
            </div>
          </div>
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
        <div className="md:flex-grow w-full md:w-auto">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none md:w-auto w-full md:w-auto mt-4 md:mt-0">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
