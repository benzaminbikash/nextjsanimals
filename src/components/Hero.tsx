"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { fadeInX } from "@/constants/variants";
import { useSession } from "next-auth/react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";

function Hero() {
  const router = useRouter();
  const { data: session, status: isauthenticated } = useSession();
  const [open, setopen] = useState(false);

  return (
    <>
      <div className="w-full h-screen -z-10  ">
        <video
          className="w-full h-screen object-cover opacity-15"
          autoPlay
          muted
        >
          <source src="rabbit.mp4" type="video/mp4" />
        </video>
        {session?.user != null && (
          <div className="absolute top-10 px-24 ">
            <GiHamburgerMenu
              color="white"
              size={25}
              onClick={() => setopen(true)}
            />
          </div>
        )}

        <div className="absolute top-[50%] grid grid-cols-2 px-24 gap-4 place-items-center">
          <motion.p
            className={` text-center italic`}
            variants={fadeInX({ delay: 0 })}
            initial="hidden"
            whileInView="visible"
          >
            Saving animals such as dogs, cats, and rabbits is crucial for
            maintaining biodiversity and enhancing human well-being. These
            animals offer companionship, reduce stress, and even aid in
            therapeutic settings. By adopting pets from shelters, supporting
            animal rescue organizations, and advocating for stricter animal
            welfare laws, we can protect these beloved creatures from neglect
            and abuse. Each small act of kindness towards animals contributes to
            a more compassionate and humane society. Let's take responsibility
            and ensure a safe, loving environment for all pets.
          </motion.p>

          <div className="flex gap-6">
            {isauthenticated != "authenticated" && (
              <>
                <button
                  onClick={() => router.push("/register")}
                  className="border-white border-2 px-10 py-2 rounded-full  transition-all duration-500 delay-75 text-white  font-bold hover:border-indigo-600"
                >
                  Register
                </button>
                <button
                  onClick={() => router.push("/login")}
                  className="border-white border-2 px-10 py-2 rounded-full  transition-all duration-500 delay-75 text-white  font-bold hover:border-indigo-600 shadow-lg"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <Sidebar open={open} setOpen={setopen} />
    </>
  );
}

export default Hero;
