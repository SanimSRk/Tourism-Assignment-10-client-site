import { Outlet } from 'react-router-dom';
import Naver from '../Compment/Header/Naver';
import Footer from '../Compment/Fotter/Footer';

const MainRote = () => {
  return (
    <div>
      <div className="h-16">
        <Naver></Naver>
      </div>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default MainRote;
