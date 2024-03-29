import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

const DashboardLayout = () => {
  return (
    <section className="grid grid-cols-12 dark:bg-gray-800">
      <aside className="col-span-3 md:col-span-2 bg-gray-100 dark:bg-gray-800 dark:text-white pt-5 sticky top-0 left-0 h-screen ">
        <Sidebar />
      </aside>
      <section className="col-span-9 md:col-span-10 bg-slate-50 ">
        <DashboardHeader />
        <div>
          <Outlet />
        </div>
      </section>
    </section>
  );
};

export default DashboardLayout;
