// importing libraries:
import { useContext } from "react";

// local contexts:
import { userContext } from "../contexts/UserContext";

// custom hooks:
import useDeleteAccount from "../hooks/useDeleteAccount";

// importing icons:
import { FaPiggyBank } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

export const ManageAccounts = () => {
  // user contexts:
  const { userData } = useContext(userContext);

  // custom hooks:
  const { deleteAccount, isLoading: isAccountDeleteLoading } =
    useDeleteAccount();

  return (
    <section className="_accounts flex h-full max-h-[35vh] min-h-[280px] w-full flex-col overflow-y-auto rounded-xl bg-white p-4 shadow-[inset_-0px_-3px_4px_#39aca433] sm:flex-[1]">
      <h3 className="mb-3 text-2xl font-semibold text-gray-900">
        {isAccountDeleteLoading ? "Loading..." : "My Accounts"}
      </h3>

      <div className="flex h-full max-h-[100%] w-full flex-col overflow-auto">
        {userData?.accounts?.length ? (
          userData?.accounts?.map((account, i) => (
            <AccountCard key={i} data={account} deleteAccount={deleteAccount} />
          ))
        ) : (
          <p>No Accounts!</p>
        )}
      </div>
    </section>
  );
};

const AccountCard = ({ data, deleteAccount }) => {
  // user contexts:
  const { userData, accountData, setAccountData, setActiveAccountIndex } =
    useContext(userContext);

  // functions:
  const handleAccountRemove = async () => {
    let temp = { ...accountData };

    await deleteAccount(userData?.userId, data);

    setAccountData(temp);
    setActiveAccountIndex(0);
  };

  return (
    <section
      className={`mb-1 flex cursor-pointer items-center gap-x-4 rounded-md bg-[#39aca433] p-2 text-sm text-gray-900 shadow-[inset_-0px_-3px_4px_#39aca433] duration-100 hover:bg-[#39aca444]`}
    >
      <div className="text-lg icon">
        <FaPiggyBank className="fill-[#2c8781]" />
      </div>
      <h3
        className={`flex w-full origin-left flex-wrap gap-1 text-lg duration-200`}
      >
        {data?.alias}
      </h3>

      <div onClick={handleAccountRemove} className="iconContainer">
        <AiTwotoneDelete className="text-2xl text-[#2c8781] duration-300 hover:scale-150 hover:text-[#f48a] active:scale-100" />
      </div>
    </section>
  );
};
