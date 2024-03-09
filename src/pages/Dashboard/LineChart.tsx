import { TSupplies } from "@/components/Supplies/Supplies";
import { useGetSuppliesQuery } from "@/redux/features/supplies/suppliesApi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  defaults,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const options = {
  plugins: {
    legend: {
      display: true,
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Item based on Category",
    },
    labels: {
      usePointStyle: true,
      pointStyle: "circle",
      padding: 20,
    },
  },
};

type TCategory = {
  Category: string;
  Amount: number;
};

const LineChart = () => {
  const { data } = useGetSuppliesQuery(0);
  const TotalCategory = data?.reduce((acc: string[], item: TSupplies) => {
    if (!acc.includes(item.Category)) {
      acc.push(item.Category);
    }
    return acc;
  }, []);

  const TotalAmountByTotal = data?.reduce(
    (acc: TCategory[], item: TSupplies) => {
      const amount = parseInt(item.Amount);
      const existingCategory = acc.find(
        (category) => category.Category === item.Category
      );
      if (existingCategory) {
        existingCategory.Amount += amount;
      } else {
        acc.push({ Category: item.Category, Amount: amount });
      }
      return acc;
    },
    []
  );

  const labels = TotalCategory;
  const LineData = {
    labels,
    datasets: [
      {
        label: "Amount",
        data: TotalAmountByTotal?.map((item: TCategory) => item.Amount),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={LineData} />;
};

export default LineChart;
