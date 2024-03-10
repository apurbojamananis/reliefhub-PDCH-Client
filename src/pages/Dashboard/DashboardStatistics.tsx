import { TSupplies } from "@/components/Supplies/Supplies";
import { useGetSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

const DashboardStatistics = () => {
  const { data } = useGetSuppliesQuery(0);

  const TotalAmount = data?.reduce((acc: number, item: TSupplies) => {
    const amount = parseInt(item.Amount);
    acc += amount;
    return acc;
  }, 0);

  const TotalCategory = data?.reduce((acc: string[], item: TSupplies) => {
    if (!acc.includes(item.Category)) {
      acc.push(item.Category);
    }
    return acc;
  }, []);

  const TotalPerson = data?.reduce((acc: string[], item: TSupplies) => {
    if (!acc.includes(item.Name)) {
      acc.push(item.Name);
    }
    return acc;
  }, []);

  return (
    <section className="">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <div className="bg-white dark:bg-gray-600 dark:text-white shadow p-6 p-lg-6 rounded-lg ">
          <h5 className="text-center text-2xl font-semibold">Total Items</h5>
          <h1 className="text-center text-5xl lg:text-6xl font-bold mt-3">{data?.length}</h1>
        </div>
        <div className="bg-white dark:bg-gray-600 dark:text-white shadow p-6 p-lg-6 rounded-lg ">
          <h5 className="text-center text-2xl font-semibold">Total Amount</h5>
          <h1 className="text-center text-5xl lg:text-6xl font-bold mt-3">${TotalAmount}</h1>
        </div>
        <div className="bg-white dark:bg-gray-600 dark:text-white shadow p-6 p-lg-6 rounded-lg ">
          <h5 className="text-center text-2xl font-semibold">Total Category</h5>
          <h1 className="text-center text-5xl lg:text-6xl font-bold mt-3">
            {TotalCategory?.length}
          </h1>
        </div>
        <div className="bg-white dark:bg-gray-600 dark:text-white shadow p-6 p-lg-6 rounded-lg ">
          <h5 className="text-center text-2xl font-semibold"># of Person Donated</h5>
          <h1 className="text-center text-5xl lg:text-6xl font-bold mt-3">{TotalPerson?.length}</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
        <div className="bg-white dark:bg-gray-600 dark:text-white shadow min-h-[500px] rounded-lg p-2 p-lg-10">
          <PieChart />
        </div>
        <div className="bg-white dark:bg-gray-600 dark:text-white shadow min-h-[500px] rounded-lg p-2 p-lg-10">
          <LineChart />
        </div>
      </div>
    </section>
  );
};

export default DashboardStatistics;
