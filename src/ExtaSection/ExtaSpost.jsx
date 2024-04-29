import { Link } from 'react-router-dom';

const ExtaSpost = () => {
  return (
    <div className=" lg:flex shadow-lg py-4 ">
      <div className=" lg:w-[60%]">
        <img src="/torush.webp" alt="" />
      </div>

      <div className="lg:w-[40%]  py-8 md:py-12  lg:py-24 bg-[#e8604c] px-3 text-center  ">
        <h2 className="text-white md:text-4xl text-3xl leading-normal lg:text-4xl font-bold  ">
          TourVibe Elevate Your Travel Experience and Explore the Wonders of
          Bangladesh
        </h2>
        <Link to={'/allTurist'}>
          <button className="btn mt-6 bg-[#FF497C] border-none text-white">
            view deatils
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ExtaSpost;
