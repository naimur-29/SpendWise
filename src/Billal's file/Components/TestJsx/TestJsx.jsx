import React from "react";

export default function TestJsx() {
  return (
    <>
      <div className="cardContainer grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* card 1 */}
        <a
          href="#"
          className="block max-w-sm p-4 bg-gray-600 rounded-md shadow-md hover:bg-gray-700 "
        >
          <div className="cardTop text-center">
            <h1 className="mb-2 text-2xl font-bold self-center text-gray-50 ">
              card 1
            </h1>
          </div>

          <div className="cardMid mb-2 flex gap-x-5 justify-center">
            <div className="cardMidLeft text-3xl font-bold text-gray-100">
              $245
            </div>
            <div className="cardMidRight flex gap-x-2 self-center">
              <h1 className="self-center text-gray-100">-11.5</h1>
              <i className="ri-arrow-up-line self-center font-semibold text-xl text-green-600"></i>
            </div>
          </div>

          <div className="cardBottom mb-2 text-center self-center">
            <p className="text-gray-100">Compared to last month</p>
          </div>
        </a>
        {/* card1 ends */}
        {/* card 2 */}
        <a
          href="#"
          className="block max-w-sm p-4 bg-gray-600  rounded-md shadow-md hover:bg-gray-700 "
        >
          <div className="cardTop text-center">
            <h1 className="mb-2 text-2xl font-bold self-center text-gray-50 ">
              card 2
            </h1>
          </div>

          <div className="cardMid mb-2 flex gap-x-5 justify-center">
            <div className="cardMidLeft text-3xl font-bold text-gray-100">
              $245
            </div>
            <div className="cardMidRight flex gap-x-2 self-center">
              <h1 className="self-center text-gray-100">-11.5</h1>
              <i className="ri-arrow-up-line self-center font-semibold text-xl text-green-600"></i>
            </div>
          </div>

          <div className="cardBottom mb-2 text-center self-center">
            <p className="text-gray-100">Compared to last month</p>
          </div>
        </a>
        {/* card 2 ends */}
        {/* card 3 */}
        <a
          href="#"
          className="block max-w-sm p-4 bg-gray-600  rounded-md shadow-md hover:bg-gray-700 "
        >
          <div className="cardTop text-center">
            <h1 className="mb-2 text-2xl font-bold self-center text-gray-50 ">
              card 3
            </h1>
          </div>

          <div className="cardMid mb-2 flex gap-x-5 justify-center">
            <div className="cardMidLeft text-3xl font-bold text-gray-100">
              $245
            </div>
            <div className="cardMidRight flex gap-x-2 self-center">
              <h1 className="self-center text-gray-100">-11.5</h1>
              <i className="ri-arrow-up-line self-center font-semibold text-xl text-green-600"></i>
            </div>
          </div>

          <div className="cardBottom mb-2 text-center self-center">
            <p className="text-gray-100">Compared to last month</p>
          </div>
        </a>
        {/* card 3 ends */}
        {/* card 4 */}
        <a
          href="#"
          className="block max-w-sm p-4 bg-gray-600  rounded-md shadow-md hover:bg-gray-700 "
        >
          <div className="cardTop text-center">
            <h1 className="mb-2 text-2xl font-bold self-center text-gray-50 ">
              card 4
            </h1>
          </div>

          <div className="cardMid mb-2 flex gap-x-5 justify-center">
            <div className="cardMidLeft text-3xl font-bold text-gray-100">
              $245
            </div>
            <div className="cardMidRight flex gap-x-2 self-center">
              <h1 className="self-center text-gray-100">-11.5</h1>
              <i className="ri-arrow-up-line self-center font-semibold text-xl text-green-600"></i>
            </div>
          </div>

          <div className="cardBottom mb-2 text-center self-center">
            <p className="text-gray-100">Compared to last month</p>
          </div>
        </a>
        {/* card 4 ends */}
        {/* card 5 */}
        <a
          href="#"
          className="block max-w-sm p-4 bg-gray-600  rounded-md shadow-md hover:bg-gray-700 "
        >
          <div className="cardTop text-center">
            <h1 className="mb-2 text-2xl font-bold self-center text-gray-50 ">
              card 5
            </h1>
          </div>

          <div className="cardMid mb-2 flex gap-x-5 justify-center">
            <div className="cardMidLeft text-3xl font-bold text-gray-100">
              $245
            </div>
            <div className="cardMidRight flex gap-x-2 self-center">
              <h1 className="self-center text-gray-100">-11.5</h1>
              <i className="ri-arrow-up-line self-center font-semibold text-xl text-green-600"></i>
            </div>
          </div>

          <div className="cardBottom mb-2 text-center self-center">
            <p className="text-gray-100">Compared to last month</p>
          </div>
        </a>
        {/* card 5 ends */}
        {/* card 6 */}
        <a
          href="#"
          className="block row-span-2 max-w-sm p-4 bg-gray-600  rounded-md shadow-md hover:bg-gray-700  "
        >
          <div className=" h-full flex flex-col justify-center items-center">
            <div className="cardTop text-center">
              <h1 className="mb-2 text-2xl font-bold self-center text-gray-50 ">
                card 6 , row span 2
              </h1>
            </div>

            <div className="cardMid mb-2 flex gap-x-5 justify-center">
              <div className="cardMidLeft text-3xl font-bold text-gray-50">
                $245
              </div>
              <div className="cardMidRight flex gap-x-2 self-center">
                <h1 className="self-center text-gray-50">-11.5</h1>
                <i className="ri-arrow-up-line self-center font-semibold text-xl text-green-600"></i>
              </div>
            </div>

            <div className="cardBottom mb-2 text-center self-center">
              <p className="text-gray-50">Compared to last month</p>
            </div>
          </div>
        </a>

        {/* card 6 ends */}
        {/* card 7 */}

        <a
          href="#"
          className="block max-w-sm p-4 bg-gray-600  rounded-md shadow-md hover:bg-gray-700 "
        >
          <div className="cardTop text-center">
            <h1 className="mb-2 text-2xl font-bold self-center text-gray-50 ">
              card 7
            </h1>
          </div>

          <div className="cardMid mb-2 flex gap-x-5 justify-center">
            <div className="cardMidLeft text-3xl font-bold text-gray-100">
              $245
            </div>
            <div className="cardMidRight flex gap-x-2 self-center">
              <h1 className="self-center text-gray-100">-11.5</h1>
              <i className="ri-arrow-up-line self-center font-semibold text-xl text-green-600"></i>
            </div>
          </div>

          <div className="cardBottom mb-2 text-center self-center">
            <p className="text-gray-100">Compared to last month</p>
          </div>
        </a>
        {/* card 7 ends */}
        {/* card 8 */}

        <a
          href="#"
          className="block max-w-sm p-4 bg-gray-600  rounded-md shadow-md hover:bg-gray-700 "
        >
          <div className="cardTop text-center">
            <h1 className="mb-2 text-2xl font-bold self-center text-gray-50 ">
              card 8
            </h1>
          </div>

          <div className="cardMid mb-2 flex gap-x-5 justify-center">
            <div className="cardMidLeft text-3xl font-bold text-gray-100">
              $245
            </div>
            <div className="cardMidRight flex gap-x-2 self-center">
              <h1 className="self-center text-gray-100">-11.5</h1>
              <i className="ri-arrow-up-line self-center font-semibold text-xl text-green-600"></i>
            </div>
          </div>

          <div className="cardBottom mb-2 text-center self-center">
            <p className="text-gray-100">Compared to last month</p>
          </div>
        </a>
        {/* card 8 ends */}
      </div>
    </>
  );
}

{
  /* <ResponsiveContainer width="100%" aspect={2 / 1}>
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
</ResponsiveContainer> */
}

{
  /* <a
  href="#"
  className="block w-[50%] m-auto sm:w-[100%] bg-slate-700 rounded-md shadow-md"
></a> */
}
