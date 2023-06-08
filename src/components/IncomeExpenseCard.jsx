// importing icons:
import { AiTwotoneDelete } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { TbCurrencyTaka } from "react-icons/tb";

export const IncomeExpenseCard = ({
  data,
  formDateFun,
  del,
  accountId,
  isIncome,
}) => {
  return (
    <section className="customMid:p-2 mb-2 block  w-full rounded-md bg-[--main-income-expense-items-bg] p-0 shadow-md sm:p-1">
      <div className="cardContainer grid grid-cols-12 gap-1 py-1 duration-200 hover:-translate-y-[0.1rem] hover:bg-[#fff3]">
        {/* left side of card starts  */}
        <div className="cardLeft col-span-1 m-auto">
          <div className="bodyIcon flex">
            <GoPrimitiveDot
              className={`text-3xl ${
                isIncome ? "text-[#51fbce]" : "text-[#fff8bd]"
              }`}
            />
          </div>
        </div>
        {/* left side of card ends  */}

        {/* mid side of card starts  */}
        <div className="cardMid col-span-10 ">
          <div className="midContainer">
            {/* midTop starts */}
            <div className="midTop mb-1 flex">
              <span className={`flex text-xl font-bold text-[#fff]`}>
                <TbCurrencyTaka className="self-center" />
                {data?.amount}
              </span>
            </div>
            {/* midTop ends */}

            {/* midBottom starts  */}
            <div className="midBottom flex w-[100%] justify-between sm:w-[96%] md:w-[95%] lg:w-[92%]">
              <div className="midBottomLeft flex">
                <p className="mr-2 line-clamp-1 text-sm text-[#fffd] md:text-base">
                  {data?.context || "No Context!"}
                </p>
              </div>

              <div className="midBottomMid flex min-w-[100px] px-2">
                <p className="text-sm font-semibold text-[#fffd] md:text-base">
                  {formDateFun(data.dateAdded, true)}
                </p>
              </div>
            </div>
            {/* midBottom ends  */}
          </div>
        </div>
        {/* mid side of card ends  */}

        {/* right side of card starts  */}
        <div
          onClick={() => del(accountId, data)}
          className="cardRight col-span-1 -ml-2 flex cursor-pointer items-center justify-center"
        >
          <div className="iconContainer ">
            <AiTwotoneDelete className="text-2xl text-[#fff] duration-300 hover:scale-150 hover:text-[#f48a]" />
          </div>
        </div>
        {/* right side of card ends  */}
      </div>
    </section>
  );
};
