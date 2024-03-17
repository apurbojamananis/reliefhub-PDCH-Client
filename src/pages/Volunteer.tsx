import VolunteerRegisterComp from "@/components/VolunteerRegisterComp/VolunteerRegisterComp";

const Volunteer = () => {
  return (
    <div className="dark:bg-gray-800 min-h-screen">
      <div className="VolunteerBG ">
        <div className="container mx-auto  ">
          <div className="flex justify-center items-center min-h-[350px]">
            <div className="z-10 flex flex-col gap-8">
              <h2 className="text-white block">Volunteer</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto ">
        <VolunteerRegisterComp />
      </div>
    </div>
  );
};

export default Volunteer;
