import React from "react";
import { TITLE } from "@/model/Model";

function HomeTitle({ name }: TITLE) {
  return (
    <div className="  mt-20  mb-16 px-24 flex items-center justify-between">
      <div></div>
      <h1 className=" font-bold text-3xl text-gray-300   ">{name}</h1>
      <button className="underline text-gray-300">View All</button>
    </div>
  );
}

export default HomeTitle;
