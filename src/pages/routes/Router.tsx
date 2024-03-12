import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import Home from "../homes/Home";
import AllWinters from "../AllWinter/AllWinters";
import ClothDetails from "../cloths/ClothDetails";
import Login from "../Login";
import DashboardLayout from "../component/layOut/DashboardLayout";
import ProtectedRoutes from "./ProtectedRoutes";
import OverviewChart from "../dashboard/OverviewChart";
import AllWinterCloths from "../dashboard/AllWinterCloths";
import AddWinterCloth from "../dashboard/AddWinterCloth";
import DonnerLeaderboard from "../DonnerLeaderboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/winter-clothes",
        element: <AllWinters />,
      },
      {
        path: "/leaderboard",
        element: <DonnerLeaderboard />,
      },
      {
        path: "/winter-clothes/:id",
        element: <ClothDetails />,
        loader: ({ params }) =>
          fetch(
            `https://l2-b2-frontend-path-assignment-6-server-starter-pack-kohl.vercel.app/api/v1/cloths/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes>
        <DashboardLayout />,
      </ProtectedRoutes>
    ),

    children: [
      {
        index: true,
        element: <OverviewChart />,
      },
      {
        path: "winter-clothes",
        element: <AllWinterCloths />,
      },
      {
        path: "create-winter-clothes",
        element: <AddWinterCloth />,
      },
    ],
  },
]);

export default router;
