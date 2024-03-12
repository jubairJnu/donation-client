import { Outlet } from "react-router-dom";
import DashNavbar from "../DashNavbar";

const DashboardLayout = () => {
  return (
    <div>
      <DashNavbar />
      {/* <h1>Dahsboard</h1> */}
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
