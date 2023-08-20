import AttractionCard from './card';
import attractions from './data';

const AttractionsList = () => {
  return (
    <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
      {attractions.map(attraction => (
        <AttractionCard key={attraction.id} attraction={attraction} />
      ))}
    </div>
  );
};

export default AttractionsList;
