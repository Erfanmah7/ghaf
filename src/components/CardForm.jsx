import React from "react";

function CardForm() {
  return (
    <form className="relative drop-shadow-md">
      <p className="absolute right-0 left-0 md:-top-[53px] -top-[47px] z-10 md:text-xl text-base font-IranSansBold py-[6px] text-center rounded-xl text-black my-5">
        ثبت سفارش لوگو
      </p>
      <svg className="text-white md:w-80 md:h-80 w-52 h-52 -top-[112px] absolute mx-auto left-0 right-0 md:-top-[172px]">
        <use href="#top"></use>
      </svg>
      <div className="flex flex-col justify-start h-[700px] md:px-11 px-5 pt-9 bg-white rounded-2xl rounded-bl-none">
        {/* form */}
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
              className="py-2 px-2 w-full rounded-md border-zinc-200 border dark:border-zinc-500 bg-zinc-200/15 focus:outline-none"
              type="text"
              name="name"
              id="name"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1">
              مایلید برندتان چه سبکی طراحی شود؟
              <span className="text-black">
                <svg className="h-[10px] w-[10px] dark:text-white text-black ">
                  <use href="#star"></use>
                </svg>
              </span>
            </label>
            <select className="py-2 px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-200/15 rounded-md focus:outline-none">
              <option value="ss">ss</option>
              <option value="efef">fedf</option>
              <option value="seffs">efefes</option>
            </select>
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
              className="py-2 px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-200/15 rounded-md focus:outline-none"
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
              className="py-2 px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-200/15 rounded-md focus:outline-none"
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
              className="py-2 px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-200/15 rounded-md focus:outline-none"
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
              className="py-2 px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-200/15 rounded-md focus:outline-none"
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
              className="py-2 px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-200/15 rounded-md focus:outline-none"
              type="text"
              name="paid"
              id="paid"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <svg className="text-white w-44 h-44 absolute left-0 -bottom-[104px]">
        <use href="#left-right"></use>
      </svg>
      <svg className="h-[50px] w-[50px] absolute top-[560px] -right-7 md:inline-block hidden  text-black text-gradient-to-t from-zinc-700 ">
        <use href="#star"></use>
      </svg>
      <svg className="h-[50px] w-[50px] absolute top-[170px] -left-6 md:inline-block hidden text-black text-gradient-to-t from-zinc-700 ">
        <use href="#star"></use>
      </svg>
      <button className="absolute left-4 -bottom-[50px] text-base text-center py-[6px] px-5 w-28 rounded-xl text-white bg-black bg-gradient-to-t from-zinc-700 hover:bg-zinc-700 my-5">
        ارسال
      </button>
    </form>
  );
}

export default CardForm;
