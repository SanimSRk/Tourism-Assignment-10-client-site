import { useEffect, useState } from 'react';
import Countrys from './Countrys';
const CountryData = () => {
  const [countrys, setCountrys] = useState([]);

  useEffect(() => {
    fetch('https://tour-vibe-server-site.vercel.app/countrys')
      .then(res => res.json())
      .then(data => {
        setCountrys(data);
      });
  }, []);
  return (
    <div className="my-[100px] w-[88%] mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Your favourite country</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countrys.map((count, index) => (
          <Countrys key={index} count={count}></Countrys>
        ))}
      </div>
    </div>
  );
};

export default CountryData;
