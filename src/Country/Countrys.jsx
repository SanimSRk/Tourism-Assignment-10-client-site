import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const Countrys = ({ count }) => {
  const { image_url, countryName, description } = count;

  return (
    <Link to={`/allCountrys/${countryName}`}>
      {}
      <div
        data-aos="zoom-in-down"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="shadow-lg p-6 rounded-lg h-full bg-base-200 grid items-end"
      >
        <img className="w-full" src={image_url} alt="" />
        <h2 className="text-2xl font-bold my-3">{countryName}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Countrys;
