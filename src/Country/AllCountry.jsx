import { useLoaderData } from 'react-router-dom';
import SelectCountry from './SelectCountry';
const AllCountry = () => {
  const countryData = useLoaderData();
  console.log(countryData);

  return (
    <div className="w-[88%] mx-auto my-[100px]">
      <h2 className="text-4xl font-bold text-center">
        {' '}
        Most Popular Tours Spots{' '}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-12 gap-6">
        {countryData.map((seltctCountry, index) => (
          <SelectCountry
            key={index}
            seltctCountry={seltctCountry}
          ></SelectCountry>
        ))}
      </div>
    </div>
  );
};

export default AllCountry;
