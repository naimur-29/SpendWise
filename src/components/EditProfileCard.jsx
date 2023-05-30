// importing libraries:
import { useState, useEffect, useContext } from "react";
import { getUsersRef } from "../services/firebaseApi";
import { updateDoc } from "firebase/firestore";

// local contexts:
import { userContext } from "../contexts/UserContext";

export const EditProfileCard = () => {
  // states:
  const [newPhotoUrl, setNewPhotoUrl] = useState(undefined);
  const [newUsername, setNewUsername] = useState(undefined);
  const [isUpdateLoading, setIsUpdateLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isResponseMessageActive, setIsResponseMessageActive] = useState(false);

  // user context:
  const { userData } = useContext(userContext);

  // functions:
  const handleSave = async () => {
    // set response message on:
    setIsResponseMessageActive(true);

    // check if data valid:
    if (!newUsername && !newPhotoUrl) {
      setResponseMessage("Already up to date!");
      return;
    }

    // try to update data:
    try {
      setIsUpdateLoading(true);
      await updateDoc(getUsersRef(userData?.userId), {
        photoUrl: newPhotoUrl || userData?.photoUrl,
        username: newUsername || userData?.username,
      });

      setResponseMessage("Update Successful!");
      setNewPhotoUrl(undefined);
      setNewUsername(undefined);
    } catch (error) {
      setResponseMessage(error.message);
    }
    setIsUpdateLoading(false);
  };

  useEffect(() => {
    if (isResponseMessageActive) {
      setTimeout(() => {
        setResponseMessage("");
        setIsResponseMessageActive(false);
      }, 6000);
    }
  }, [isResponseMessageActive]);

  return (
    <section className="_profile-card flex h-full w-full flex-col rounded-xl bg-white p-4 shadow-[inset_-0px_-3px_4px_#39aca433]">
      <div className="wrapper relative mb-[20px] h-full max-h-[35vh] flex-grow overflow-hidden rounded-xl bg-slate-200 duration-200 lg:h-0 lg:max-h-full">
        <div className="_overlay absolute left-0 top-0 h-full w-full shadow-[inset_0px_-5px_8px_#0003]"></div>

        {userData?.photoUrl ? (
          <img
            className="h-full max-h-[35vh] w-full rounded-xl object-cover object-top lg:max-h-full"
            src={newPhotoUrl || userData?.photoUrl}
            alt="avatar"
          />
        ) : (
          <p className="flex h-full min-h-[280px] w-full items-center justify-center rounded-xl bg-white text-[8rem] font-semibold uppercase text-[#39aca4]">
            {userData?.username[0]}
          </p>
        )}
      </div>

      {responseMessage ? (
        <div className="flex items-center justify-center w-full -mt-3 _wrapper">
          <p className="w-[100%] rounded bg-[#39aca4] px-2 py-1 text-center font-mono text-[#fff]">
            {responseMessage}
          </p>
        </div>
      ) : (
        <></>
      )}

      <div className="flex flex-col gap-1 p-1">
        <label className="text-lg font-semibold">Name</label>
        <input
          type="text"
          onChange={(e) => setNewUsername(e.target.value)}
          placeholder="new username"
          value={newUsername === undefined ? userData?.username : newUsername}
          className="rounded bg-[#39aca433] px-2 py-2 text-slate-950 shadow outline-[#42c8bf] duration-700 placeholder:text-slate-500 placeholder:duration-200 focus:-translate-y-[1px] focus:bg-[#39aca466] focus:shadow-2xl focus:shadow-[#fff] focus:placeholder:translate-x-[-100%]"
        />
      </div>

      <div className="flex flex-col gap-1 p-1">
        <label className="text-lg font-semibold">Photo URL</label>
        <input
          type="text"
          onChange={(e) => setNewPhotoUrl(e.target.value)}
          placeholder="new photo url"
          value={newPhotoUrl === undefined ? userData?.photoUrl : newPhotoUrl}
          className="rounded bg-[#39aca433] px-2 py-2 text-slate-950 shadow outline-[#42c8bf] duration-700 placeholder:text-slate-500 placeholder:duration-200 focus:-translate-y-[1px] focus:bg-[#39aca466] focus:shadow-2xl focus:shadow-[#fff] focus:placeholder:translate-x-[-100%]"
        />
      </div>

      <button
        onClick={handleSave}
        className="mt-5 rounded-lg bg-[#39aca4] px-8 py-2 text-lg font-bold uppercase text-slate-100 shadow-md duration-200 hover:bg-[#2c8781] hover:shadow-sm active:scale-95"
      >
        {isUpdateLoading ? "Loading..." : "Save"}
      </button>
    </section>
  );
};
