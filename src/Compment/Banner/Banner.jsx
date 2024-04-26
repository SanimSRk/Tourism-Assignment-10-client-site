import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="md:h-[440px] h-[280px] lg:h-[580px] w-full bg-center bg-cover bg-no-repeat bg-[linear-gradient(rgba(19,19,24,0.3),rgba(19,19,24,0.4)),url(/torush.webp)] grid items-center">
            <div className=" lg:w-2/3 md:w-3/4 mx-auto text-center ">
              <h2 className=" text-2xl md:text-3xl lg:text-5xl font-bold font-serif text-white leading-normal ">
                welcome to ours TourVibe Discovering Natures Wonders and
                Conservation Efforts
              </h2>
              <p className="text-white my-4">
                {' '}
                A leisurely drive along picturesque routes with opportunities
                for photo stops and sightseeing.
              </p>
              <button className="btn bg-[#FF497C] text-white border-none">
                view deatils{' '}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="md:h-[440px] h-[280px] lg:h-[580px] w-full bg-center bg-cover bg-no-repeat bg-[linear-gradient(rgba(19,19,24,0.3),rgba(19,19,24,0.4)),url(/torusssfd.jpg)] grid items-center">
            <div className=" lg:w-2/3 md:w-3/4 mx-auto text-center ">
              <h2 className=" text-2xl md:text-3xl lg:text-5xl font-bold font-serif text-white leading-normal ">
                welcome to ours Tour<span>Vibe</span> Discovering Natures
                Wonders and Conservation Efforts
              </h2>
              <p className="text-white my-4">
                {' '}
                A leisurely drive along picturesque routes with opportunities
                for photo stops and sightseeing.
              </p>
              <button className="btn bg-[#FF497C] text-white border-none">
                view deatils{' '}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="md:h-[440px] h-[280px] lg:h-[580px] w-full bg-center bg-cover bg-no-repeat bg-[linear-gradient(rgba(19,19,24,0.3),rgba(19,19,24,0.4)),url(/pexels-asadphoto.jpg)] grid items-center">
            <div className=" lg:w-2/3 md:w-3/4 mx-auto text-center ">
              <h2 className=" text-2xl md:text-3xl lg:text-5xl font-bold font-serif text-white leading-normal ">
                welcome to ours Tour<span>Vibe</span> Discovering Natures
                Wonders and Conservation Efforts
              </h2>
              <p className="text-white my-4">
                {' '}
                A leisurely drive along picturesque routes with opportunities
                for photo stops and sightseeing.
              </p>
              <button className="btn bg-[#FF497C] text-white border-none">
                view deatils{' '}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="md:h-[440px] h-[280px] lg:h-[580px] w-full bg-center bg-cover bg-no-repeat bg-[linear-gradient(rgba(19,19,24,0.3),rgba(19,19,24,0.4)),url(/dest.jpg)] grid items-center">
            <div className=" lg:w-2/3 md:w-3/4 mx-auto text-center ">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold font-serif text-white leading-normal ">
                welcome to ours Tour<span>Vibe</span> Discovering Natures
                Wonders and Conservation Efforts
              </h2>
              <p className="text-white my-4">
                {' '}
                A leisurely drive along picturesque routes with opportunities
                for photo stops and sightseeing.
              </p>
              <button className="btn bg-[#FF497C] text-white border-none">
                view deatils{' '}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="md:h-[440px] h-[280px] lg:h-[580px] w-full bg-center bg-cover bg-no-repeat bg-[linear-gradient(rgba(19,19,24,0.3),rgba(19,19,24,0.4)),url(/hallstatt.jpg)] grid items-center">
            <div className=" lg:w-2/3 md:w-3/4 mx-auto text-center ">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold font-serif text-white leading-normal ">
                welcome to ours Tour<span>Vibe</span> Discovering Natures
                Wonders and Conservation Efforts
              </h2>
              <p className="text-white my-4">
                {' '}
                A leisurely drive along picturesque routes with opportunities
                for photo stops and sightseeing.
              </p>
              <button className="btn bg-[#FF497C] text-white border-none">
                view deatils{' '}
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
