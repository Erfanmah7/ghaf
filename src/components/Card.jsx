import React from "react";
import { Link } from "react-router-dom";

function Card({ id, name }) {
  return (
    <div className="relative drop-shadow-md">
      <svg className="text-white w-44 h-44 md:w-36 md:h-36 absolute right-0 -top-[104px]  md:-top-[84.8px] rotate-180">
        <use href="#left-right"></use>
      </svg>
      <div className="flex flex-col h-[400px] p-6 justify-center bg-white rounded-2xl rounded-bl-none rounded-tr-none">
        <div className="w-full h-[250px] bg-zinc-300 rounded-xl"></div>
        <p className="px-0  pt-4 text-justify leading-7 tracking-tight line-clamp-3">
         {name}
        </p>
      </div>
      <svg className="text-white md:w-44 md:h-44 w-44 h-44 absolute left-0 md:left-0 -bottom-[104px]">
        <use href="#left-right"></use>
      </svg>
      <Link
        to={`/card/${id}`}
        className="absolute md:left-[17px] left-4 -bottom-[50px] text-base text-center py-[6px] px-5 w-28 rounded-xl text-white bg-black bg-gradient-to-t from-zinc-700 hover:bg-zinc-700 my-5"
      >
        مشاهده
      </Link>
    </div>
  );
}

export default Card;
