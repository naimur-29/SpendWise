// importing icons:
import { GoPrimitiveDot } from "react-icons/go";
import { TbCurrencyTaka } from "react-icons/tb";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const HistoryCard = ({ amount, context, dateAdded, stat }) => {
  return (
    <section
      className={`block mb-2 w-full  p-0 sm:p-1 customMid:p-2 ${
        stat === "incomes" ? "bg-[#51fbce66]" : "bg-[#fff8bd77]"
      } rounded-md shadow-md`}
    >
      <div className="cardContainer grid grid-cols-12 gap-1 py-1 hover:bg-[#fff3] hover:-translate-y-[0.1rem] duration-200">
        {/* left side of card starts  */}
        <div className="col-span-1 m-auto cardLeft">
          <div className="flex bodyIcon">
            <GoPrimitiveDot className={`text-3xl text-transparent`} />
          </div>
        </div>
        {/* left side of card ends  */}

        {/* mid side of card starts  */}
        <div className="col-span-10 cardMid">
          <div className="midContainer">
            {/* midTop starts */}
            <div className="flex mb-1 midTop">
              <span className={`text-slate-700 text-xl font-bold flex`}>
                <TbCurrencyTaka className="self-center" />
                {amount}
              </span>
            </div>
            {/* midTop ends */}

            {/* midBottom starts  */}
            <div className="midBottom flex justify-between w-[100%] sm:w-[96%] md:w-[95%] lg:w-[92%]">
              <div className="flex midBottomLeft">
                <p className="text-slate-500 text-sm md:text-base mr-2 line-clamp-1">
                  {context}
                </p>
              </div>

              <div className="midBottomMid flex px-2 min-w-[100px]">
                <p className="text-slate-500 font-semibold text-sm md:text-base">
                  {dateAdded}
                </p>
              </div>
            </div>
            {/* midBottom ends  */}
          </div>
        </div>
        {/* mid side of card ends  */}

        {/* right side */}
        <div className="flex items-center justify-center col-span-1 -ml-2 cardRight">
          {stat === "incomes" ? (
            <div className="iconContainer ">
              <AiOutlinePlus className="text-2xl text-slate-900" />
            </div>
          ) : (
            <div className="iconContainer ">
              <AiOutlineMinus className="text-2xl text-slate-900" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};