import { Link } from 'react-router-dom';

const Countrys = ({ count }) => {
  const { image_url, countryName, description } = count;

  return (
    <Link to={`/allCountrys/${countryName}`}>
      {}
      <div className="shadow-lg p-6 rounded-lg h-full bg-base-200 grid items-end">
        <img className="w-full" src={image_url} alt="" />
        <h2 className="text-2xl font-bold my-3">{countryName}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Countrys;
