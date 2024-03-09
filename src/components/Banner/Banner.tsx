import mainHero from "../../assets/main-hero.png";

const Banner = () => {
  return (
    <section className="bannerBg ">
      <div className="container mx-auto h-[90vh] sm:h-[60vh] lg:h-[80vh] xl:h-[90vh] ">
        <div className="grid grid-cols-2 h-full gap-5 relative">
          <div className=" col-span-1 overflow-hidden hidden lg:block">
            <div className="absolute bottom-0 left-0 ">
              <img
                src={mainHero}
                alt=""
                className=" size-9/12 2xl:size-full object-contain "
              />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 text-white flex flex-col justify-center">
            <h1 className="flex flex-col gap-y-3">
              <span className="text-2xl lg:text-5xl ">Emergency</span>
              <span className="text-5xl lg:text-7xl leading-tight lg:leading-normal font-bold uppercase ">
                Flood Response
              </span>
            </h1>
            <p className="mt-8 text-white w-full md:w-2/3 lg:w-full">
              Mobilizing Emergency Flood Response. As waters rise and
              communities face peril, it's imperative to unite swiftly in our
              response. Join us in providing critical aid, support, and
              solidarity to those affected. Together, we can stem the tide of
              devastation and rebuild resilience amidst the floodwaters.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <button className="bg-secondaryColor px-16 py-3 text-xl hover:bg-transparent hover:outline hover:outline-[1px] hover:outline-secondaryColor ">
                Donate Us
              </button>
              <button className="bg-primaryColor px-16 py-3 text-xl hover:bg-transparent hover:outline hover:outline-[1px] hover:outline-primaryColor">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
