// importing libraries:
import { useContext } from "react";

// importing icons:
import { TbCurrencyTaka } from "react-icons/tb";

// importing contexts:
import { userContext } from "../contexts/UserContext";

// importing custom hooks:
import useGetHistory from "../hooks/useGetHistory";
import useDeleteIncomeExpense from "../hooks/useDeleteIncomeExpense";

// importing local components:
import { IncomeExpensePostForm } from "../components/IncomeExpensePostForm";
import { IncomeExpenseCard } from "../components/IncomeExpenseCard";

export default function Incomes() {
  // contexts:
  const { accountData, currentUser } = useContext(userContext);

  // fetching history using custom hook:
  const { data: historyData, isLoading: isHistoryDataLoading } = useGetHistory(
    `${currentUser?.uid}.${accountData?.alias}.${accountData?.currentTimeFrame}`
  );

  // delete history functionality through custom hook:
  const { deleteHistory } = useDeleteIncomeExpense(true);

  return (
    <section className="incomeContainer w-full md:w-[calc(100%-16rem)] min-h-screen p-[40px] bg-gray-300">
      <div className="incomeContainerWrapper">
        {/* top container starts  */}
        <h2 className="mb-3 text-2xl font-semibold ">Incomes</h2>
        <div className="topContainerCard mb-[40px]">
          <div className="block m-auto w-full py-2 bg-gray-50 rounded-md shadow-md ">
            <div className="cardTop ">
              <h3 className="mb-2 text-2xl font-bold self-center text-gray-800 flex justify-center items-center">
                Total income :
                <span>
                  <TbCurrencyTaka />
                </span>
                100
              </h3>
            </div>
          </div>
        </div>
        {/* top container ends  */}

        {/* body container starts */}
        <div className="bodyContainer flex flex-col gap-[40px] lg:flex-row lg:gap-0">
          {/* body left container starts  */}
          <div className="input-container flex justify-center">
            <IncomeExpensePostForm isIncome />
          </div>
          {/* body left container ends  */}

          {/* body Right container starts  */}
          <div className="bodyContainerRight w-full customSm:w-[80%] md:w-full m-auto mt-1 col-span-2 customMid:col-span-8 customMid:mt-3 p-1 md:p-0">
            <div className="rightCardSection  h-[68vh] w-[100%] md:w-[100%] customMid:w-[99%] lg:w-[92%] m-auto overflow-auto">
              {isHistoryDataLoading ? (
                <h3>Loading...</h3>
              ) : (
                historyData?.incomes
                  ?.sort(
                    (a, b) =>
                      Number(b.dateAdded.slice(-2)) -
                      Number(a.dateAdded.slice(-2))
                  )
                  ?.map((ele, i) => (
                    <IncomeExpenseCard
                      key={i}
                      amount={ele.amount}
                      context={ele.context}
                      dateAdded={ele.dateAdded}
                      del={deleteHistory}
                      accountId={`${currentUser?.uid}.${accountData?.alias}`}
                    />
                  ))
              )}
            </div>
          </div>
          {/* body Right container ends  */}
        </div>
        {/* body container ends */}
      </div>
    </section>
  );
}
