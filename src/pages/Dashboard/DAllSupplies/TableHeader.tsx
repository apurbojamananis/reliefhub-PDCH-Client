const TableHeader = () => {
  return (
    <thead className="bg-gray-200 dark:bg-gray-700 ">
      <tr>
        <th
          scope="col"
          className="px-6 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-700 dark:text-gray-200"
        >
          Title
        </th>

        <th
          scope="col"
          className="px-6 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-700 dark:text-gray-200"
        >
          Category
        </th>

        <th
          scope="col"
          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-700 dark:text-gray-200"
        >
          Amount
        </th>

        <th
          scope="col"
          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-700 dark:text-gray-200"
        >
          Edit
        </th>

        <th
          scope="col"
          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-700 dark:text-gray-200"
        >
          Delete
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
