import vol1 from "../../assets/Volunteer/1.jpg";
import vol2 from "../../assets/Volunteer/2.jpg";
import vol3 from "../../assets/Volunteer/3.jpg";
import vol4 from "../../assets/Volunteer/4.avif";
const VolunteerComp = () => {
  return (
    <section className="bg-white dark:bg-gray-900 dark:text-white">
      <div className="container px-6 py-16  py-lg-28 mx-auto">
        <h3 className="text-2xl mb-5 ">Volunteer</h3>
        <h2 className="">We Are Fighting For Your Rights</h2>

        <p className="max-w-2xl  my-6">
          Join us in making a difference! Volunteer your time, skills, and compassion to support our
          Post-Disaster Community Health and Medical Supply Chain Platform. Together, we can make a
          meaningful impact in rebuilding and strengthening communities affected by disaster.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col items-center p-8 duration-300 transform border cursor-pointer rounded-xl  hover:bg-primaryColor hover:dark:bg-gray-800 hover:text-white shadow-lg ">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src={vol1}
              alt=""
            />

            <h1 className="mt-4 text-2xl font-semibold capitalize  ">arthur melo</h1>

            <p className="mt-2 capitalize ">Volunteer</p>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  hover:bg-primaryColor hover:dark:bg-gray-800 hover:text-white shadow-lg">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src={vol2}
              alt=""
            />

            <h1 className="mt-4 text-2xl font-semibold capitalize  ">Amelia. Anderson</h1>

            <p className="mt-2 capitalize ">Volunteer</p>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  hover:bg-primaryColor hover:dark:bg-gray-800 hover:text-white shadow-lg">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src={vol3}
              alt=""
            />

            <h1 className="mt-4 text-2xl font-semibold capitalize  ">Olivia Wathan</h1>

            <p className="mt-2 capitalize ">Volunteer</p>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  hover:bg-primaryColor hover:dark:bg-gray-800 hover:text-white shadow-lg ">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src={vol4}
              alt=""
            />

            <h1 className="mt-4 text-2xl font-semibold capitalize  ">John Greek</h1>

            <p className="mt-2 capitalize ">Volunteer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerComp;
