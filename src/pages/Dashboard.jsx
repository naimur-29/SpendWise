// importing libraries:
import { useContext, useEffect } from "react";
import { auth } from "../services/firebaseApi";
import { signOut } from "firebase/auth";

// local contexts:
import { userContext } from "../contexts/UserContext";

// local components:
import { EditProfileCard } from "../components/EditProfileCard";
import { Overview } from "../components/Overview";
import { ManageAccounts } from "../components/ManageAccounts";
import { Loading } from "../components/Loading";

export default function Dashboard() {
  // user context:
  const { userData, setActiveAccountIndex, setUserData } =
    useContext(userContext);

  // scroll to top on page load:
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Loading duration={1000}>
      <section className="min-h-screen w-full bg-slate-100 md:w-[calc(100%-16rem)]">
        <div className="_wrapper flex h-full w-full flex-col">
          <div className="_top flex w-full items-center justify-between gap-2 px-[20px] pb-[16px] pt-[20px] sm:gap-1 md:px-[27px] md:pb-[20px]">
            <div className="_left">
              <h3 className="text-lg font-semibold text-gray-900 extra-sm:text-2xl sm:text-3xl">
                Welcome to SpendWise!
              </h3>
              <p className="text-sm text-gray-600 extra-sm:text-lg">
                {userData?.username || "Loading..."}
              </p>
            </div>

            <div className="_right flex items-center justify-center">
              <button
                onClick={async () => {
                  try {
                    await signOut(auth);
                    setActiveAccountIndex(0);
                    setUserData(null);
                    console.log("Logout Successful!");
                  } catch (error) {
                    console.log(error.message);
                  }
                }}
                className="min-w-[110px] rounded-lg bg-[#39aca4] p-2 text-lg font-semibold uppercase text-slate-100 shadow-lg duration-200 hover:scale-95 hover:bg-[#2c8781] hover:shadow-md active:scale-100 sm:px-8 sm:py-2"
              >
                Sign Out
              </button>
            </div>
          </div>

          <div className="_bottom h-full w-full px-[10px] pb-[10px] md:px-[20px] md:pb-[20px]">
            <div className="_wrapper flex h-full max-h-[100%] w-full flex-col gap-[20px] overflow-x-hidden rounded-3xl bg-slate-300 p-[10px] sm:p-[20px] lg:flex-row">
              <div className="_left sm:flex-[1]">
                <EditProfileCard />
              </div>

              <div className="_right flex h-full max-h-[100%] flex-col gap-[20px] sm:flex-[1] lg:max-w-[50%]">
                <Overview />
                <ManageAccounts />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Loading>
  );
}
