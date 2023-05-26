import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";

export default function Card() {
  const data = [
    {
      name: "Page A",
      income: 2800,
      expense: 2400,
    },
    {
      name: "Page B",
      income: 3000,
      expense: 1398,
    },
    {
      name: "Page C",
      income: 2000,
      expense: 800,
    },
    {
      name: "Page D",
      income: 2780,
      expense: 3008,
    },
    {
      name: "Page E",
      income: 2000,
      expense: 1800,
    },
    {
      name: "Page F",
      income: 2390,
      expense: 2500,
    },
    {
      name: "Page G",
      income: 3490,
      expense: 3200,
    },
  ];

  const data2 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      {/* main container */}
      <div className="cardContainer h-full p-1 bg-gray-300">
        <div className="cardWrapper h-full mt-1">
          {/* first row starts  */}

          <div className="cardTopContainer grid grid-cols-1 gap-y-3 mb-4 sm:grid-cols-3 sm:gap-x-6 ">
            {/* 1st card starts  */}
            <a
              href="#"
              className="block w-[56%] m-auto sm:w-[100%] bg-slate-700 rounded-md shadow-md"
            >
              <div className="cardWrapper w-[100%] grid grid-cols-12 bg-red-400">
                {/* card wrapper left starts  */}
                <div className="cardLeft col-span-3 flex justify-center items-center bg-slate-600">
                  <div className="leftIcon">
                    <BsCurrencyDollar className="text-3xl text-green-600" />
                  </div>
                </div>
                {/* card wrapper left ends  */}

                {/* card wrapper right starts  */}
                <div className="cardRight col-span-9 flex flex-col  bg-gray-700 text-gray-100">
                  {/* card left top starts  */}
                  <div className="cardLeftTop m-auto">
                    <h1 className="text-xl">total income</h1>
                  </div>
                  {/* card left top ends  */}

                  {/* card bottom top starts  */}
                  <div className="cardbottom flex  items-center m-auto text-3xl font-semibold">
                    <BsCurrencyDollar className="" />
                    <h1 className="">200</h1>
                  </div>
                  {/* card bottom top ends  */}
                </div>
                {/* card wrapper right ends  */}
              </div>
            </a>
            {/* 1st card ends  */}

            {/* 2nd card starts  */}
            <a
              href="#"
              className="block  w-[56%] m-auto sm:w-[100%] bg-slate-700 rounded-md shadow-md"
            >
              <div className="cardWrapper w-[100%] grid grid-cols-12 bg-red-400">
                {/* card wrapper left starts  */}
                <div className="cardLeft col-span-3 flex justify-center items-center bg-slate-600">
                  <div className="leftIcon">
                    <BsCurrencyDollar className="text-3xl text-red-600" />
                  </div>
                </div>
                {/* card wrapper left ends  */}

                {/* card wrapper right starts  */}
                <div className="cardRight col-span-9 flex flex-col  bg-gray-700 text-gray-100">
                  {/* card left top starts  */}
                  <div className="cardLeftTop m-auto">
                    <h1 className="text-xl">total expense</h1>
                  </div>
                  {/* card left top ends  */}

                  {/* card bottom top starts  */}
                  <div className="cardbottom flex  items-center m-auto text-3xl font-semibold">
                    <BsCurrencyDollar className="" />
                    <h1 className="">200</h1>
                  </div>
                  {/* card bottom top ends  */}
                </div>
                {/* card wrapper right ends  */}
              </div>
            </a>
            {/* 2nd card ends  */}

            {/* 3rd card starts  */}
            <a
              href="#"
              className="block w-[56%] m-auto sm:w-[100%] bg-slate-700 rounded-md shadow-md"
            >
              <div className="cardWrapper w-[100%] grid grid-cols-12 rounded-md  bg-red-400">
                {/* card wrapper left starts  */}
                <div className="cardLeft col-span-3 flex justify-center items-center bg-slate-600">
                  <div className="leftIcon">
                    <BsCurrencyDollar className="text-3xl text-blue-600" />
                  </div>
                </div>
                {/* card wrapper left ends  */}

                {/* card wrapper right starts  */}
                <div className="cardRight col-span-9 flex flex-col  bg-gray-700 text-gray-100">
                  {/* card left top starts  */}
                  <div className="cardLeftTop m-auto">
                    <h1 className="text-xl">Balance</h1>
                  </div>
                  {/* card left top ends  */}

                  {/* card bottom top starts  */}
                  <div className="cardbottom flex  items-center m-auto text-3xl font-semibold">
                    <BsCurrencyDollar className="" />
                    <h1 className="">200</h1>
                  </div>
                  {/* card bottom top ends  */}
                </div>
                {/* card wrapper right ends  */}
              </div>
            </a>
            {/* 3rd card ends  */}
          </div>
          {/* first row ends  */}

          {/* second row starts  */}

          <div className="cardBottomContainer grid grid-cols-1 gap-2 customMid:grid-cols-12">
            {/* bottom left starts  */}

            <div className="bottomLeft col-span-4 flex items-center justify-center  rounded-lg shadow-md bg-gray-50">
              <div className="graphContainer  w-[100%] sm:w-[90%] customMid:w-[98%] ">
                <ResponsiveContainer width="100%" aspect={2 / 1}>
                  <PieChart width={400} height={400}>
                    <Pie
                      data={data2}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* bottom left ends  */}

            {/* bottom right starts  */}
            <div className="bottomRight col-span-8">
              <div className="graphContainer  m-auto w-[88%] sm:w-[90%] customMid:w-[98%]">
                <a
                  href="#"
                  className="block m-auto w-full py-2 bg-gray-50 rounded-lg shadow-md"
                >
                  <ResponsiveContainer width="100%" aspect={2 / 1}>
                    <LineChart
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="income"
                        stroke="#16A34A"
                        activeDot={{ r: 8 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="expense"
                        stroke="#EF4444"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </a>
              </div>
            </div>
            {/* bottom right ends  */}
          </div>

          {/* second row ends  */}
        </div>
      </div>
    </>
  );
}
