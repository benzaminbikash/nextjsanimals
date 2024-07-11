"use client";
import ShowAnimal from "@/components/ShowAnimal";
import { FetchApi } from "@/constants/customhook";
import React from "react";

interface PROPS {
  params: {
    allanimals: string;
  };
}

function page({ params }: PROPS) {
  const { allanimals } = params;
  const [data] = FetchApi(
    `http://localhost:3000/api/animals?category=${allanimals}`
  );
  return (
    <div>
      <div className="grid grid-cols-4 px-24 gap-4 my-10">
        {data.map((item, index) => {
          return <ShowAnimal {...item} delay={0.1 * index} />;
        })}
      </div>
    </div>
  );
}

export default page;
