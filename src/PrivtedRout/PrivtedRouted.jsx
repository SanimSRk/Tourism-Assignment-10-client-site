import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivtedRouted = ({ children }) => {
  const { user, lodings } = useContext(AuthContext);
  const locations = useLocation();

  if (lodings) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (!user) {
    return <Navigate to={'/login'} state={locations.pathname}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivtedRouted;
