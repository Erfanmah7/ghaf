import React from "react";

function CardAbout() {
  return (
    <div className="relative top-28 mb-24 drop-shadow-md">
      <p
        id="about"
        className="absolute md:right-6 right-2 -top-[47px] md:-top-[53px] z-10 md:text-xl text-base font-IranSansBold py-[6px] px-5 w-28 rounded-xl text-black my-5"
      >
        درباره ما
      </p>
      <svg className="text-white md:w-44 md:h-44 w-32 h-32 -top-[75px] absolute right-0 md:-top-[103.7px] rotate-180">
        <use href="#left-right"></use>
      </svg>

      <div className="md:h-[200px] h-[600px] p-3 justify-center items-center flex md:flex-row  flex-col bg-white rounded-2xl rounded-tr-none">
        <div className="md:w-[1150px] md:h-[175px] w-full h-[675px] bg-zinc-300 rounded-xl"></div>

        <p className="md:p-6 pt-4 px-1 pb-2 text-justify md:leading-8 text-base leading-6">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
    </div>
  );
}

export default CardAbout;
