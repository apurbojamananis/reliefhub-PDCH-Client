import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { usePostVolunteerMutation } from "@/redux/features/volunteer/volunteerApi";

type TVolunteerInfo = {
  name: string;
  email: string;
  number: string;
  location: string;
};
type TError = {
  data: {
    message: string;
    success: string;
  };
  status: number;
};

const VolunteerRegisterComp = () => {
  const navigate = useNavigate();
  const [registerVolunteerData] = usePostVolunteerMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TVolunteerInfo>();

  const onSubmit: SubmitHandler<TVolunteerInfo> = async (data) => {
    try {
      const result: any | TError = await registerVolunteerData(data);
      if (result?.error?.status === 400) {
        const message = result?.error?.data.message;
        toast.error(message);
      } else {
        toast.success("Volunteer Registered Successfully");
        navigate("/about-us");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <section className="">
      <div className=" flex justify-center p-10">
        <form
          className="w-2/3 py-8 px-10 rounded shadow-xl  dark:bg-gray-600"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center justify-center mt-4 ">
            <a
              href="#"
              className="w-12/3 pb-2 font-semibold text-center text-gray-800 capitalize border-b-2 border-primaryColor dark:text-white"
            >
              Register as Volunteer
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 items-center">
            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>

              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:outline-primaryColor "
                placeholder="Name"
                {...register("name", { required: true })}
              />
            </div>
            {errors.name && (
              <span className="text-red-500 text-sm mt-2">*User Name is required</span>
            )}

            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                type="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:outline-primaryColor "
                placeholder="Email address"
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && <span className="text-red-500 text-sm mt-2">*Email is required</span>}
          </div>
          <div className="grid lg:grid-cols-2 gap-5 items-center">
            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 mx-3 text-gray-300 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </span>

              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:outline-primaryColor "
                placeholder="Phone Number"
                {...register("number", { required: true })}
              />
            </div>
            {errors.number && (
              <span className="text-red-500 text-sm mt-2">*Number is required</span>
            )}

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 mx-3 text-gray-300 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </span>

              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:outline-primaryColor "
                placeholder="location"
                {...register("location", { required: true })}
              />
            </div>
            {errors.location && (
              <span className="text-red-500 text-sm mt-2">*location is required</span>
            )}
          </div>
          <div className="mt-10">
            <button
              className="w-full px-6 py-3 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primaryColor rounded-lg hover:bg-transparent  hover:text-primaryColor outline outline-primaryColor hover:outline-primaryColor "
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default VolunteerRegisterComp;
