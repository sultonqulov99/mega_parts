import React, { useEffect } from "react";
import {
  part1,
  part2,
  part3,
  part4,
  part5,
  part6,
} from "@/assets/images/z-index";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const reletedProducts = [
  {
    id: 1,
    img: part1,
    title: "Xiaomi Redmi 8 Original ",
    awgCost: "$32.00-$40.00",
  },
  {
    id: 2,
    img: part2,
    title: "Xiaomi Redmi 8 Original ",
    awgCost: "$32.00-$40.00",
  },
  {
    id: 3,
    img: part3,
    title: "Xiaomi Redmi 8 Original ",
    awgCost: "$32.00-$40.00",
  },
  {
    id: 4,
    img: part4,
    title: "Xiaomi Redmi 8 Original ",
    awgCost: "$32.00-$40.00",
  },
  {
    id: 5,
    img: part5,
    title: "Xiaomi Redmi 8 Original ",
    awgCost: "$32.00-$40.00",
  },
  {
    id: 6,
    img: part6,
    title: "Xiaomi Redmi 8 Original ",
    awgCost: "$32.00-$40.00",
  },
  {
    id: 7,
    img: part2,
    title: "Xiaomi Redmi 8 Original ",
    awgCost: "$32.00-$40.00",
  },
];

function calculateColumnCount(screenWidth) {
  let columnCount;
  if (screenWidth > 768) {
    columnCount = 4;
  } else if (screenWidth > 640 && screenWidth < 768) {
    columnCount = 3;
  } else if (screenWidth <= 640) {
    columnCount = 2;
  } else {
    columnCount = 2;
  }
  return columnCount;
}

export default function RelatedProducts() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const columnCount = calculateColumnCount(screenWidth);

  return (
    <div className="rounded-lg border-[1px] border-[#DEE2E7] md:p-5 p-2 bg-white w-full h-full">
      <h3 className="text-xl mb-2 font-semibold">Related products</h3>

      <div className="">
        {/* Pruducts */}
        <Swiper
          className="mySwiper w-full flex"
          slidesPerView={columnCount}
          freeMode={true}
          pagination={false}
          modules={[FreeMode, Pagination]}
        >
          {reletedProducts.map((items) => {
            return (
              <SwiperSlide
                key={items.id}
                className="max-w-[172px] mr-5  h-full flex flex-col gap-4 items-center"
              >
                <Link to={`product/${items.id}`}>
                  <div className="w-[172px] h-[172px] p-6 bg-[#eee] rounded-lg">
                    <img
                      className=" w-full h-full"
                      src={items.img}
                      alt="part1"
                    />
                  </div>
                  <div className="w-full py-2">
                    <p>{items.title}</p>
                    <span className=" text-[#8B96A5]">{items.awgCost}</span>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
