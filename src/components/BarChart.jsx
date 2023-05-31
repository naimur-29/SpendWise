// importing libraries:
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

// chart.js not registered fix:
ChartJS.register(...registerables);

export const BarChart = ({ data1, data2, totalIncome, totalExpense }) => {
  const data = {
    labels: new Array(30).fill(0).map((i, j) => j + 1),
    datasets: [
      {
        label: "Income " + (totalIncome || "0") + "/-",
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
        label: "Expense " + (totalExpense || "0") + "/-",
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
