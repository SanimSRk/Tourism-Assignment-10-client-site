import { BsBookmarkCheck } from 'react-icons/bs';
import { FaPlane } from 'react-icons/fa6';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

const ExtaSecton = () => {
  return (
    <div className=" lg:flex gap-6  bg-[#faf5ee] p-16">
      <div>
        <div className="mb-4">
          {' '}
          <RiMoneyDollarCircleLine className="text-6xl" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Best Price Guarantee</h2>
          <p className="mt-4">
            {' '}
            The core promise of a Best Price Guarantee is that the business
            guarantees to offer the lowest price available for a particular
            product or service.
          </p>
        </div>
      </div>
      <div className="lg:mt-0 my-6 ">
        <div className="mb-4">
          <BsBookmarkCheck className="text-6xl" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Easy & Quick Booking</h2>
          <p className="mt-4">
            {' '}
            Providing real-time availability information helps customers make
            informed decisions about their bookings
          </p>
        </div>
      </div>
      <div>
        <div className="mb-4">
          <FaPlane className="text-6xl" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Best Tour Selection</h2>
          <p className="mt-4">
            {' '}
            The core promise of a Best Price Guarantee is that the business
            guarantees to offer the lowest price available for a particular
            product or service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtaSecton;
