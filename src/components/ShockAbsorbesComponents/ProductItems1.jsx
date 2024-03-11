
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

export default function ProductItems1({ element, index }) {
  const [like, setLike] = useState(false);
  return (
    <div
      key={index}
      className=" select-none w-full h-full p-2 sm:p-4 bg-white rounded-md border-[1px] border-[#DEE2E7] flex gap-6"
    >
      <div className="w-[84px] lg:w-[184px] flex items-center justify-center pl-1">
        <img src={element.img} alt="" />
      </div>
      <div className="flex justify-between w-full">
        <div className="w-full lg:w-3/4">
          <h3>{element.title}</h3>
          <div>
            <h1 className="text-xl md:text-2xl font-semibold underline">
              Show price
            </h1>
            <p className="flex gap-3 mb-1">
              <span className="text-[#8B96A5]">154 orders </span>{" "}
              <span className="text-[#8B96A5]">•</span>{" "}
              <span className="text-[#00B517]">Free shipping</span>
            </p>
            <p className="text-[#505050] mb-2 hidden lg:block">
              {element.desc}
            </p>

            <button className="text-[#0D6EFD] hidden lg:block">
              View details
            </button>
          </div>
        </div>
        <div
          onClick={() => setLike((prev) => !prev)}
          className="hidden w-10 h-10 sm:flex items-center justify-center border-2 rounded-lg"
        >
          {like ? (
            <FaHeart className="text-2xl text-red-600" />
          ) : (
            <FaRegHeart className="text-2xl text-[#0D6EFD]" />
          )}
        </div>
      </div>
    </div>
  );
}
