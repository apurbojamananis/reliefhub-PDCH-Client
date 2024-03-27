import AboutUsComp from "@/components/AboutUsComp/AboutUsComp";
import VolunteerRegistered from "@/components/VolunteerRegistered/VolunteerRegistered";

const AboutUs = () => {
  return (
    <section className="dark:bg-gray-800">
      <div className="AboutUsBannerBG ">
        <div className="container mx-auto  ">
          <div className="flex justify-center items-center min-h-[350px]">
            <div className="z-10 flex flex-col gap-8">
              <h2 className="text-white block">About Us</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto  ">
        <AboutUsComp />
        <hr className="dark:border-gray-600 " />
        <VolunteerRegistered />
      </div>
    </section>
  );
};

export default AboutUs;
