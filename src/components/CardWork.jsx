import React from "react";
import Card from "./Card";

const myProducts = [
  { id: 1, name: "products-1" },
  { id: 2, name: "products-2" },
  { id: 3, name: "products-3" },
  { id: 4, name: "products-4" },
  { id: 5, name: "products-5" },
  { id: 6, name: "products-6" },
];

function CardWork() {
  return (
    <div
      id="work"
      className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-28"
    >
      {myProducts.map((p) => (
        <div key={p.id}>
          <Card id={p.id} />
        </div>
      ))}
    </div>
  );
}

export default CardWork;
