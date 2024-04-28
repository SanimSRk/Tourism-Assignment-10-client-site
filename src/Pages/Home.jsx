import Banner from '../Compment/Banner/Banner';
import FeaterdSpots from '../Compment/TurushSport/FeaterdSpots';
import CountryData from '../Country/CountryData';
import ExtaSecton from '../ExtaSection/ExtaSecton';
import ExtaSpost from '../ExtaSection/ExtaSpost';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ExtaSecton></ExtaSecton>
      <div className="my-[100px] w-[88%] mx-auto">
        <FeaterdSpots></FeaterdSpots>
      </div>
      <ExtaSpost></ExtaSpost>
      <CountryData></CountryData>
    </div>
  );
};

export default Home;
