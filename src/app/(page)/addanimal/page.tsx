"use client";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().required("This field is required."),
  gender: yup.string().required("This field is required."),
  phone: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required("This field is required"),
  image: yup.mixed().required("This field is required."),
  category: yup.string().required("This field is required."),
});

interface animal {
  name: string;
  gender: string;
  phone: number;
  image: FileList;
  category: string;
  price: number;
}

function page() {
  const [api, setApi] = useState([]);
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<animal>({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/api/category`);
      const result = await response.json();
      setApi(result.data);
    };
    fetchData();
  }, []);
  const formsubmittion = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("gender", data.gender);
    formData.append("phone", data.phone);
    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }
    formData.append("category", data.category);
    formData.append("price", data.price);
    try {
      const response = await fetch("http://localhost:3000/api/animals", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session?.user.accesstoken}`,
        },
        body: formData,
      });
      console.log(response);
      const result = await response.json();
      console.log(result);
      if (result.status != "fail") {
        alert(result.message);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-24">
      <h1 className="text-center font-bold  my-10 text-white text-2xl">
        Adding New Animal
      </h1>
      <form
        action=""
        onSubmit={handleSubmit(formsubmittion)}
        noValidate
        encType="multipart/form-data"
      >
        <input
          {...register("name")}
          type="text"
          id="name"
          name="name"
          className="my-4 w-full rounded border border-gray-700  bg-opacity-40 bg-black py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500  focus:ring-2 focus:ring-indigo-900"
          placeholder="Name"
        />
        <p className="text-red-500">{errors.name?.message}</p>
        <input
          {...register("gender")}
          type="text"
          id="gender"
          name="gender"
          className="my-4 w-full rounded border border-gray-700  bg-opacity-40 bg-black py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500  focus:ring-2 focus:ring-indigo-900"
          placeholder="Gender"
        />
        <p className="text-red-500">{errors.gender?.message}</p>
        <input
          {...register("phone")}
          type="phone"
          id="phone"
          name="phone"
          className="my-4 w-full rounded border border-gray-700  bg-opacity-40 bg-black py-1 px-3 text-base leading-8 text-gray-100  outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500  focus:ring-2 focus:ring-indigo-900"
          placeholder="Phone"
        />
        <p className="text-red-500">{errors.phone?.message}</p>
        <input
          {...register("image")}
          type="file"
          id="image"
          name="image"
          className="my-4 w-full rounded border border-gray-700  bg-opacity-40 bg-black py-1 px-3 text-base leading-8 text-gray-100  outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500  focus:ring-2 focus:ring-indigo-900"
          placeholder="upload image"
        />
        <p className="text-red-500">{errors.image?.message}</p>
        <select
          {...register("category")}
          title="Select Category"
          name="category"
          id="category"
          className="my-4 w-full rounded border border-gray-700  bg-opacity-40 bg-black py-3 px-3 text-base leading-8 text-gray-100  outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500  focus:ring-2 focus:ring-indigo-900 "
        >
          <option value="">--Please choose a category--</option>
          {api.map((item: any, index: number) => {
            return (
              <option value={`${item._id}`} key={index}>
                {item.title}
              </option>
            );
          })}
        </select>
        <p className="text-red-500">{errors.category?.message}</p>
        <input
          {...register("price")}
          type="number"
          id="price"
          name="price"
          className="my-4 w-full rounded border border-gray-700  bg-opacity-40 bg-black py-1 px-3 text-base leading-8 text-gray-100  outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500  focus:ring-2 focus:ring-indigo-900"
          placeholder="Price"
        />

        <input
          type="submit"
          value="Add Animal"
          className="px-10 py-2 rounded-full  border-2 border-white mt-4"
        />
      </form>
    </div>
  );
}

export default page;
