import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { rpart1 } from "@/assets/images/z-index";

export default function ProductDetailsInformation() {
  return (
    <div className="hidden  md:grid lg:grid-cols-7 grid-cols-2 my-6 gap-4">
      <div className="lg:col-span-5 col-span-2 bg-white md:py-5 py-2 w-full h-full rounded-lg border-[1px] border-[#DEE2E7]">
        <header className="text-gray-600 md:px-5 px-2 body-font border-b-[1px] pb-1 border-[#DEE2E7]">
          <div className=" flex flex-wrap flex-col md:flex-row items-center">
            <nav className="flex flex-wrap gap-4 items-center text-base">
              <Link className="mr-5 hover:text-gray-900 text-[#0D6EFD] border-b-[2px] border-b-[#0D6EFD]">
                Description
              </Link>
              <Link className="mr-5 hover:text-gray-900">Reviews</Link>
              <Link className="mr-5 hover:text-gray-900">Shipping</Link>
              <Link className="mr-5 hover:text-gray-900">About seller</Link>
            </nav>
          </div>
        </header>
        <div className="md:px-5 px-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          {/* table */}
          <div className="border-[1px] border-[#BDC1C8] my-5 w-2/3">
            <div className="flex ">
              <div className="w-1/3 flex flex-col gap-3 border-r-[1px] border-[#BDC1C8] text-[#505050] bg-[#EFF2F4]">
                <div className="border-b-[1px] border-[#BDC1C8] pl-2">
                  Model
                </div>
                <div className="border-b-[1px] border-[#BDC1C8] pl-2">
                  Style
                </div>
                <div className="border-b-[1px] border-[#BDC1C8] pl-2">Size</div>
                <div className="border-b-[1px] border-[#BDC1C8] pl-2">
                  Certificate
                </div>
                <div className="border-b-[1px] border-[#BDC1C8] pl-2">
                  Memory
                </div>
              </div>
              <div className="w-2/3 flex flex-col gap-3 text-[#505050]">
                <div className="border-b-[1px] border-[#BDC1C8] pl-3">
                  #8786867
                </div>
                <div className="border-b-[1px] border-[#BDC1C8] pl-3">
                  Classic style
                </div>
                <div className="border-b-[1px] border-[#BDC1C8] pl-3">
                  ISO-898921212
                </div>
                <div className="border-b-[1px] border-[#BDC1C8] pl-3">
                  34mm x 450mm x 19mm
                </div>
                <div className="border-b-[1px] border-[#BDC1C8] pl-3">
                  36GB RAM
                </div>
              </div>
            </div>
          </div>
          {/* /table */}
          {/* cheklist */}
          <div className=" mt-6 w-2/3 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <FaCheck className="text-[#505050]" />
              <p>Some great feature name here</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-[#505050]" />
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-[#505050]" />
              <p>Duis aute irure dolor in reprehenderit</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-[#505050]" />
              <p>Some great feature name here</p>
            </div>
          </div>
          {/* /cheklist */}
        </div>
      </div>
      <div className="lg:col-span-2  bg-white md:p-5 p-2 h-full rounded-lg border-[1px] border-[#DEE2E7]">
        <h3 className="font-semibold text-xl">You may like</h3>
        <div className="flex flex-col gap-2 my-3">
          <div className="flex gap-3">
            <div className="max-w-20 max-h-20 rounded-md p-2 flex items-center justify-center border-[1px] border-[#DEE2E7]">
              <img className="w-full h-full" src={rpart1} alt="" />
            </div>
            <div>
              <h2>Men Blazers Sets Elegant Formal</h2>
              <p className="text-[#8B96A5]">$7.00 - $99.50</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="max-w-20 max-h-20 rounded-md p-2 flex items-center justify-center border-[1px] border-[#DEE2E7]">
              <img className="w-full h-full" src={rpart1} alt="" />
            </div>
            <div>
              <h2>Men Blazers Sets Elegant Formal</h2>
              <p className="text-[#8B96A5]">$7.00 - $99.50</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="max-w-20 max-h-20 rounded-md p-2 flex items-center justify-center border-[1px] border-[#DEE2E7]">
              <img className="w-full h-full" src={rpart1} alt="" />
            </div>
            <div>
              <h2>Men Blazers Sets Elegant Formal</h2>
              <p className="text-[#8B96A5]">$7.00 - $99.50</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="max-w-20 max-h-20 rounded-md p-2 flex items-center justify-center border-[1px] border-[#DEE2E7]">
              <img className="w-full h-full" src={rpart1} alt="" />
            </div>
            <div>
              <h2>Men Blazers Sets Elegant Formal</h2>
              <p className="text-[#8B96A5]">$7.00 - $99.50</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="max-w-20 max-h-20 rounded-md p-2 flex items-center justify-center border-[1px] border-[#DEE2E7]">
              <img className="w-full h-full" src={rpart1} alt="" />
            </div>
            <div>
              <h2>Men Blazers Sets Elegant Formal</h2>
              <p className="text-[#8B96A5]">$7.00 - $99.50</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
