import AttractionsList from '@/components/attractions/list';

const Attractions = () => {
  return (
    <div className="z-10 w-full px-5">
      <h1 className="text-3xl font-semibold mb-4">Attractions in Uganda</h1> 
       <AttractionsList />
    </div>
  );
};

export default Attractions;
