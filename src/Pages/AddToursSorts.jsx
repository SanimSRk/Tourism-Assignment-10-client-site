import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AddToursSorts = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    document.title = 'TourVibe /All Tourists Spot';
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    const {
      TouristsSoprt,
      countryName,
      location,
      description,
      averageCost,
      seasonality,
      travelTime,
      totaVisitorsPerYea,
      image,
    } = data;

    const email = user.email;
    const userName = user.displayName;

    const products = {
      TouristsSoprt,
      countryName,
      location,
      description,
      averageCost,
      seasonality,
      travelTime,
      totaVisitorsPerYea,
      image,
      email,
      userName,
    };

    fetch('https://tour-vibe-server-site.vercel.app/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(products),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: 'Good job!',
            text: 'You have successfully product added!',
            icon: 'success',
          });
        }
      });
  };
  return (
    <div>
      <div className=" lg:w-2/3 mx-auto my-[40px] md:my-[70px] lg:my-[100px] shadow-lg md:py-[40px] lg:py-[72px] py-8 px-5 md:px-[60px] lg:px-[100px]">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-[#FF497C]">Add</span> Your Product
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Tourists Spot Name</span>
              </label>
              <input
                type="text"
                placeholder="Tourists_spot_name"
                className="input input-bordered"
                required
                {...register('TouristsSoprt', { required: true })}
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Country Name</span>
              </label>

              <div className="">
                <select
                  className="select select-bordered w-full max-w-xs"
                  {...register('countryName', { required: true })}
                >
                  <option disabled selected>
                    Select your country
                  </option>
                  <option>bangladesh</option>
                  <option>thailand</option>
                  <option>indonesia</option>
                  <option>malaysia</option>
                  <option>vietnam</option>
                  <option>cambodia</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-4 my-2">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="Enter your location "
                className="input input-bordered"
                required
                {...register('location', { required: true })}
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Short description </span>
              </label>
              <input
                type="text"
                placeholder="Enter Short description"
                className="input input-bordered"
                required
                {...register('description', { required: true })}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Average cost</span>
              </label>
              <input
                type="text"
                placeholder="Enter average_cost "
                className="input input-bordered"
                required
                {...register('averageCost', { required: true })}
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Seasonality </span>
              </label>
              <input
                type="text"
                placeholder="Enter seasonality "
                className="input input-bordered"
                required
                {...register('seasonality', { required: true })}
              />
            </div>
          </div>
          <div className="flex gap-4 my-2">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Travel time</span>
              </label>
              <input
                type="text"
                placeholder="Enter travel_time"
                className="input input-bordered"
                required
                {...register('travelTime', { required: true })}
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">TotaVisitorsPerYea</span>
              </label>
              <input
                type="text"
                placeholder="Enter totaVisitorsPerYea"
                className="input input-bordered"
                required
                {...register('totaVisitorsPerYea', { required: true })}
              />
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text"> Image Url </span>
            </label>
            <input
              type="text"
              placeholder="Enter image url......."
              className="input input-bordered"
              required
              {...register('image', { required: true })}
            />
          </div>
          <input
            className="text-white btn w-full mt-6 bg-[#FF497C]"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddToursSorts;
