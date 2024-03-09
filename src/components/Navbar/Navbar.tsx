import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import PrimaryButton from "@/utils/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/utils/SecondaryButton/SecondaryButton";
import Menu from "./Menu";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { currentToken, logout } from "@/redux/features/auth/AuthSlice";
import { toast } from "sonner";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const token = useAppSelector(currentToken);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(logout());
    toast.warning("Logout Successfully");
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="relative">
      <div className="container mx-auto py-3">
        <div className="flex justify-between items-center ">
          <div>
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>

          <div className="hidden md:flex items-center gap-5 ">
            <Menu />
            {token ? (
              <NavLink to="/">
                {" "}
                <SecondaryButton onClick={handleClick}>Logout </SecondaryButton>
              </NavLink>
            ) : (
              <NavLink to="login">
                <PrimaryButton>Login</PrimaryButton>
              </NavLink>
            )}
          </div>

          <div
            className={cn(
              "flex flex-col items-end pr-10 pb-10 gap-5 z-[999] absolute right-0 top-[92px] duration-300 w-full  bg-white md:hidden",
              {
                "block translate-y-[0] ": isOpen,
                "hidden translate-y-[-100%]": !isOpen,
              }
            )}
          >
            <div className="">
              <div className="">
                <Menu />
              </div>
              <div className="flex justify-end mt-4">
                {token ? (
                  <NavLink to="/">
                    {" "}
                    <SecondaryButton onClick={handleClick}>
                      Logout
                    </SecondaryButton>
                  </NavLink>
                ) : (
                  <NavLink to="login">
                    <PrimaryButton>Login</PrimaryButton>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={cn("size-10", {
                hidden: isOpen,
                block: !isOpen,
              })}
              onClick={handleOpen}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={cn("size-10", {
                block: isOpen,
                hidden: !isOpen,
              })}
              onClick={handleOpen}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
