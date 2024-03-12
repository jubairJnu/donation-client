import { Link, NavLink } from "react-router-dom";

import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

import logo from "../../assets/donation-logo-01.png";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/Hooks";
import { currentToken, logOut } from "@/redux/features/authSlice";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { changeTheme, currentTheme } from "@/redux/features/theme/themeSlice";

const Navbar = () => {
  const token = useAppSelector(currentToken);
  const isDark = useAppSelector(currentTheme);
  const dispatch = useAppDispatch();

  //handle logout

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleToggleTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <div className="shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] ">
      <div className="w-full max-w-[1280px] mx-auto">
        <header>
          <div
            className={`h-6 flex flex-row justify-between items-center bg-white py-10 pt-6   mx-auto px-3  ${
              isDark ? "bg-black text-white " : ""
            }`}
          >
            <NavLink to="/">
              <img className="w-20 mt-3" src={logo} alt="" />
            </NavLink>

            <div
              className={`z[999] ${
                open
                  ? "visible fixed inset-0 z-[999] bg-dark-blue bg-opacity-65  w-44 h-60 p-4  "
                  : "invisible"
              }  md:visible `}
            >
              <div className="space-x-4 flex flex-col md:flex-row gap-5 md:gap-x-4 font-semibold text-[#AFAFAF] text-[16px] list-none ">
                <NavLink
                  onClick={() => setOpen(false)}
                  className="hover:text-black transition-all"
                  to="/winter-clothes"
                >
                  All Winter Clothes
                </NavLink>

                {/* doneTodo for if user hav login */}
                {token && (
                  <NavLink
                    onClick={() => setOpen(false)}
                    className="hover:text-black transition-all "
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                )}
              </div>
            </div>
            <div className="flex items-center gap-10">
              {isDark ? (
                <button onClick={handleToggleTheme}>
                  <span className="text-2xl">
                    <MdLightMode />
                  </span>
                </button>
              ) : (
                <button onClick={handleToggleTheme}>
                  <span className="text-2xl">
                    <MdDarkMode />
                  </span>
                </button>
              )}

              {/* login button */}
              {token ? (
                <Button onClick={handleLogOut} variant="destructive">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button className="">Login</Button>
                </Link>
              )}
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

export default Navbar;
