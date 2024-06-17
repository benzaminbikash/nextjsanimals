"use client";
import React from "react";
import { motion } from "framer-motion";

import { fadeInX } from "@/constants/variants";

function Hero() {
  return (
    <div className="w-full h-screen ">
      <video className="w-full h-screen object-cover opacity-15" autoPlay muted>
        <source src="rabbit.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-[50%] grid grid-cols-2 px-24 gap-4 place-items-center">
        <motion.p
          className="text-justify"
          variants={fadeInX({ delay: 0 })}
          initial="hidden"
          whileInView="visible"
        >
          Saving animals such as dogs, cats, and rabbits is crucial for
          maintaining biodiversity and enhancing human well-being. These animals
          offer companionship, reduce stress, and even aid in therapeutic
          settings. By adopting pets from shelters, supporting animal rescue
          organizations, and advocating for stricter animal welfare laws, we can
          protect these beloved creatures from neglect and abuse. Each small act
          of kindness towards animals contributes to a more compassionate and
          humane society. Let's take responsibility and ensure a safe, loving
          environment for all pets.
        </motion.p>
        <div className="flex gap-6">
          <button className="border-white border-2 px-10 py-2 rounded-full  transition-all duration-500 delay-75 text-white  font-bold">
            Register
          </button>
          <button className="border-white border-2 px-10 py-2 rounded-full  transition-all duration-500 delay-75 text-white  font-bold">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
