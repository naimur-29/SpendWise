// importing icons:
import { GoPrimitiveDot } from "react-icons/go";
import { TbCurrencyTaka } from "react-icons/tb";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const HistoryCard = ({ amount, context, dateAdded, stat }) => {
  return (
    <section
      className={`customMid:p-2 mb-2 block  w-full p-0 sm:p-1 ${
        stat === "incomes"
          ? "bg-[--main-history-income-items-bg]"
          : "bg-[--main-history-expense-items-bg]"
      } rounded-md shadow-md`}
    >
      <div className="cardContainer grid grid-cols-12 gap-1 py-1 duration-200 hover:-translate-y-[0.1rem] hover:bg-[#fff3]">
        {/* left side of card starts  */}
        <div className="cardLeft col-span-1 m-auto">
          <div className="bodyIcon flex">
            <GoPrimitiveDot className={`text-3xl text-transparent`} />
          </div>
        </div>
        {/* left side of card ends  */}

        {/* mid side of card starts  */}
        <div className="cardMid col-span-10">
          <div className="midContainer">
            {/* midTop starts */}
            <div className="midTop mb-1 flex">
              <span
                className={`flex text-xl font-bold text-[--main-history-items-text]`}
              >
                <TbCurrencyTaka className="self-center" />
                {amount}
              </span>
            </div>
            {/* midTop ends */}

            {/* midBottom starts  */}
            <div className="midBottom flex w-[100%] justify-between sm:w-[96%] md:w-[95%] lg:w-[92%]">
              <div className="midBottomLeft flex">
                <p className="mr-2 line-clamp-1 text-sm text-[--light-history-items-text] md:text-base">
                  {context || "No Context!"}
                </p>
              </div>

              <div className="midBottomMid flex min-w-[100px] px-2">
                <p className="text-sm font-semibold text-[--light-history-items-text] md:text-base">
                  {dateAdded}
                </p>
              </div>
            </div>
            {/* midBottom ends  */}
          </div>
        </div>
        {/* mid side of card ends  */}

        {/* right side */}
        <div className="cardRight col-span-1 -ml-2 flex items-center justify-center">
          {stat === "incomes" ? (
            <div className="iconContainer ">
              <AiOutlinePlus className="text-2xl text-[--main-text]" />
            </div>
          ) : (
            <div className="iconContainer ">
              <AiOutlineMinus className="text-2xl  text-[--main-text]" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
