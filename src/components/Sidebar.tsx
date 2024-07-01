import React from "react";
import { RxCross1 } from "react-icons/rx";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface PROPS {
  open: boolean;
  setOpen: any;
}

function Sidebar({ open, setOpen }: PROPS) {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div
      className={`bg-black w-60 fixed top-0 h-screen duration-500 px-4 py-4  z-50 transition-transform ${
        open == true ? "translate-x-0 " : "-translate-x-80 "
      } `}
    >
      <div className=" flex justify-end" onClick={() => setOpen(false)}>
        <RxCross1
          size={24}
          color="white"
          className="hover:scale-105 hover:shadow-sm rounded-full"
        />
      </div>

      {/* information */}
      <div className="text-white mt-2 ">
        <h1 className="font-semibold text-[16px] ">
          Hello, {session?.user.name}
        </h1>
        <div className="   ">
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="my-3 transition-all shadow-sm shadow-indigo-300 text-white hover:text-white hover:bg-indigo-600 py-2  w-52 duration-150"
          >
            Edit Profile
          </button>
          <button
            onClick={() => {
              router.push("/addanimal");
              setOpen(false);
            }}
            className="my-3 transition-all shadow-sm shadow-indigo-300 text-white hover:text-white hover:bg-indigo-600 py-2  w-52 duration-150"
          >
            Add Animal
          </button>
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="my-3 transition-all shadow-sm shadow-indigo-300 text-white hover:text-white hover:bg-indigo-600 py-2  w-52 duration-150"
          >
            My Animals
          </button>
          <button
            onClick={() => {
              signOut();
              setOpen(false);
            }}
            className="my-3 transition-all shadow-sm shadow-indigo-300 text-white hover:text-white hover:bg-indigo-600 py-2  w-52 duration-150"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
