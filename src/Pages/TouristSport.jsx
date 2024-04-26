import { useLoaderData } from 'react-router-dom';
import AllProduct from '../Compment/AllProduct/AllProduct';

const TouristSport = () => {
  const products = useLoaderData();
  return (
    <div className="my-[80px]">
      <h2>This is all tourish sport:{products.length} </h2>
      <div className="w-[88%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, idex) => (
          <AllProduct key={idex} product={product}></AllProduct>
        ))}
      </div>
    </div>
  );
};

export default TouristSport;
