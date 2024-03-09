const TableHeader = () => {
  return (
    <thead className="bg-gray-200 ">
      <tr>
        <th
          scope="col"
          className="px-6 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-700 "
        >
          Title
        </th>

        <th
          scope="col"
          className="px-6 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-700 "
        >
          Category
        </th>

        <th
          scope="col"
          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-700 "
        >
          Amount
        </th>

        <th
          scope="col"
          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-700 "
        >
          Edit
        </th>

        <th
          scope="col"
          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-700 "
        >
          Delete
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
