import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainRote from './Layout/MainRote';
import Home from './Pages/Home';
import Login from './Compment/FormReleted/Login';
import Register from './Compment/FormReleted/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import TouristSport from './Pages/TouristSport';
import AddToursSorts from './Pages/AddToursSorts';
import MYLIst from './Pages/MYLIst';
import PrivtedRouted from './PrivtedRout/PrivtedRouted';
import AllProductDeatils from './Compment/AllProduct/AllProductDeatils';
import FeaterdDeatils from './Compment/TurushSport/FeaterdDeatils';
import UpdateUsers from './Compment/FormReleted/UpdateUsers';
import NotFound from './ErrorRouter/NotFound';
import AllCountry from './Country/AllCountry';
import DeatilsCountry from './Country/DeatilsCountry';
import loders from '../public/Animation.json';
import Lottie from 'lottie-react';
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound></NotFound>,
    element: <MainRote></MainRote>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/allTurist',
        element: <TouristSport></TouristSport>,
        loader: () =>
          fetch('https://tour-vibe-server-site.vercel.app/products'),
      },
      {
        path: '/addTurist',

        element: (
          <PrivtedRouted>
            <AddToursSorts></AddToursSorts>
          </PrivtedRouted>
        ),
      },
      {
        path: '/myList',
        element: (
          <PrivtedRouted>
            {' '}
            <MYLIst></MYLIst>
          </PrivtedRouted>
        ),
      },
      {
        path: '/allProductDeatils/:id',
        element: (
          <PrivtedRouted>
            <AllProductDeatils></AllProductDeatils>{' '}
          </PrivtedRouted>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tour-vibe-server-site.vercel.app/products/${params.id}`
          ),
      },
      {
        path: '/featerDeatils/:id',
        element: (
          <PrivtedRouted>
            <FeaterdDeatils></FeaterdDeatils>{' '}
          </PrivtedRouted>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tour-vibe-server-site.vercel.app/products/${params.id}`
          ),
      },
      {
        path: '/updates/:id',
        element: (
          <PrivtedRouted>
            <UpdateUsers></UpdateUsers>
          </PrivtedRouted>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tour-vibe-server-site.vercel.app/products/${params.id}`
          ),
      },
      {
        path: '/allCountrys/:countryName',
        element: <AllCountry></AllCountry>,
        loader: ({ params }) =>
          fetch(
            `https://tour-vibe-server-site.vercel.app/allcountry/${params.countryName}`
          ),
      },
      {
        path: '/deatilsCountry/:id',
        element: <DeatilsCountry></DeatilsCountry>,
        loader: ({ params }) =>
          fetch(
            `https://tour-vibe-server-site.vercel.app/countryDeatils/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider
        router={router}
        fallbackElement={<Lottie animationData={loders} loop={true} />}
      />
    </AuthProvider>
  </React.StrictMode>
);
