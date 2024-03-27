import { useGetVolunteerQuery } from "@/redux/features/volunteer/volunteerApi";

type TVolunteerData = {
  _id: string;
  name: string;
  email: string;
  number: string;
  location: string;
};
const VolunteerTableRow = () => {
  const { data } = useGetVolunteerQuery(undefined);
  return (
    <>
      {data?.map((item: TVolunteerData, index: number) => (
        <tr key={item._id} className="text-textColor">
          <td className="px-4 py-4 text-sm  dark:text-gray-300 whitespace-nowrap">{index + 1}</td>
          <td className="px-4 py-4 text-sm  dark:text-gray-300 whitespace-nowrap">{item.name}</td>
          <td className="px-4 py-4 text-sm  dark:text-gray-300 whitespace-nowrap">{item.email}</td>
          <td className="px-4 py-4 text-sm  dark:text-gray-300 whitespace-nowrap">
            {item.location}
          </td>
          <td className="px-4 py-4 text-sm  dark:text-gray-300 whitespace-nowrap">{item.number}</td>
        </tr>
      ))}
    </>
  );
};

export default VolunteerTableRow;
