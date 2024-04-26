import { Link, NavLink } from 'react-router-dom';
import userProfile from '../../assets/user-profile.png';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Naver = () => {
  const { user, handileLogoutUsr } = useContext(AuthContext);
  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
            : 'hover:text-[#FF497C]'
        }
      >
        <span className="font-semibold">Home</span>
      </NavLink>
      <NavLink
        to="/allTurist"
        className={({ isActive }) =>
          isActive
            ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
            : 'hover:text-[#FF497C]'
        }
      >
        <span className="font-semibold">All Tourists Spot</span>
      </NavLink>
      <NavLink
        to="/addTurist"
        className={({ isActive }) =>
          isActive
            ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
            : 'hover:text-[#FF497C]'
        }
      >
        <span className="font-semibold">Add Tourists Spot</span>
      </NavLink>

      <NavLink
        to="/myList"
        className={({ isActive }) =>
          isActive
            ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
            : 'hover:text-[#FF497C]'
        }
      >
        <span className="font-semibold"> My List</span>
      </NavLink>
    </>
  );

  const handileLogut = () => {
    handileLogoutUsr()
      .then(reult => {
        console.log(reult.user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div
      className="w-full 
     fixed z-10 shadow-lg"
    >
      <div className="navbar px-[6%] mx-auto bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4 "
            >
              {navlinks}
            </ul>
          </div>
          <img className="w-[55px]" src="/public/beach.jpg" alt="" />
          <a className=" text-2xl gap-0 font-bold">
            {' '}
            Tour<span className="text-[#FF497C]">Vibe</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || userProfile} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      {user?.displayName || 'Name not found'}
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li onClick={handileLogut}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link to={'/login'}>
              <a className="btn bg-[#FF497C] text-white">Login</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Naver;
