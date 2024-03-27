import LeaderboardTableHead from "./LeaderboardTableHead";
import LeaderboardTableRow from "./LeaderboardTableRow";

const LeaderboardComp = () => {
  return (
    <div className="py-16">
      <div className="mb-10">
        <h2 className="font-semibold  dark:text-white">Our Top Donor</h2>
      </div>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <LeaderboardTableHead />
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  <LeaderboardTableRow />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardComp;
