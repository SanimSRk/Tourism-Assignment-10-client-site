import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import loders from '../../public/Animation.json';
import Lottie from 'lottie-react';

const PrivtedRouted = ({ children }) => {
  const { user, lodings } = useContext(AuthContext);
  const locations = useLocation();

  if (lodings) {
    return <Lottie animationData={loders} loop={true} />;
  }
  if (!user) {
    return <Navigate to={'/login'} state={locations.pathname}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivtedRouted;
