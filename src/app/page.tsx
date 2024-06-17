"use client";
import Hero from "@/components/Hero";
import { data } from "@/constants/data";
import HomeTitle from "@/components/HomeTitle";
import ShowAnimal from "@/components/ShowAnimal";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* rescue animals */}
      <HomeTitle name="Missing Animals" />
      <div className="grid grid-cols-4 px-24 gap-4">
        {data.map((items, index) => {
          return <ShowAnimal delay={0.4 * index} {...items} key={index} />;
        })}
      </div>

      {/* rescue animals */}
      <HomeTitle name="Rescue Animals" />
      <div className="grid grid-cols-4 px-24 gap-4">
        {data.map((items, index) => {
          return <ShowAnimal delay={0.4 * index} {...items} key={index} />;
        })}
      </div>
      {/* selling animals */}
      <HomeTitle name="Selling Animals" />

      <div className="grid grid-cols-4 px-24 gap-4">
        {data.map((items, index) => {
          return <ShowAnimal delay={0.4 * index} {...items} key={index} />;
        })}
      </div>
    </main>
  );
}
