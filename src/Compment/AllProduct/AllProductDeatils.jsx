import { useLoaderData } from 'react-router-dom';

const AllProductDeatils = () => {
  const data = useLoaderData();
  const {
    TouristsSoprt,
    countryName,
    location,
    description,
    averageCost,
    seasonality,
    travelTime,
    totaVisitorsPerYea,
    image,
  } = data;
  return (
    <div className="w-[88%] mx-auto my-[100px]">
      <div className="md:flex lg:flex shadow-lg p-6 rounded-lg gap-4 ">
        <div>
          <img className="w-full h-full" src={image} alt="" />
        </div>

        <div>
          <h2 className="text-xl font-bold uppercase">{countryName}</h2>
          <div className="flex gap-8 my-3">
            <h2 className="font-semibold">Turist sport is :{TouristsSoprt}</h2>
            <h2 className=" font-semibold">Average Cost : {averageCost}</h2>
          </div>
          <p className="md:w-3/4 lg:w-2/3">{description}</p>
          <h2 className="my-3">
            {' '}
            Total Visitors PerYear :{totaVisitorsPerYea}{' '}
          </h2>
          <div className="flex gap-8">
            <h2> Travel Time : {travelTime}</h2>
            <h2> Seasonality: {seasonality}</h2>
          </div>
          <div className="">
            <h2>Location : {location}</h2>
            <button className="btn mt-6 bg-[#FF497C] text-white">
              view details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductDeatils;
