// importing icons:
import { AiTwotoneDelete } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { TbCurrencyTaka } from "react-icons/tb";

export const IncomeExpenseCard = ({
  amount,
  context,
  dateAdded,
  del,
  accountId,
  isIncome,
}) => {
  return (
    <section className="block mb-2 w-full  p-0 sm:p-1 customMid:p-2 bg-[#39aca4] rounded-md shadow-md">
      <div className="cardContainer grid grid-cols-12 gap-1 py-1 hover:bg-[#fff3] hover:-translate-y-[0.1rem] duration-200">
        {/* left side of card starts  */}
        <div className="cardLeft col-span-1 m-auto">
          <div className="bodyIcon flex">
            <GoPrimitiveDot
              className={`text-3xl ${
                isIncome ? "text-[#51fbce]" : "text-[#fbdf51]"
              }`}
            />
          </div>
        </div>
        {/* left side of card ends  */}

        {/* mid side of card starts  */}
        <div className="cardMid  col-span-10 ">
          <div className="midContainer">
            {/* midTop starts */}
            <div className="midTop flex mb-1">
              <span className={`text-[#fff] text-xl font-bold flex`}>
                <TbCurrencyTaka className="self-center" />
                {amount}
              </span>
            </div>
            {/* midTop ends */}

            {/* midBottom starts  */}
            <div className="midBottom flex justify-between w-[100%] sm:w-[96%] md:w-[95%] lg:w-[92%]">
              <div className="midBottomLeft flex">
                <p className="text-[#fffd] text-sm md:text-base mr-2 line-clamp-1">
                  {context}
                </p>
              </div>

              <div className="midBottomMid flex px-2 min-w-[100px]">
                <p className="text-[#fffd] font-semibold text-sm md:text-base">
                  {dateAdded}
                </p>
              </div>
            </div>
            {/* midBottom ends  */}
          </div>
        </div>
        {/* mid side of card ends  */}

        {/* right side of card starts  */}
        <div
          onClick={() => del(accountId, { amount, context, dateAdded })}
          className="cardRight col-span-1 flex justify-center items-center -ml-2 cursor-pointer"
        >
          <div className="iconContainer  ">
            <AiTwotoneDelete className="text-2xl text-[#fff] hover:text-[#f48a] hover:scale-150 duration-300" />
          </div>
        </div>
        {/* right side of card ends  */}
      </div>
    </section>
  );
};
