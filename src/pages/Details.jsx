import React from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  return (
    <div>
      <p>details + {id}</p>
      <div className="relative drop-shadow-md">
        <p className="absolute right-0 left-0 md:-top-[53px] -top-[47px] z-10 md:text-xl text-base font-IranSansBold py-[6px] text-center rounded-xl text-black my-5">
          نمونه کار
        </p>
        <svg className="text-white md:w-80 md:h-80 w-52 h-52 -top-[112px] absolute mx-auto left-0 right-0 md:-top-[172px]">
          <use href="#top"></use>
        </svg>
        <div className="flex flex-col justify-start pb-9 md:px-11 px-5 pt-9 bg-white rounded-2xl rounded-bl-none"></div>
      </div>
    </div>
  );
}

export default Details;
