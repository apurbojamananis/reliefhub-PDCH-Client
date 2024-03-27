import { TPerson } from "@/pages/Dashboard/PieChart";
import { useGetSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import { TSupplies } from "../Supplies/Supplies";
import rankOne from "../../assets/1.png";
import rankTwo from "../../assets/2.png";
import rankThree from "../../assets/3.png";
import avater from "../../assets/avater.png";

type TUpdatedPerson = {
  Name: string;
  Amount: number;
  Rank?: number;
};
const LeaderboardTableRow = () => {
  const { data } = useGetSuppliesQuery(0);

  const TotalPersonAmount = data?.reduce((acc: TPerson[], item: TSupplies) => {
    const amount = parseInt(item.Amount);
    const existingPerson = acc.find((person) => person.Name === item.Name);
    if (existingPerson) {
      existingPerson.Amount += amount;
    } else {
      acc.push({ Name: item.Name, Amount: amount });
    }
    return acc;
  }, []);
  TotalPersonAmount?.sort((a: TPerson, b: TPerson) => b.Amount - a.Amount);
  TotalPersonAmount?.forEach((person: TUpdatedPerson, index: number) => {
    person.Rank = index + 1;
  });

  return (
    <>
      {TotalPersonAmount?.map((item: TUpdatedPerson) => (
        <tr key={item.Rank} className="text-textColor">
          <td className="px-4 py-4 text-lg text-center font-semibold dark:text-gray-300 whitespace-nowrap">
            {item.Rank === 1 ? (
              <img src={rankOne} alt="Rank 1" className="inline-block" />
            ) : item.Rank === 2 ? (
              <img src={rankTwo} alt="Rank 2" className="inline-block" />
            ) : item.Rank === 3 ? (
              <img src={rankThree} alt="Rank 3" className="inline-block" />
            ) : (
              item.Rank
            )}
          </td>
          <td className="px-4 py-4 text-sm  dark:text-gray-300 whitespace-nowrap">
            <img className="object-cover w-16 h-16 rounded-full" src={avater} alt="" />
          </td>
          <td className="px-4 py-4 text-lg font-semibold  dark:text-gray-300 whitespace-nowrap">
            {item.Name}
          </td>
          <td className="px-4 py-4 text-lg font-semibold  dark:text-gray-300 whitespace-nowrap">
            ${item.Amount}
          </td>
        </tr>
      ))}
    </>
  );
};

export default LeaderboardTableRow;
