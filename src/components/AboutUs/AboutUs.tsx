import PrimaryButton from "@/utils/PrimaryButton/PrimaryButton";
import AboutUsMain from "../../assets/AboutUs.jpg";

const AboutUs = () => {
  return (
    <section className="py-16 py-lg-28 dark:bg-gray-800 dark:text-white" id="about">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="h-full ">
            <img src={AboutUsMain} alt="" className="h-full rounded-xl" />
          </div>
          <div className="flex flex-col justify-center lg:pl-16">
            <h3 className="text-2xl mb-5 ">About us</h3>
            <h2>Our Mission and Vission</h2>
            <p className="text-paragraphColor mt-5">
              we are dedicated to revolutionizing the way communities respond to health crises in
              the aftermath of disasters. Our platform serves as a lifeline for communities,
              healthcare providers, relief organizations, and government agencies, facilitating the
              efficient coordination and distribution of essential medical supplies and services.
            </p>
            <p className="text-paragraphColor mt-3">
              Our mission is to empower communities to navigate the complexities of post-disaster
              healthcare through innovative technology and collaborative solutions. We believe that
              by leveraging the power of data-driven insights and strategic partnerships, we can
              enhance the resilience of communities and ensure timely access to life-saving
              resources.
            </p>
            <div>
              <ul className="list-inside list-disc mt-5 text-textColor dark:text-gray-300">
                <li>Cutting-edge Technology</li>
                <li>Collaborative Approach</li>
                <li>Impactful Results</li>
              </ul>
            </div>
            <div className="mt-10">
              <PrimaryButton>Learn More</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
