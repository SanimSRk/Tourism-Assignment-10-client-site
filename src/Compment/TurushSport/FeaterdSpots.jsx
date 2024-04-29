import { useEffect, useState } from 'react';
import FeaterdCarts from './FeaterdCarts';

const FeaterdSpots = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('https://tour-vibe-server-site.vercel.app/products')
      .then(res => res.json())
      .then(data => setProductData(data.slice(0, 6)));
  }, []);
  console.log(productData);
  return (
    <div>
      <div className="lg:w-2/3 mx-auto text-center">
        <p className="font-serif text-xs text-[#FF497C]  font-bold">
          Featured tours
        </p>
        <h2 className="text-4xl font-bold">Most Popular Tours Spots</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {productData.map((product, idex) => (
          <FeaterdCarts key={idex} product={product}></FeaterdCarts>
        ))}
      </div>
    </div>
  );
};

export default FeaterdSpots;
