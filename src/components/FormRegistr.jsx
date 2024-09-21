import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function FormRegistr() {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    name: "",
    number: null,
    approved: null,
    notpaid: null,
    paid: null,
  });

  const changeHandler = (e) => {
    const name = e.target.name;

    setForm({ ...form, [name]: e.target.value });
  };

  const queryKey = ["posts"];
  const queryFn = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  };

  // gcTime = cashTime
  //isLoading => isPending && isFetching
  const { data, isPending } = useQuery({
    queryKey,
    queryFn,
    gcTime: 50000,
    refetchOnWindowFocus: false,
  });

  console.log({ data });

  const mutationFn = (data) => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", data);
  };

  const addHandler = () => {
    const data = form;

    mutate(data, {
      onSuccess: () => {
        console.log("Success", data),
          queryClient.invalidateQueries({ queryKey: ["posts"] });
      },
      onError: (data) => console.log("error", error),
    });
  };
  const { mutate } = useMutation({ mutationFn });

  // const addHandler = (e) => {
  //   e.preventDefault();
  //   console.log({ form });
  // };

  return (
    <div className="mt-[50px] md:mt-[115px]">
      <form
        className="rounded-md px-5 shadow-sm bg-white border-zinc-200 border dark:border-zinc-500 py-5 dark:bg-zinc-700"
        onChange={changeHandler}
      >
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 dark:text-white">
          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1" htmlFor="name">
              نام سفارش
              <span className="text-black">
                <svg className="h-[10px] w-[10px] dark:text-white text-black ">
                  <use href="#star"></use>
                </svg>
              </span>
            </label>
            <input
              placeholder="مثال: لوگو کارخانجات صنایع فلزی آلفا"
              className="py-2 px-2 w-full rounded-md border-zinc-200 border dark:border-zinc-500 bg-zinc-100/5  focus:outline-none"
              type="text"
              name="name"
              id="name"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1" htmlFor="number">
              مایلید برندتان چه سبکی طراحی شود؟
              <span className="text-black">
                <svg className="h-[10px] w-[10px] dark:text-white text-black ">
                  <use href="#star"></use>
                </svg>
              </span>
            </label>
            <input
              className="py-2 px-2 w-full rounded-md  border-zinc-200 border dark:border-zinc-500 bg-zinc-100/5 focus:outline-none"
              type="number"
              name="number"
              id="number"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1" htmlFor="approved">
              لوگو مدنظرتان به چه زبان هایی طراحی شود؟
              <span className="text-black">
                <svg className="h-[10px] w-[10px] dark:text-white text-black ">
                  <use href="#star"></use>
                </svg>
              </span>
            </label>
            <input
              className="py-2 px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-100/5 rounded-md focus:outline-none"
              type="number"
              name="approved"
              id="approved"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1" htmlFor="notpaid">
              ساختار کلی هویت و سبک اجرایی لوگو چگونه باشد؟
              <span className="text-black">
                <svg className="h-[10px] w-[10px] dark:text-white text-black ">
                  <use href="#star"></use>
                </svg>
              </span>
            </label>
            <input
              className="py-2 px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-100/5 rounded-md focus:outline-none"
              type="number"
              name="notpaid"
              id="notpaid"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1" htmlFor="paid">
              اولویت رنگ برندتان چگونه باشد؟
              <span className="text-black">
                <svg className="h-[10px] w-[10px] dark:text-white text-black ">
                  <use href="#star"></use>
                </svg>
              </span>
            </label>
            <input
              className="py-2 px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-100/5 rounded-md focus:outline-none"
              type="number"
              name="paid"
              id="paid"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1" htmlFor="paid">
              رابطه لوگو با محصول یا خدمات شما چگونه باشد؟
              <span className="text-black">
                <svg className="h-[10px] w-[10px] dark:text-white text-black ">
                  <use href="#star"></use>
                </svg>
              </span>
            </label>
            <input
              className="py-2 px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-100/5 rounded-md focus:outline-none"
              type="number"
              name="paid"
              id="paid"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label
              className="flex items-start gap-x-1 text-justify tracking-normal"
              htmlFor="paid"
            >
              لطفا نام تجاریتان، معنای لغوی و ارتباط آن با فعالیت مجموعه خود را
              ذکر نمایید:
              <span className="text-black">
                <svg className="h-[10px] w-[10px] dark:text-white text-black ">
                  <use href="#star"></use>
                </svg>
              </span>
            </label>
            <input
              className="py-2 px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-100/5 rounded-md focus:outline-none"
              type="text"
              name="paid"
              id="paid"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>
        </div>

        <button
          className="py-2 px-5 w-full rounded-md text-white bg-black bg-gradient-to-t from-zinc-700 hover:bg-zinc-700 my-5"
          onClick={addHandler}
        >
          ارسال طرح
        </button>
      </form>
    </div>
  );
}

export default FormRegistr;
