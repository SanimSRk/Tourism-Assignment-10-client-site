import { Link } from 'react-router-dom';

const Countrys = ({ count }) => {
  const { image_url, countryName, description } = count;

  return (
    <Link to={`/allCountrys/${countryName}`}>
      <div className="shadow-lg p-6 rounded-lg h-full bg-base-200 grid items-end">
        {/* <div className="grid justify-center mt-12">
        <select className="select select-bordered border-2 border-[#FF497C]  w-full max-w-xs  ">
          <option disabled selected>
            Select your country
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div> */}
        <img className="w-full" src={image_url} alt="" />
        <h2 className="text-2xl font-bold my-3">{countryName}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Countrys;
