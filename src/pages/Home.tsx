import AboutUsComp from "@/components/AboutUsComp/AboutUsComp";
import Banner from "@/components/Banner/Banner";
import Gallery from "@/components/Gallery/Gallery";
import HomeSupplies from "@/components/Supplies/HomeSupplies";
import Testimonial from "@/components/Testimonial/Testimonial";
import Footer from "./Footer";
import VolunteerComp from "@/components/VolunteerComp/VolunteerComp";
import Blog from "@/components/Blog/Blog";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeSupplies />
      <AboutUsComp />
      <Gallery />
      <Testimonial />
      <VolunteerComp />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
