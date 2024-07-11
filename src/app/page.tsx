"use client";
import Hero from "@/components/Hero";
import HomeTitle from "@/components/HomeTitle";
import ShowAnimal from "@/components/ShowAnimal";
import Contact from "@/components/Contact";
import { FetchApi } from "@/constants/customhook";
import { MISSURL, RESCUEURL, SELLURL } from "@/constants/url";

export default function Home() {
  const [missingapi] = FetchApi(MISSURL);
  const [rescueapi] = FetchApi(RESCUEURL);
  const [sellingapi] = FetchApi(SELLURL);

  return (
    <main>
      <Hero />
      {/* rescue animals */}
      <HomeTitle
        name="Missing Animals"
        categorylink="6678482c22a404fb4cb7bf87"
      />
      <div className="grid grid-cols-4 px-24 gap-4">
        {missingapi?.slice(0, 4).map((items, index) => {
          return <ShowAnimal delay={0.4 * index} {...items} key={index} />;
        })}
      </div>

      {/* rescue animals */}
      <HomeTitle
        name="Rescue Animals"
        categorylink="6678484922a404fb4cb7bf89"
      />
      <div className="grid grid-cols-4 px-24 gap-4">
        {rescueapi?.slice(0, 4).map((items, index) => {
          return <ShowAnimal delay={0.4 * index} {...items} key={index} />;
        })}
      </div>
      {/* selling animals */}
      <HomeTitle
        name="Selling Animals"
        categorylink="66795b9645f71c5dd77daa33"
      />

      <div className="grid grid-cols-4 px-24 gap-4">
        {sellingapi?.slice(0, 4).map((items, index) => {
          return <ShowAnimal delay={0.4 * index} {...items} key={index} />;
        })}
      </div>
      <Contact />
    </main>
  );
}
