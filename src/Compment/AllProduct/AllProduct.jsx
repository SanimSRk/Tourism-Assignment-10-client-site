import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AllProduct = ({ product }) => {
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
  } = product;

  return (
    <div className="shadow-lg p-4 rounded-lg grid items-end ">
      <img src={image} alt="" />
      <h2>Turist sport is :{TouristsSoprt}</h2>
      <h2 className="my-3">Average Cost : ${averageCost}</h2>
      <h2> Total Visitors PerYear :{totaVisitorsPerYea} </h2>
      <div className="flex justify-between my-3">
        <h2> Travel Time : {travelTime}</h2>
        <h2> Seasonality: {seasonality}</h2>
      </div>
      <Link to={`/allProductDeatils/${_id}`}>
        <button className="btn w-full bg-[#FF497C] text-white">
          View Details <FaArrowRightLong className="text-2xl" />
        </button>
      </Link>
    </div>
  );
};

export default AllProduct;
