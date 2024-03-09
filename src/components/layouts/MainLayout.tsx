import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Head from "../Head/Head";

const MainLayout = () => {
  return (
    <section>
      <section>
        <Head />
        <Navbar />
      </section>
      <section>
        <Outlet />
      </section>
    </section>
  );
};

export default MainLayout;
