import { useEffect, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const BannerSilder = () => {
  const [banners, setBanners] = useState([]);
  console.log(banners);
  useEffect(() => {
    fetch('https://tour-vibe-server-site.vercel.app/products')
      .then(res => res.json())
      .then(data => setBanners(data.slice(0, 5)));
  }, []);

  return (
    <div className="w-[88%] mx-auto mb-8">
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
        <div>
          {banners.map((btn, idex) => (
            <div key={idex} className="w-[88%] mx-auto">
              <SwiperSlide>
                <div className="">
                  <img
                    className="md:h-[440px] h-[280px] lg:h-[500px] w-full object-cover object-center rounded-lg"
                    src={btn.image}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              ;
            </div>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default BannerSilder;
