import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center container mt-12 md:mb-48 mb-96">
      <svg className="text-black md:w-[650px] md:h-[650px] w-56 h-56">
        <use href="#notfound"></use>
      </svg>
      <p className="font-IranSansMedium text-xl mt-7 text-center">
        چیزی که میخواستی و پیدا نکردم دوباره تلاش کن...
      </p>
    </div>
  );
}

export default NotFound;
