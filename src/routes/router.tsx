import App from "@/App";
import SingleSupplies from "@/components/Supplies/SingleSupplies/SingleSupplies";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import ProtectedLayout from "@/components/layouts/ProtectedLayout";
import AllSupplies from "@/pages/AllSupplies/AllSupplies";
import CreateSupply from "@/pages/Dashboard/CreateSupply/CreateSupply";
import DAllSupplies from "@/pages/Dashboard/DAllSupplies/DAllSupplies";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

import { createBrowserRouter } from "react-router-dom";

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
        path: "supplies",
        element: <AllSupplies />,
      },
      {
        path: "supplies/:id",
        element: <SingleSupplies />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <ProtectedLayout>
        <DashboardLayout />
      </ProtectedLayout>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "supplies",
        element: <DAllSupplies />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
    ],
  },
]);

export default router;
