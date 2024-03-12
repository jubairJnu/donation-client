import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const DashNavbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] ">
      <div className="w-full max-w-[1280px] mx-auto">
        <header>
          <div className="h-6 flex flex-row justify-between items-center bg-white py-10 pt-6   mx-auto px-3 ">
            <NavLink
              className="text-[#AFAFAF] text-[16px] font-semibold"
              to="/"
            >
              Home
            </NavLink>

            <div
              className={`z[999] ${
                open
                  ? "visible fixed inset-0 z-[999] bg-dark-blue bg-opacity-50 backdrop-filter backdrop-blur-lg w-52 h-60 p-4  "
                  : "invisible"
              }  md:visible `}
            >
              <div className="space-x-4 flex flex-col md:flex-row gap-5 md:gap-x-4 font-semibold text-[#AFAFAF] text-[16px] list-none ">
                <NavLink
                  onClick={() => setOpen(false)}
                  className="hover:text-black transition-all"
                  to="/dashboard/winter-clothes"
                >
                  <span className="truncate">All Winter Clothes</span>
                </NavLink>

                {/* todo for if user hav login */}
                <NavLink
                  onClick={() => setOpen(false)}
                  className="hover:text-black transition-all "
                  to="/dashboard/create-winter-clothes"
                >
                  Create Winter Clothes
                </NavLink>
              </div>
            </div>

            <button className="md:hidden" onClick={handleToggle}>
              <p>
                {" "}
                {open ? (
                  <span className="text-3xl font-bold text-red-500">
                    <IoCloseCircleOutline />
                  </span>
                ) : (
                  <FaBars />
                )}{" "}
              </p>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default DashNavbar;
