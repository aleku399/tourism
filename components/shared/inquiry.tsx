import React from 'react';
import { CheckIcon, CloseIcon  } from "@/components/shared/icons";

const InquiryForm: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Not quite ready to book yet?</h2>
        <p>That is fine, you can send us an inquiry so that we figure it all out together. Please use this form to talk to our safari specialists and they will help you.</p>
        <form className="mt-4">
          <label className="block font-medium mb-2">Your Names *</label>
          <input type="text" className="w-full p-2 border rounded-md" required />
          <label className="block font-medium mt-2 mb-2">Your Email Address *</label>
          <input type="email" className="w-full p-2 border rounded-md" required />
          <label className="block font-medium mt-2 mb-2">Group Size</label>
          <select className="w-full p-2 border rounded-md">
            <option>1 person (solo)</option>
            <option>2  people</option>
            <option>3 people</option>
            <option>4 people</option>
          </select>
          <label className="block font-medium mt-2 mb-2">Your Phone</label>
          <input type="tel" className="w-full p-2 border rounded-md" placeholder="e.g +44 000 000 000" />
          <label className="block font-medium mt-2 mb-2">Your Inquiry</label>
          <textarea className="w-full p-2 border rounded-md" rows={4}></textarea>
          <label className="block font-medium mt-2 mb-2">Any extra information to consider</label>
          <textarea className="w-full p-2 border rounded-md" rows={4}></textarea>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
            Send Inquiry
          </button>
        </form>
      </div>
      <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Inclusions</h2>
        <p>The price of this tour includes the following items:</p>
        <ul className="list-none ml-4 mt-2">
            <li className='flex items-center'>
                <span className="mr-2">
                    <CheckIcon className="w-4 h-4 text-green-500" /> 
                </span>
                Transport in a 4WD vehicle with a pop-up roof.
            </li>
            <li className='flex items-center'>
                <span className="mr-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                </span>
                All fuel for the tour.
            </li>
            <li className='flex items-center'>
                <span className="mr-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                </span>
                English-speaking Ugandan driver/guide.
            </li>
            <li className='flex items-center'>
                <span className="mr-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                </span>
                Accommodation and Meals on Full Board. 
            </li>
            <li className='flex items-center ml-5'>(Breakfast, Lunch and Dinner)</li>
            <li className='flex items-center'>
                <span className="mr-2">
                    <CheckIcon className="w-4 h-4 text-green-500" /> 
                </span>
                Park-entrance fees for all National parks.
            </li>
            <li className='flex items-center'>
                <span className="mr-2">
                    <CheckIcon className="w-4 h-4 text-green-500" /> 
                </span>
                All activities described in the itinerary.
            </li>
            <li className='flex items-center'>
                <span className="mr-2">
                    <CheckIcon className="w-4 h-4 text-green-500" /> 
                </span>
                1 Gorilla tracking permit per person.
            </li>
            <li className='flex items-center'>
                <span className="mr-2">
                    <CheckIcon className="w-4 h-4 text-green-500" /> 
                </span>
                Drinking water throughout the safari.
            </li>
        </ul>
        <h2 className="text-xl font-semibold mt-4">Exclusions</h2>
        <p>The price of this tour does not include the following items:</p>
        <ul className="list-none ml-4 mt-2">
            <li className='flex items-center'>
                <span className="mr-2">
                    <CloseIcon className="w-4 h-4 text-red-500" /> 
                </span>
                International airfares.
            </li>
            <li className='flex items-center'>
                <span className="mr-2">
                    <CloseIcon className="w-4 h-4 text-red-500" /> 
                </span>
                Entry visa to Uganda.
            </li>
            <li className='flex items-center'>
                <span className="mr-2">
                    <CloseIcon className="w-4 h-4 text-red-500" /> 
                </span>
                Meals that are not part of your accommodation.
            </li>
            <li className='flex items-center'>
                <span className="mr-2">
                    <CloseIcon className="w-4 h-4 text-red-500" /> 
                </span>
                A porter. (Helps to carry your backpack & push/pull you on the slippery slopes.)
            </li>
            <li className='flex items-center'>
                <span className="mr-2">
                    <CloseIcon className="w-4 h-4 text-red-500" /> 
                </span>
                Personal insurance (medical/travel)
            </li>
            <li className='flex items-center'>
                <span className="mr-2">
                    <CloseIcon className="w-4 h-4 text-red-500" /> 
                </span>
                Tips and gratuities to rangers, driver/guide, porter, hotel staff, etc.
            </li>
            <li className='flex items-center'>
                <span className="mr-2">
                    <CloseIcon className="w-4 h-4 text-red-500" /> 
                </span>
                All expenses of personal nature. (e.g. drinks, laundry, optional activities.)
            </li>
        </ul>
      </div>
    </div>
  );
};

export default InquiryForm;
