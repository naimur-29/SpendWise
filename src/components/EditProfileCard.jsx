// importing libraries:
import { useState, useContext } from "react";

// local contexts:
import { userContext } from "../contexts/UserContext";

export const EditProfileCard = () => {
  // states:
  const [newPhotoUrl, setNewPhotoUrl] = useState(undefined);
  const [newUsername, setNewUsername] = useState(undefined);

  // user context:
  const { userData } = useContext(userContext);

  return (
    <section className="_profile-card flex h-full w-full flex-col rounded-xl bg-white p-4 shadow-[inset_-0px_-3px_4px_#39aca433]">
      <div className="wrapper mb-[20px] h-full flex-grow overflow-hidden rounded-xl bg-slate-300 lg:h-0">
        {userData?.photoUrl ? (
          <img
            className="h-full w-full rounded-xl object-cover object-center"
            src={newPhotoUrl || userData?.photoUrl}
            alt="avatar"
          />
        ) : (
          <p className="">{userData?.username[0]}</p>
        )}
      </div>

      <div className="flex flex-col gap-1 p-1">
        <label className="text-lg font-semibold">Username</label>
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

      <button className="mt-5 rounded-lg bg-[#39aca4] px-8 py-2 text-lg font-bold uppercase text-slate-100 shadow-md duration-200 hover:bg-[#2c8781] hover:shadow-sm active:scale-95">
        Save
      </button>
    </section>
  );
};
