import React, { useState } from "react";

function FormAbout() {
  const [form, setForm] = useState({
    flname: "",
    number: "",
    subject: "",
    discription: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    setForm({...form,[name]:e.target.value})
  };

  const clickHandler = (e) => {
e.preventDefault();
console.log(form);

  };

  return (
    <>
      <form className="flex container flex-col gap-1 mt-24 mb-14" onChange={changeHandler}>
        <p className="text-2xl">ارتباط با ما</p>
        <div className="flex gap-x-1">
          <input
            className="border-2 w-[286px] p-1 rounded-md"
            type="text"
            name="flname"
            onChange={(e) => setForm(e.target.value)}
            placeholder="نام و نام خانوادگی"
          />
          <input
            className="border-2 w-[286px] p-1 rounded-md"
            type="number"
            placeholder="شماره تماس"
          />
        </div>
        <input
          className="border-2 w-[576px] p-1 rounded-md"
          type="text"
          placeholder="موضوع"
        />
        <textarea
          className="border-2 p-1 w-[576px] rounded-md"
          placeholder="توضیحات"
          rows="4"
          cols="50"
        ></textarea>
        <button
          onClick={clickHandler}
          className="bg-blue-700 hover:bg-blue-800 w-[576px] shadow text-white px-6 py-1 rounded-md"
        >
          ارسال
        </button>
      </form>
    </>
  );
}

export default FormAbout;
