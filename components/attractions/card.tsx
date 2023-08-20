import React from 'react';
import Image from 'next/image'

interface Attraction {
  name: string;
  imageUrl: string;
  description: string;
}

interface AttractionCardProps {
  attraction: Attraction;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <Image src={attraction.imageUrl} alt={attraction.name} className="mb-2" width={700} height={300} />
      <h2 className="text-lg font-semibold mb-">{attraction.name}</h2>
      <p>{attraction.description}</p>
    </div>
  );
};

export default AttractionCard;