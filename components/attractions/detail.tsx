import React from 'react';
import Image from 'next/image'

interface Attraction {
  name: string;
  imageUrl: string;
  description: string;
}

interface AttractionDetailProps {
  attraction: Attraction;
}

const AttractionDetail: React.FC<AttractionDetailProps> = ({ attraction }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">{attraction.name}</h1>
      <Image src={attraction.imageUrl} alt={attraction.name} className="mb-4" />
      <p>{attraction.description}</p>
    </div>
  );
};

export default AttractionDetail;