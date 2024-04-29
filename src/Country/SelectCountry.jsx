import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SelectCountry = ({ seltctCountry }) => {
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
    _id,
  } = seltctCountry;
  return (
    <div className="shadow-lg p-6 rounded-lg grid items-end h-full">
      <img src={image} alt="" />
      <h2>Turist sport is :{TouristsSoprt}</h2>
      <h2 className="my-3">Average Cost : ${averageCost}</h2>
      <h2> Total Visitors PerYear :{totaVisitorsPerYea} </h2>
      <div className="flex justify-between my-3">
        <h2> Travel Time : {travelTime}</h2>
        <h2> Seasonality: {seasonality}</h2>
      </div>
      <p className="font-semibold mb-3">location : {location}</p>
      <Link to={`/deatilsCountry/${_id}`}>
        <button className="btn w-full bg-[#FF497C] text-white">
          View Details <FaArrowRightLong className="text-2xl" />
        </button>
      </Link>
    </div>
  );
};

export default SelectCountry;
