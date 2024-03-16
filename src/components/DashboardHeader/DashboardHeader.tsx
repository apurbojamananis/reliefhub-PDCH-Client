import { TUser, currentUser } from "@/redux/features/auth/AuthSlice";
import { useAppSelector } from "@/redux/hooks";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const DashboardHeader = () => {
  const user: TUser | null = useAppSelector(currentUser);
  return (
    <nav className="relative bg-white shadow dark:bg-gray-800 dark:text-white">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex  lg:items-center lg:justify-end">
          <div className="flex justify-between items-center mt-4 lg:mt-0">
            <div className="">
              <input
                type="text"
                className="w-full py-2 px-2 md:pl-10 md:pr-4 text-gray-700 bg-white dark:bg-gray-200 border rounded-lg  focus:outline-primaryColor "
                placeholder="Search"
              />
            </div>
            <div className="flex">
              <button className="mx-4 text-gray-600 dark:text-gray-200 transition-colors duration-300 transform  hover:text-gray-700">
                <svg
                  className="size-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 dark:border-gray-200  rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  className="object-cover w-full h-full"
                  alt="avatar"
                />
              </div>
            </div>

            <h3 className="px-3 mx-2 text-gray-700 dark:text-gray-200 hidden lg:block">
              {user?.name}
            </h3>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
