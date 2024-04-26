import Banner from '../Compment/Banner/Banner';
import FeaterdSpots from '../Compment/TurushSport/FeaterdSpots';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-[100px] w-[88%] mx-auto">
        <FeaterdSpots></FeaterdSpots>
      </div>
    </div>
  );
};

export default Home;
