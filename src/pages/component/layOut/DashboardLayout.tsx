import { Outlet } from "react-router-dom";
import DashNavbar from "../DashNavbar";
import { useAppSelector } from "@/redux/hooks/Hooks";
import { currentTheme } from "@/redux/features/theme/themeSlice";

const DashboardLayout = () => {
  const isDark = useAppSelector(currentTheme);
  return (
    <div
      className={`${
        isDark ? "bg-black text-white border-b border-green-500 " : ""
      }`}
    >
      <DashNavbar />
      {/* <h1>Dahsboard</h1> */}
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
