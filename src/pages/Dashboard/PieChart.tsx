import { Chart as ChartJS, ArcElement, Tooltip, Legend, defaults } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
defaults.maintainAspectRatio = false;
defaults.responsive = true;

import { useGetSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import { TSupplies } from "@/components/Supplies/Supplies";

export type TPerson = {
  Name: string;
  Amount: number;
};

const options = {
  plugins: {
    legend: {
      display: true,
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Amount based on Person",
    },
    labels: {
      usePointStyle: true,
      pointStyle: "circle",
      padding: 20,
    },
  },
};

const PieChart = () => {
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

  const TotalPerson = data?.reduce((acc: string[], item: TSupplies) => {
    if (!acc.includes(item.Name)) {
      acc.push(item.Name);
    }
    return acc;
  }, []);

  const PieData = {
    labels: TotalPerson,
    datasets: [
      {
        label: "Total Amount",
        data: TotalPersonAmount?.map((item: TPerson) => item.Amount),
        backgroundColor: [
          "#519DE9",
          "#7CC674",
          "#73C5C5",
          "#8481DD",
          "#F6D173",
          "#EF9234",
          "#A30000",
          "#D2D2D2",
        ],
        borderColor: [
          "#519DE9",
          "#7CC674",
          "#73C5C5",
          "#8481DD",
          "#F6D173",
          "#EF9234",
          "#A30000",
          "#D2D2D2",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie options={options} data={PieData} />;
};

export default PieChart;
