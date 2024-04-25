import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Login = () => {
  const { handileLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { email, password } = data;
    handileLogin(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="w-full hero-content flex-col lg:flex-row-reverse">
          <div className=" border-2 border-[#FF497C] rounded-lg  card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <h2 className="text-3xl font-bold text-[#FF497C] text-center">
                Login Now
              </h2>
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
              <div className="form-control mt-4">
                <button className="btn bg-[#FF497C] text-white">Login</button>
              </div>
              <p className="text-center mt-3">
                Dont have an account ?
                <Link to={'/register'}>
                  <span className="text-[#FF497C] font-semibold">
                    Register Now
                  </span>
                </Link>
              </p>

              <div className="flex gap-2 items-center">
                <div className="border border-t w-full"></div>
                <div>or</div>
                <div className="border border-t w-full"></div>
              </div>
              <div className="flex gap-4  justify-center">
                <FaGithub className="text-5xl" />
                <FcGoogle className="text-5xl" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
