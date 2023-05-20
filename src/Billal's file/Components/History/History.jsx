import React, { PureComponent } from "react";

import { AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai";
import { FaBitcoin } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { TbCurrencyTaka, TbMessageCircle2Filled } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function History() {
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

  return (
    <>
      <div className="HistoryContainer h-full bg-gray-300">
        <div className="HistoryContainerWrapper px-2">
          <h1 className=" mb-1 sm:mb-2 text-2xl font-semibold">Expenses</h1>
          {/* <div className="bodyContainer grid grid-cols-12 "> */}
          <div className="bodyContainer grid sm:grid-cols-1 customMid:grid-cols-12 ">
            {/* left side of body starts  */}
            {/* <div className="bodyLeft col-span-7 bg-red-400"> */}
            <div className="bodyLeft sm:col-span-1 customMid:col-span-7">
              <h1 className="text-2xl mb-2">All Transactions</h1>
              {/* graph container starts  */}
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
              {/* graph container ends  */}

              {/* data show card starts  */}
              {/* .1st row starts  */}
              <div className="twoCardContainer mt-2 mb-2 grid grid-cols-12">
                <div className="leftCard col-span-6">
                  <a
                    href="#"
                    className="block w-[86%] p-1 sm:w-[94%] sm:p-2 m-auto bg-white border border-gray-200 rounded-md shadow-md hover:bg-gray-100 text-center"
                  >
                    <h5 className="mb-1 font-bold tracking-tight text-gray-900 text-lg sm:text-xl sm:mb-2">
                      Total incomes
                    </h5>
                    <div className="incomeTaka flex justify-center">
                      <TbCurrencyTaka className="self-center text-xl sm:text-2xl" />
                      <p className="font-normal text-xl sm:text-2xl text-gray-800 ">
                        1200 taka
                      </p>
                    </div>
                  </a>
                </div>
                <div className="rightCard col-span-6">
                  <a
                    href="#"
                    className="block w-[86%] p-1 sm:w-[94%] sm:p-2 m-auto bg-white border border-gray-200 rounded-md shadow-md hover:bg-gray-100 text-center"
                  >
                    <h5 className="mb-1 font-bold tracking-tight text-gray-900 text-lg sm:text-xl sm:mb-2">
                      Total Expenses
                    </h5>
                    <div className="incomeTaka flex justify-center">
                      <TbCurrencyTaka className="self-center text-xl sm:text-2xl" />
                      <p className="font-normal text-xl sm:text-2xl">
                        1200 taka
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              {/* .1st row ends  */}
              {/* 2nd row container starts  */}
              <div className="singleContainer">
                <a
                  href="#"
                  className="block w-[54%] p-1 sm:w-[60%] sm:p-2 m-auto bg-white border border-gray-200 rounded-md shadow-md hover:bg-gray-100 text-center"
                >
                  <h5 className="mb-1 text-lg font-bold sm:mb-2 sm:text-xl  tracking-tight text-gray-900 ">
                    Total Balance
                  </h5>
                  <div className="incomeTaka flex justify-center">
                    <TbCurrencyTaka className="self-center text-xl sm:text-2xl text-green-600" />
                    <p className="font-normal text-xl sm:text-2xl text-green-600">
                      1200 taka
                    </p>
                  </div>
                </a>
              </div>
              {/* 2nd row container ends  */}
              {/* data show card ends  */}
            </div>
            {/* left side of body endss  */}

            {/* right side of body starts  */}
            {/* <div className="bodyRight col-span-5 p-3 bg-blue-400"> */}
            <div className="bodyRight mt-2 p-3 sm:mt-0 sm:col-span-1 customMid:col-span-5">
              <h1 className="text-2xl">Recent History</h1>
              <div className="rightCardSection topSection mt-3 mb-2 w-[96%] m-auto overflow-auto">
                <a
                  href="#"
                  className="block mb-2 w-full p-2 bg-gray-50 hover:bg-gray-100  rounded-md shadow-md border-2 border-white"
                >
                  <div className="cardContainer flex justify-between">
                    <div className="containerLeft">
                      <h1>description</h1>
                    </div>
                    <div className="containerRight">
                      <h1>taka</h1>
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  className="block mb-2 w-full p-2 bg-gray-50 hover:bg-gray-100  rounded-md shadow-md border-2 border-white"
                >
                  <div className="cardContainer flex justify-between">
                    <div className="containerLeft">
                      <h1>description</h1>
                    </div>
                    <div className="containerRight">
                      <h1>taka</h1>
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  className="block mb-2 w-full p-2 bg-gray-50 hover:bg-gray-100  rounded-md shadow-md border-2 border-white"
                >
                  <div className="cardContainer flex justify-between">
                    <div className="containerLeft">
                      <h1>description</h1>
                    </div>
                    <div className="containerRight">
                      <h1>taka</h1>
                    </div>
                  </div>
                </a>
              </div>

              <div className="rightCardSection bottom mt-2 mb-2 w-[96%] m-auto overflow-auto">
                {/* salary section starts */}
                <div className="salarySection">
                  <div className="salaryTop flex p-1 justify-between">
                    <h1 className="self-center">min</h1>
                    <h1 className="text-2xl">salary</h1>
                    <h1 className="self-center">max</h1>
                  </div>
                  <div className="salaryBottom mt-1">
                    <a
                      href="#"
                      className="block w-full p-2 bg-gray-50 hover:bg-gray-100  rounded-md shadow-md border-2 border-white"
                    >
                      <div className="cardContainer flex justify-between">
                        <div className="containerLeft">
                          <h1>100</h1>
                        </div>
                        <div className="containerRight">
                          <h1>800</h1>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* salary section ends */}

                {/* expense section starts */}
                <div className="expenseSection mt-5">
                  <div className="expenseTop flex p-1 justify-between ">
                    <h1 className="self-center">min</h1>
                    <h1 className="text-2xl">Expense</h1>
                    <h1 className="self-center">max</h1>
                  </div>
                  <div className="expenseBottom mt-1">
                    <a
                      href="#"
                      className="block mb-2 w-full p-2 bg-gray-50 hover:bg-gray-100  rounded-md shadow-md border-2 border-white"
                    >
                      <div className="cardContainer flex justify-between">
                        <div className="containerLeft">
                          <h1>description</h1>
                        </div>
                        <div className="containerRight">
                          <h1>taka</h1>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* expense section ends */}
              </div>
            </div>

            {/* right side of body endss  */}
          </div>
        </div>
      </div>
    </>
  );
}
