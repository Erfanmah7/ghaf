import React from "react";
import CardWork from "../components/CardWork";
import CardAbout from "../components/CardAbout";
import CardForm from "../components/CardForm";

function Home() {
  return (
    <div className="md:mt-[30px] mt-2 mx-auto mb-0 flex flex-col justify-center container">
      <CardForm />
      <CardWork />
      <CardAbout />
    </div>
  );
}

export default Home;
