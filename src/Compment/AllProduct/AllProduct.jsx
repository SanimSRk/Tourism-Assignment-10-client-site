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
  } = product;
  return (
    <div className="shadow-lg p-4 rounded-lg ">
      <img src={image} alt="" />
      <h2>Turist sport is :{TouristsSoprt}</h2>
      <h2>Average Cost : {averageCost}</h2>
      <h2> Total Visitors PerYear :{totaVisitorsPerYea} </h2>
      <h2> Travel Time : {travelTime}</h2>
      <h2> Seasonality: {seasonality}</h2>
      <button className="btn w-full bg-[#FF497C] text-white">
        View Details
      </button>
    </div>
  );
};

export default AllProduct;
