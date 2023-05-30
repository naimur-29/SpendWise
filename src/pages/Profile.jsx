// importing libraries:
import { auth } from "../services/firebaseApi";
import { signOut } from "firebase/auth";

// local components:
import { EditProfileCard } from "../components/EditProfileCard";
import { Overview } from "../components/Overview";
import { ManageAccounts } from "../components/ManageAccounts";

export default function Profile() {
  return (
    <section className="min-h-screen w-full bg-slate-100 md:w-[calc(100%-16rem)]">
      <div className="flex flex-col w-full h-full _wrapper">
        <div className="_top flex w-full  flex-col items-start gap-1 px-[20px] pb-[16px] pt-[20px] sm:flex-row sm:items-center sm:justify-between md:px-[27px] md:pb-[20px]">
          <div className="_left">
            <h3 className="text-2xl font-semibold text-gray-900 extra-sm:text-3xl">
              My SpendWise Profile
            </h3>
            <p className="text-gray-600 text-md extra-sm:text-lg">
              Welcome to SpendWise!
            </p>
          </div>

          <div className="flex items-center justify-center _right">
            <button
              onClick={async () => {
                try {
                  await signOut(auth);
                  console.log("Logout Successful!");
                } catch (error) {
                  console.log(error.message);
                }
              }}
              className="rounded-lg bg-[#39aca4] px-8 py-2 text-lg font-bold uppercase text-slate-100 shadow-lg duration-200 hover:scale-95 hover:bg-[#2c8781] hover:shadow-md active:scale-100"
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
  );
}
