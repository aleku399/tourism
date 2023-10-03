"use client";

import React from 'react';
import { closePaymentModal,  useFlutterwave } from 'flutterwave-react-v3';

interface Props {
    amount: number;
}

export default function BookNow({amount}: Props) {

  const config = {
    public_key: 'FLWPUBK_TEST-b95582bdc8e57be18e128ef3fadd6448-X',
    tx_ref:  Date.now().toString(),
    amount,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'aleku399@gmail.com',
      phone_number: '0755574905',
      name: 'john doe',
    },
    customizations: {
      title: 'Safari Boots',
      description: 'Payment for Safari Boots Tourism',
      logo: '/boots.jpeg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="mt-2">
      <button
        onClick={() => {
            handleFlutterPayment({
                callback: (response) => {
                    console.log(response);
                    closePaymentModal()
                },
                onClose: () => {},
            });
            }}
        className="flex w-36 items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
      >
        <p className="text-gray-600">Book Now</p>
      </button> 
    </div>
  );
}
