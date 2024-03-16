import PrimaryButton from "@/utils/PrimaryButton/PrimaryButton";
import TableHeader from "./TableHeader";
import { useGetSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import TableRow from "./TableRow";
import { NavLink } from "react-router-dom";
import { TSupplies } from "@/components/Supplies/Supplies";

const SupplyTable = () => {
  const { data } = useGetSuppliesQuery(0);

  return (
    <section className="container px-4 mx-auto ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h4 className="text-3xl font-semibold text-gray-800 border-l-4 pl-2 mt-5 mt-md-0 border-secondaryColor ">
          All Supplies
        </h4>
        <div className="flex items-center mt-4 gap-x-3">
          <NavLink to="/dashboard/create-supply">
            <PrimaryButton>Create Post</PrimaryButton>
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col mt-6 ">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-300  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200  ">
                <TableHeader />
                <tbody className="bg-white divide-y divide-gray-200  ">
                  {Array.isArray(data) &&
                    data?.map((item: TSupplies) => <TableRow key={item._id} item={item} />)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyTable;
