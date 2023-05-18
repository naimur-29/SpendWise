import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function Income() {
  return (
    <>
      <div className="incomeContainer h-full bg-green-300">
        <div className="incomeContainerWrapper p-4 bg-red-400">
          {/* top container starts  */}
          <h1 className="mb-4">Incomes</h1>
          <div className="topContainerCard mb-4">
            <a
              href="#"
              className="block m-auto w-full py-2 bg-gray-50  rounded-md shadow-md "
            >
              <div className="cardTop text-center">
                <h1 className="mb-2 text-2xl font-bold self-center text-gray-800 ">
                  Total income : 500 taka
                </h1>
              </div>
            </a>
          </div>
          {/* top container ends  */}

          {/* body container starts */}
          <div className="bodyContainer grid grid-cols-12">
            {/* body left container starts  */}
            <div className="bodyContainerLeft col-span-4 p-2 bg-pink-400 ">
              <h1 className="mb-3">All fields are required</h1>
              <div className="inputContainer">
                {/* salary title input field */}
                <div className="mb-3 p-2 border-2 border-gray-50 rounded-sm w-full bg-gray-200 shadow-md">
                  <input
                    type="text"
                    id="base-input"
                    className="bg-gray-200  text-gray-900 text-sm border-none outline-none block w-full  "
                    placeholder="Salary title"
                  />
                </div>

                {/* salary amount input field */}
                <div className="mb-3 p-2 border-2 border-gray-50 rounded-sm w-full bg-gray-200 shadow-md">
                  <input
                    type="number"
                    id="base-input"
                    className="bg-gray-200  text-gray-900 text-sm border-none outline-none block w-full  "
                    placeholder="Salary title"
                    onWheel={(e) => e.target.blur()}
                  />
                </div>

                {/* salary Date input field */}
                <div className="mb-3 p-2 border-2 border-gray-50 rounded-sm w-full bg-gray-200 shadow-md">
                  <input
                    type="date"
                    id="base-input"
                    className="bg-gray-200  text-gray-900 text-sm border-none outline-none block w-full  "
                    placeholder="Salary title"
                  />
                </div>

                {/* salary Type input field */}
                <div className="mb-3 p-2 w-full flex justify-end">
                  <select
                    id="countries"
                    className="bg-gray-200 border-2 border-gray-50 text-gray-900 text-sm rounded-md block w-1/2 p-2.5 outline-none "
                  >
                    <option selected>Select Option</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>

                {/* salary reference input field */}
                <div className="mb-3 p-1 border-2 border-gray-50 rounded-sm w-full bg-gray-200 shadow-md">
                  <textarea
                    name=""
                    id=""
                    rows="4"
                    className="border-none outline-none w-full p-1"
                    placeholder="Enter Reference"
                  ></textarea>
                </div>

                {/* button section  */}
                <div className="  ">
                  <button
                    type="button"
                    class="py-2 px-2.5 w-[40%] font-medium text-gray-50  bg-green-600 rounded-2xl border border-gray-200 hover:bg-green-700 text-base self-center flex justify-center"
                  >
                    <AiOutlinePlus className="self-center mr-1" />
                    Sign in
                  </button>
                </div>
              </div>
            </div>
            {/* body left container ends  */}

            {/* body Right container starts  */}
            <div className="bodyContainerRight  col-span-8 p-2 bg-fuchsia-300">
              <div className="rightCardSection  h-[70vh] overflow-auto ">
                <a
                  href="#"
                  className="block mb-3 w-full p-1 bg-gray-50  rounded-md shadow-md "
                >
                  <div className="cardContainer grid grid-cols-12">
                    {/* left side of card starts  */}
                    <div className="cardLeft col-span-2 bg-cyan-300">left</div>
                    {/* left side of card ends  */}

                    {/* mid side of card starts  */}
                    <div className="cardMid col-span-8 bg-orange-400">Mid</div>
                    {/* mid side of card ends  */}

                    {/* right side of card starts  */}
                    <div className="cardRight col-span-2 bg-teal-500">
                      Right
                    </div>
                    {/* right side of card ends  */}
                  </div>
                </a>
              </div>
            </div>
            {/* body Right container ends  */}
          </div>
          {/* body container endss */}
        </div>
      </div>
    </>
  );
}
