import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="">
      <div className="px-4 grid grid-cols-12 gap-y-2 ">
        <NavLink to="/dashboard" className=" col-span-12 xl:col-span-7 ">
          <img src={logo} alt="" className=" bg-cover" />
        </NavLink>

        <NavLink
          to="/"
          className="font-medium border-t-2 xl:border-t-0 xl:border-l-2 border-gray-300 col-span-12 xl:col-span-5 flex xl:justify-center xl:items-center hover:underline pt-5 xl:pt-0 text-sm md:"
        >
          Go Home
        </NavLink>
      </div>
      <div className="px-2">
        <hr className="border-1 mt-5  border-gray-400" />
      </div>
      <div className="flex flex-col gap-5 px-2 py-5">
        {/* <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            cn(
              "bg-gray-400/50  px-2 py-3 rounded-lg  hover:bg-gray-600 hover:text-[#ebebeb] ",
              {
                "bg-gray-600 text-[#ebebeb]": isActive,
              }
            )
          }
        >
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 shrink-0"
            >
              <path d="M3.75 3A1.75 1.75 0 0 0 2 4.75v3.26a3.235 3.235 0 0 1 1.75-.51h12.5c.644 0 1.245.188 1.75.51V6.75A1.75 1.75 0 0 0 16.25 5h-4.836a.25.25 0 0 1-.177-.073L9.823 3.513A1.75 1.75 0 0 0 8.586 3H3.75ZM3.75 9A1.75 1.75 0 0 0 2 10.75v4.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 18 15.25v-4.5A1.75 1.75 0 0 0 16.25 9H3.75Z" />
            </svg>

            <span className="text-base font-semibold truncate">Dashboard </span>
          </div>
        </NavLink> */}
        <NavLink
          to="supplies"
          className={({ isActive }: { isActive: boolean }): string =>
            cn(
              "bg-gray-400/50  px-2 py-3 rounded-lg font-semibold hover:bg-gray-600 hover:text-[#ebebeb] ",
              {
                "bg-gray-600 text-[#ebebeb]": isActive,
              }
            )
          }
        >
          <div className="flex gap-2 ">
            <svg
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
              ></path>
            </svg>

            <span className="truncate text-base ">All Supply </span>
          </div>
        </NavLink>
        <NavLink
          to="create-supply"
          className={({ isActive }: { isActive: boolean }): string =>
            cn(
              "bg-gray-400/50  px-2 py-3 rounded-lg  hover:bg-gray-600 hover:text-[#ebebeb] ",
              {
                "bg-gray-600 text-[#ebebeb]": isActive,
              }
            )
          }
        >
          <div className="flex gap-2">
            <svg
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              ></path>
            </svg>

            <span className="text-base font-semibold truncate">
              Create Supply{" "}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
