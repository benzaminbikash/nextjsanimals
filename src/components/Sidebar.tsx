import React from "react";
import { RxCross1 } from "react-icons/rx";
import { signOut } from "next-auth/react";

interface PROPS {
  open: boolean;
  setOpen: any;
}

function Sidebar({ open, setOpen }: PROPS) {
  return (
    <div
      className={`bg-gray-400 w-60 absolute top-0 h-screen duration-500 px-4 py-4  transition-transform ${
        open == true ? "translate-x-0 " : "-translate-x-80 "
      } `}
    >
      <div className=" flex justify-end" onClick={() => setOpen(false)}>
        <RxCross1
          size={24}
          color="black"
          className="hover:scale-105 hover:shadow-sm rounded-full"
        />
      </div>

      {/* information */}
      <div className="text-black mt-2 ">
        <h1 className="font-semibold text-[16px] ">Hello, Bikash Nepali</h1>
        <div className="absolute bottom-5  ">
          <button
            onClick={() => {
              signOut();
              setOpen(false);
            }}
            className="transition-all shadow-md shadow-indigo-500 text-gray-500 hover:text-white hover:bg-indigo-600 py-2  w-52 duration-150"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
