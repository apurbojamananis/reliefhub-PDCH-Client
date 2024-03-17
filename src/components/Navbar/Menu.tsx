import { currentToken } from "@/redux/features/auth/AuthSlice";
import { useAppSelector } from "@/redux/hooks";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const token = useAppSelector(currentToken);
  return (
    <ul className="flex flex-col md:flex-row gap-6 text-right md:text-left font-medium text-lg">
      <NavLink
        to="/"
        className={({ isActive }: { isActive: boolean }): string =>
          isActive ? "text-secondaryColor border-b-secondaryColor border-b-4 " : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/supplies"
        className={({ isActive }: { isActive: boolean }): string =>
          isActive ? "text-secondaryColor border-b-secondaryColor border-b-4 " : ""
        }
      >
        All Supplies
      </NavLink>
      <NavLink
        to="/community"
        className={({ isActive }: { isActive: boolean }): string =>
          isActive ? "text-secondaryColor border-b-secondaryColor border-b-4 " : ""
        }
      >
        Community
      </NavLink>
      {token && (
        <NavLink
          to="/dashboard"
          className={({ isActive }: { isActive: boolean }): string =>
            isActive ? "text-secondaryColor border-b-secondaryColor border-b-4 " : ""
          }
        >
          Dashboard
        </NavLink>
      )}
    </ul>
  );
};

export default Menu;
