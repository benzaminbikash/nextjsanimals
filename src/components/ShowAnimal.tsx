import React from "react";
import { motion } from "framer-motion";

import { Animal } from "@/model/Model";
import { fadeInY } from "@/constants/variants";

function ShowAnimal(data: Animal) {
  return (
    <div className="">
      <motion.div
        variants={fadeInY({ delay: data.delay })}
        initial="hidden"
        whileInView="visible"
        transition={{
          type: "keyframes",
        }}
        className="group overflow-hidden  rounded-2xl relative"
      >
        <img
          src={data.image}
          alt="randomImage"
          className="w-full h-[500px]  rounded-t-2xl object-right-top  opacity-75 relative  "
        />
        <div className="absolute top-0 bg-white w-full h-[500px] opacity-0 group-hover:opacity-75 -translate-y-2/3 group-hover:translate-y-0  transition-all duration-1000  flex flex-col justify-center items-center">
          <h1 className="text-black">Name:{data.name}</h1>
          <h1>Gender: </h1>
          <h1></h1>
        </div>
      </motion.div>
    </div>
  );
}

export default ShowAnimal;
