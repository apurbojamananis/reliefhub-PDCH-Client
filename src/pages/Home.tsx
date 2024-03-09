import AboutUs from "@/components/AboutUs/AboutUs";
import Banner from "@/components/Banner/Banner";
import Gallery from "@/components/Gallery/Gallery";
import HomeSupplies from "@/components/Supplies/HomeSupplies";
import Testimonial from "@/components/Testimonial/Testimonial";
import Footer from "./Footer";
import Volunteer from "@/components/Volunteer/Volunteer";
import Blog from "@/components/Blog/Blog";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeSupplies />
      <AboutUs />
      <Gallery />
      <Testimonial />
      <Volunteer />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
