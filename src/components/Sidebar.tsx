import React from "react";
import { RxCross1 } from "react-icons/rx";

interface PROPS {
  open: boolean;
  setOpen: any;
}

function Sidebar({ open, setOpen }: PROPS) {
  return (
    <div
      className={`bg-white w-60 absolute top-0 h-screen duration-500 px-4 py-4  transition-transform ${
        open == true ? "translate-x-0 " : "-translate-x-80 "
      } `}
    >
      <div className="text-end" onClick={() => setOpen(false)}>
        <RxCross1
          size={24}
          color="black"
          className="hover:scale-105 hover:shadow-sm rounded-full"
        />
      </div>
    </div>
  );
}

export default Sidebar;
