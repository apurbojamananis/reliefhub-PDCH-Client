import PrimaryButton from "@/utils/PrimaryButton/PrimaryButton";
import { TSupplies } from "./Supplies";
import { NavLink } from "react-router-dom";

export type  TSupplyCardProps = {
  item: TSupplies;
}

const SupplyCard: React.FC<TSupplyCardProps> = ({ item }) => {
  return (
    <div className="shadow-md ">
      <img
        className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
        src={item.Image}
        alt=""
      />

      <div className="mt-8 p-5">
        <span className="text-secondaryColor uppercase">{item.Category}</span>

        <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
          {item.Title}
        </h1>

        {/* <p className="mt-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est
          asperiores vel, ab animi recusandae nulla veritatis id tempore
          sapiente
        </p> */}

        <div className="flex items-center justify-between mt-4">
          <div>
            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
              Price: ${item.Amount}
            </h4>
          </div>

          <NavLink to={`/supplies/${item._id}`}>
            <PrimaryButton>View Detail</PrimaryButton>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SupplyCard;
