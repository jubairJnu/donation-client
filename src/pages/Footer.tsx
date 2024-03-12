import { Link } from "react-router-dom";
import logo from "../assets/donation-logo-01.png";
import { MdCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 justify-items-center place-items-center bg-zinc-700 text-slate-100">
      {/* logo */}
      <div className="flex flex-col justify-center items-center ">
        <img className="h-32" src={logo} alt="" />
        <p className="text-[20px] font-bold">
          Threads Of <span className="text-primary-blue">Hope</span>{" "}
        </p>
      </div>

      {/* second div for link */}
      <div className="flex flex-col justify-start ">
        <Link to="/">Terms and condition</Link>
        <Link to="/">Best Project </Link>
        <Link to="/">Reputed Donor</Link>
      </div>

      {/* 3rd div for contact and follow */}
      <div>
        <h3 className="text-2xl font-bold mb-2 border-b pb-2">Contact Us</h3>
        <p className="flex items-center gap-3">
          {" "}
          <MdCall /> +55455-82658
        </p>
        <div className="flex justify-between mt-5">
          <FaFacebook />
          <IoLogoYoutube />
          <FaXTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
