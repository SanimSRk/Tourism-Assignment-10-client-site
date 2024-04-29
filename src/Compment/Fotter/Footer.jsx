import { BsInstagram } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="p-10 bg-base-200 text-base-content">
      <div className="">
        <h2 className=" text-2xl gap-0 font-bold text-center mb-10">
          {' '}
          Tour<span className="text-[#FF497C]">Vibe</span>
        </h2>
      </div>

      <div className="border-y py-8 mb-6 flex gap-8 justify-center">
        <FaGithub className="text-4xl " />
        <FaTwitter className="text-4xl " />
        <BsInstagram className="text-4xl " />
        <FaFacebook className="text-4xl " />
      </div>
      <footer className="footer ">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Additional Services</a>
          <a className="link link-hover">Private Tours</a>
          <a className="link link-hover">Customized Tours</a>
          <a className="link link-hover">Accommodation Booking</a>
          <a className="link link-hover">24/7 Customer Support</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Tour Planning and Customization</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer footer-center mt-4 p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2024 - All right reserved by TourVibe</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
