// importing libraries:
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const BarChart = ({ data1, data2 }) => {
  const data = {
    labels: new Array(30).fill(0).map((i, j) => j + 1),
    datasets: [
      {
        label: "Income Amount",
        data: new Array(30).fill(0).map((i, j) => {
          let a = 0;
          data1?.forEach((e) => {
            if (Number(e.dateAdded.slice(-2)) === j + 1) {
              a += e.amount;
            }
          });

          return a;
        }),
        backgroundColor: "#51fbce99",
        borderColor: "#000",
        borderWidth: 1,
      },
      {
        label: "Expense Amount",
        data: new Array(30).fill(0).map((i, j) => {
          let a = 0;
          data2?.forEach((e) => {
            if (Number(e.dateAdded.slice(-2)) === j + 1) {
              a += e.amount;
            }
          });

          return a;
        }),
        backgroundColor: "#fff8bd99",
        borderColor: "#000",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          offset: true,
        },
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};
