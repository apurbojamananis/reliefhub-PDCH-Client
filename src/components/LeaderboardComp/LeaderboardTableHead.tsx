const LeaderboardTableHead = () => {
  return (
    <thead className="bg-secondaryColor dark:bg-gray-800">
      <tr>
        <th
          scope="col"
          className="px-4 py-4 text-lg font-semibold text-center rtl:text-right text-white dark:text-gray-300"
        >
          SL
        </th>
        <th
          scope="col"
          className="px-4 py-4 text-lg font-semibold text-left rtl:text-right text-white dark:text-gray-300"
        >
          Image
        </th>
        <th
          scope="col"
          className="px-4 py-4 text-lg font-semibold text-left rtl:text-right text-white dark:text-gray-300"
        >
          Name
        </th>
        <th
          scope="col"
          className="px-4 py-4text-lg font-semibold text-left rtl:text-right text-white dark:text-gray-300"
        >
          Amount
        </th>
      </tr>
    </thead>
  );
};

export default LeaderboardTableHead;
