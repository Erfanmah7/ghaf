import React from "react";
import Card from "./Card";

function CardWork() {
  return (
    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-28">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardWork;
