import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
  const { hanidleClickCreat, updataUserProfile, handileLogoutUsr } =
    useContext(AuthContext);
  const locations = useLocation();
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    const { fullName, password, email, photo } = data;
    console.log(fullName);

    hanidleClickCreat(email, password)
      .then(result => {
        if (result.user) {
          handileLogoutUsr();
        }
        updataUserProfile(fullName, photo).then(() => {
          Navigate(locations?.state || '/login');
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className=" min-h-screen ">
        <div className=" hero-content flex-col lg:flex-row-reverse">
          <div className=" card shrink-0 w-[40%] shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full card-body border-2 border-[#FF497C] rounded-lg"
            >
              <h2 className="text-3xl font-bold text-[#FF497C] text-center">
                Register Now
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered border-[#FF497C]"
                  required
                  {...register('fullName', { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered border-[#FF497C]"
                  required
                  {...register('email', { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL..."
                  className="input input-bordered border-[#FF497C]"
                  required
                  {...register('photo', { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered border-[#FF497C]"
                  required
                  {...register('password', { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#FF497C] text-white"
                  type="submit"
                  value=" Register Now"
                />
              </div>
              <p className="text-center">
                Alredy account ?
                <Link to={'/login'}>
                  <span className="text-[#FF497C] font-semibold">Login</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
