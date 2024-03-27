const VolunteerTableHead = () => {
  return (
    <thead className="bg-secondaryColor dark:bg-gray-800">
      <tr>
        <th
          scope="col"
          className="px-4 py-3.5 text-base font-semibold text-left rtl:text-right text-white dark:text-gray-400"
        >
          SL
        </th>
        <th
          scope="col"
          className="px-12 py-3.5 text-base font-semibold text-left rtl:text-right text-white dark:text-gray-400"
        >
          Name
        </th>
        <th
          scope="col"
          className="px-12 py-3.5 text-base font-semibold text-left rtl:text-right text-white dark:text-gray-400"
        >
          Email
        </th>

        <th
          scope="col"
          className="px-4 py-3.5 text-base font-semibold text-left rtl:text-right text-white dark:text-gray-400"
        >
          Location
        </th>

        <th
          scope="col"
          className="px-4 py-3.5 text-base font-semibold text-left rtl:text-right text-white dark:text-gray-400"
        >
          Contact Number
        </th>
      </tr>
    </thead>
  );
};

export default VolunteerTableHead;
