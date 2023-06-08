// importing libraries:
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

// chart.js not registered fix:
ChartJS.register(...registerables);

export const BarChart = ({
  data1,
  data2,
  totalIncome,
  totalExpense,
  theme,
}) => {
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
        backgroundColor: theme === "light" ? "#51fbce99" : "#51fbce44",
        borderColor: theme === "light" ? "#000" : "#51fbce",
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
        backgroundColor: theme === "light" ? "#fff8bd99" : "#fff8bd44",
        borderColor: theme === "light" ? "#000" : "#fff8bd",
        borderWidth: 1,
      },
    ],
  };

  const optionLight = {
    responsive: true,
    scales: {
      x: {
        grid: {
          offset: true,
        },
      },
    },
  };

  const optionDark = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#fffe",
        },
      },
    },
    scales: {
      x: {
        grid: {
          offset: true,
          color: "#fff2",
        },
        ticks: {
          color: "#fff9",
        },
      },
      y: {
        grid: {
          color: "#fff2",
        },
        ticks: {
          color: "#fff9",
        },
      },
    },
  };

  return (
    <Chart
      type="bar"
      data={data}
      options={theme === "light" ? optionLight : optionDark}
    />
  );
};
