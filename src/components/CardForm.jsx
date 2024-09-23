import React, { useState } from "react";

function CardForm() {
  const [form, setForm] = useState({
    namelogo: "",
    typelogo: "",
    language: "",
    logoidentity: "",
    logocolor: "",
    logolink: "",
    logoconcept: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    setForm({ ...form, [name]: e.target.value });
  };

  const addHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={addHandler} className="relative drop-shadow-md">
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
              name="namelogo"
              id="name"
              onChange={changeHandler}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1" htmlFor="typelogo">
              مایلید برندتان چه سبکی طراحی شود؟
              <span className="text-black">
                <svg className="h-[10px] w-[10px] dark:text-white text-black ">
                  <use href="#star"></use>
                </svg>
              </span>
            </label>
            <select
              className="py-2 appearance-none px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-200/15 rounded-md focus:outline-none"
              name="typelogo"
              id="typelogo"
              onChange={changeHandler}
            >
              <option value="logopic">لوگو تصویری</option>
              <option value="logotype">لوگو تایپ</option>
              <option value="logotp">لوگو ترکیبی</option>
            </select>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1" htmlFor="language">
              لوگو مدنظرتان به چه زبان هایی طراحی شود؟
              <span className="text-black">
                <svg className="h-[10px] w-[10px] dark:text-white text-black ">
                  <use href="#star"></use>
                </svg>
              </span>
            </label>
            <select
              className="py-2 appearance-none px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-200/15 rounded-md focus:outline-none"
              onChange={changeHandler}
              name="language"
              id="language"
            >
              <option value="persian">فارسی</option>
              <option value="english">انگلیسی</option>
            </select>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1" htmlFor="logoidentity">
              ساختار کلی هویت و سبک اجرایی لوگو چگونه باشد؟
              <span className="text-black">
                <svg className="h-[10px] w-[10px] dark:text-white text-black ">
                  <use href="#star"></use>
                </svg>
              </span>
            </label>
            <select
              className="py-2 appearance-none px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-200/15 rounded-md focus:outline-none"
              onChange={changeHandler}
              name="logoidentity"
              id="logoidentity"
            >
              <option value="classic">شیک و کلاسیک</option>
              <option value="modern">لاکچری و مدرن</option>
              <option value="conceptual">خلاقانه و مفهومی</option>
              <option value="Minimal">ساده و مینیمال</option>
              <option value="designer">به انتخاب طراح</option>
            </select>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1" htmlFor="color">
              رنگ برندتان چگونه باشد؟
              <span className="text-black">
                <svg className="h-[10px] w-[10px] dark:text-white text-black ">
                  <use href="#star"></use>
                </svg>
              </span>
            </label>
            <input
              placeholder="بنفش و آبی"
              className="py-2 px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-200/15 rounded-md focus:outline-none"
              type="text"
              name="logocolor"
              id="color"
              onChange={changeHandler}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="flex items-start gap-x-1" htmlFor="logolink">
              رابطه لوگو با محصول یا خدمات شما چگونه باشد؟
              <span className="text-black">
                <svg className="h-[10px] w-[10px] dark:text-white text-black ">
                  <use href="#star"></use>
                </svg>
              </span>
            </label>
            <select
              className="py-2 appearance-none px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-200/15 rounded-md focus:outline-none"
              name="logolink"
              onChange={changeHandler}
            >
              <option value="concept">
                رابطه مفهومی: مثل نقش یک شعله برای شرکت فعال در زمینه نفت و گاز
              </option>
              <option value="direct">
                رابطه مستقیم: مانند نقش یک توپ بسکتبال برای یک تیم بسکتبال
              </option>
              <option value="Indirect">
                رابطه غیر مستقیم: به طور مثال نمایشی از قدمت و سنت ملی آن کشور؛
                مانند جام بانک پاسارگاد
              </option>
              <option value="unrelated">
                بدون ارتباط: به طوری که به تدریج معرف موضوع شود؛ مانند شکل سیب
                برای شرکت اپل
              </option>
            </select>
          </div>

          <div className="flex flex-col space-y-1">
            <label
              className="flex items-start gap-x-1 text-justify tracking-normal"
              htmlFor="logoconcept"
            >
              لطفا نام تجاریتان، معنای لغوی و ارتباط آن با فعالیت مجموعه خود را
              ذکر نمایید:
              <span className="text-black">
                <svg className="h-[10px] w-[10px] dark:text-white text-black ">
                  <use href="#star"></use>
                </svg>
              </span>
            </label>
            <textarea
              onChange={changeHandler}
              className="py-2 px-2 w-full border-zinc-200 border dark:border-zinc-500 bg-zinc-200/15 rounded-md focus:outline-none"
              name="logoconcept"
              id="logoconcept"
            ></textarea>
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
      <button
        type="submit"
        className="absolute left-4 -bottom-[50px] text-base text-center py-[6px] px-5 w-28 rounded-xl text-white bg-black bg-gradient-to-t from-zinc-700 hover:bg-zinc-700 my-5"
      >
        ارسال
      </button>
    </form>
  );
}

export default CardForm;
