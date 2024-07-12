"use client";
import ShowAnimal from "@/components/ShowAnimal";
import { FetchApiWithToken } from "@/constants/customhook";
import { MYDATAURL } from "@/constants/url";

function page() {
  const [data] = FetchApiWithToken(MYDATAURL);

  return (
    <div>
      <h1 className=" text-center font-bold text-4xl mt-4">My Post Data</h1>
      <div className="grid grid-cols-4 px-24 gap-4 my-10">
        {data?.map((item, index) => {
          return <ShowAnimal {...item} delay={0.1 * index} />;
        })}
      </div>
    </div>
  );
}

export default page;
