import { useLoaderData } from 'react-router-dom';
import AllProduct from '../Compment/AllProduct/AllProduct';
import { useState } from 'react';

const TouristSport = () => {
  const products = useLoaderData();
  const [productss, setProductss] = useState(products);
  const prod = [...products];
  const handileClickSort = data => {
    if (data === 'price') {
      const sortData = prod.sort(
        (a, b) => parseInt(b.averageCost) - parseInt(a.averageCost)
      );
      setProductss(sortData);
    }
  };

  return (
    <div className="my-[80px] w-[88%] mx-auto">
      <div className="md:w-2/3 lg:w-2/3 mx-auto text-center">
        <h2 className="text-2xl font-bold"> All Tourists Spot </h2>
        <p className="mt-3">
          xplore the breathtaking beauty of Majestic Peaks, where snow-capped
          mountains meet azure skies in a symphony of natural wonder.
        </p>
      </div>

      <div className="grid justify-center my-[60px]">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#FF497C] text-white"
          >
            <h2 className="font-semibold">Sort data</h2>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52 bg-[#FF497C] text-white"
          >
            <li onClick={() => handileClickSort('price')}>
              <a>Average Cost </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productss.map((product, idex) => (
          <AllProduct key={idex} product={product}></AllProduct>
        ))}
      </div>
    </div>
  );
};

export default TouristSport;
