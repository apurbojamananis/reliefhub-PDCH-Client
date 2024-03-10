import blog1 from "../../assets/Blog/1.jpg";
import blog2 from "../../assets/Blog/2.jpg";
import blog3 from "../../assets/Blog/3.jpg";
import blog4 from "../../assets/Blog/4.jpg";

const Blog = () => {
  return (
    <section className="py-16 py-xl-28 dark:bg-gray-800 dark:text-white">
      <div className="container px-6 mx-auto">
        <div className="text-center">
          <h3 className="text-2xl mb-5 ">Blog</h3>
          <h2 className="border-none">Tales of Survival and Resilience</h2>

          <p className="max-w-2xl mx-auto my-6">
            we explore stories of survival and resilience in the face of natural disasters. From
            wildfires to earthquakes, floods, and tsunamis, each post offers insights and narratives
            that illuminate the human spirit's capacity to endure amidst chaos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div>
            <a href="#">
              <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src={blog1}
                alt=""
              />
            </a>

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:shadow-white dark:bg-gray-800 hover:dark:bg-gray-900 dark:text-white">
              <a href="#" className="font-semibold hover:underline  md:text-xl">
                Into the Ashes: Insights on Fire Disasters and Recovery
              </a>

              <p className="mt-3 text-sm  md:text-sm">
                Explore the devastating impact of wildfires and structural fires, learn safety
                protocols, recovery strategies, and community resilience in the wake of flames.
              </p>

              <p className="mt-3 text-sm text-secondaryColor">11 November 2010</p>
            </div>
          </div>

          <div>
            <a href="#">
              <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src={blog2}
                alt=""
              />
            </a>

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:shadow-white dark:bg-gray-800 hover:dark:bg-gray-900 dark:text-white">
              <a href="#" className="font-semibold hover:underline  md:text-xl">
                Shaken Ground, Strong Communities: Stories of Earthquake Survival
              </a>

              <p className="mt-3 text-sm  md:text-sm">
                Delve into the seismic forces of earthquakes, discover preparedness measures,
                structural reinforcement techniques, and the journey of restoration in seismic-prone
                regions.
              </p>

              <p className="mt-3 text-sm text-secondaryColor">25 January 2015</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-2">
          <div>
            <a href="#">
              <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src={blog3}
                alt=""
              />
            </a>
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:shadow-white dark:bg-gray-800 hover:dark:bg-gray-900 dark:text-white">
              <a href="#" className="font-semibold hover:underline  md:text-xl">
                Rising Waters, Resilient Spirits: Navigating Flood Disasters
              </a>

              <p className="mt-3 text-sm  md:text-sm">
                Dive into the waters of flood disasters, uncover floodplain management, emergency
                response tactics, facing the relentless force of inundation.
              </p>

              <p className="mt-3 text-sm text-secondaryColor">15 May 2021</p>
            </div>
          </div>

          <div>
            <a href="#">
              <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src={blog4}
                alt=""
              />
            </a>

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:shadow-white dark:bg-gray-800 hover:dark:bg-gray-900 dark:text-white">
              <a href="#" className="font-semibold hover:underline  md:text-xl">
                Tsunami Chronicles: Surviving the Surge, Rebuilding the Shore
              </a>

              <p className="mt-3 text-sm  md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem
                nesciunt, laudantium quia tempore delect
              </p>

              <p className="mt-3 text-sm text-secondaryColor">29 December 2012</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
