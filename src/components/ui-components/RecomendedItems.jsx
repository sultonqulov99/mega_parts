import React, { useRef, useState } from "react";
import { rpart1, rpart2, rpart3, rpart4 } from "@/assets/images/z-index";
import { Link } from "react-router-dom";

const recommenddedparts = [
  {
    id: 1,
    img: rpart1,
    desc: "Brake Disc for Damas",
    title: "Damas scope"
  },
  {
    id: 2,
    img: rpart2,
    desc: "Brake Disc for Damas",
    title: "Damas scope"
  },
  {
    id: 3,
    img: rpart3,
    desc: "Brake Disc for Damas",
    title: "Damas scope"
  },
  {
    id: 4,
    img: rpart4,
    desc: "Brake Disc for Damas",
    title: "Damas scope"
  },
  {
    id: 5,
    img: rpart4,
    desc: "Brake Disc for Damas",
    title: "Damas scope"
  },
  {
    id: 6,
    img: rpart1,
    desc: "Brake Disc for Damas",
    title: "Damas scope"
  },
  {
    id: 7,
    img: rpart2,
    desc: "Brake Disc for Damas",
    title: "Damas scope"
  },
  {
    id: 8,
    img: rpart3,
    desc: "Brake Disc for Damas",
    title: "Damas scope"
  },
  {
    id: 9,
    img: rpart4,
    desc: "Brake Disc for Damas",
    title: "Damas scope"
  },
  {
    id: 10,
    img: rpart1,
    desc: "Brake Disc for Damas",
    title: "Damas scope"
  },
  {
    id: 11,
    img: rpart2,
    desc: "Brake Disc for Damas",
    title: "Damas scope"
  },
  {
    id: 12,
    img: rpart3,
    desc: "Brake Disc for Damas",
    title: "Damas scope"
  },
  {
    id: 13,
    img: rpart4,
    desc: "Brake Disc for Damas",
    title: "Damas scope"
  },
  {
    id: 14,
    img: rpart1,
    desc: "Brake Disc for Damas",
    title: "Damas scope"
  },
  {
    id: 15,
    img: rpart2,
    desc: "Brake Disc for Damas",
    title: "Damas scope"
  },
]

export default function RecomendedItems() {
  return (
    <div className="w-full h-full md:p-2">
      <h1>Recommended Items</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-3 my-4 p-2 mx-auto w-full">
        {recommenddedparts.map((items, index )=> {
          return (
            <Link to={`product/${items.id}`} key={index} className="max-h-[310px] rounded-sm bg-white border-[1px] border-[#DEE2E7] p-4 flex flex-col">
              <img className=" w-42 mx-auto min-h-42 mb-3 " src={items.img} alt="part1" />
              <div className=" min-h-24 py-3">
                <p className=" font-semibold">{items.title}</p>
                <p className=" text-slate-400">{items.desc}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
