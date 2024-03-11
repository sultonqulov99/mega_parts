import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaBasketShopping, FaCheck, FaE } from "react-icons/fa6";
import { TbBasketPlus } from "react-icons/tb";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { Button } from "../ui/button";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { rpart1, rpart2, rpart3, rpart4 } from "@/assets/images/z-index";
const productImages = [
  rpart1, 
  rpart2, 
  rpart3, 
  rpart4
]
import ProductImageSlides from "./ProductImageSlides";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  const notify = () => toast("Added your cart");

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <section className=" md:bg-white md:p-5 py-2 w-full h-full rounded-lg border-[1px] border-[#DEE2E7] flex flex-col xl:flex-row gap-5 ">
      {/* poduct details */}
      <div className="mx-auto">
        <ProductImageSlides images={productImages}/>
      </div>
      {/* product information */}
      <figure className="flex flex-col lg:flex-row gap-5">
        {/* product content */}
        <div>
          <article>
            <span className="hidden md:flex items-center gap-2 text-[#00B517]">
              <FaCheck /> In stock
            </span>
            <h2 className="text-xl md:text-2xl font-semibold">
              Shock Absorber Chevrolet Cobalt - 7166 - 7167
            </h2>
          </article>

          <div className="text-[#787A80] flex items-center gap-4 my-2">
            <span className="flex items-center gap-2">
              <FaEye /> 32 reviews
            </span>{" "}
            •
            <span className="flex items-center gap-2">
              <MdOutlineShoppingBasket /> 154 sold
            </span>
          </div>

          {/* const changes per time */}
          <div className="bg-[#FFF0DF] w-full p-3 hidden md:flex justify-start gap-16">
            <div className="px-2">
              <h3 className="text-xl font-semibold text-[#FA3434]">$98.00</h3>
              <p className="text-[#606060] text-sm">50-100 pcs</p>
            </div>
            <div className="px-2 border-l-[1px] border-[#BDC1C8]">
              <h3 className="text-xl font-semibold ">$98.00</h3>
              <p className="text-[#606060] text-sm">50-100 pcs</p>
            </div>
            <div className="px-2 border-l-[1px] border-[#BDC1C8]">
              <h3 className="text-xl font-semibold ">$98.00</h3>
              <p className="text-[#606060] text-sm">50-100 pcs</p>
            </div>
          </div>

          {/* mobile views */}
          <div className="md:hidden flex gap-3 items-baseline">
            <h3 className="text-xl font-semibold text-[#FA3434]">$98.00</h3>
            <p className="text-[#606060] text-md">(50-100 pcs)</p>
          </div>

          {/* Movile view shopping section */}
          <div className="block md:hidden">
            <div className="flex justify-between items-center gap-3 mb-3">
              <div className=" my-4">
                <div className="flex justify-around text-lg gap-2 w-24 border-[1px] border-[#BDC1C8] px-3 py-2 rounded-md">
                  <button
                    className={` ${
                      quantity == 1 ? ` hover:cursor-no-drop` : ``
                    } h-4 w-4`}
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button onClick={handleIncrement}>+</button>
                </div>
              </div>
              <Button className="active:scale-[1.02] w-48 py-3 text-xl">
                Shop now
              </Button>
              <button
                type="button"
                onClick={notify}
                className=" active:scale-[1.02] bg-indigo-100 rounded-full min-h-6 min-w-6 p-1 flex items-center justify-center text-3xl text-indigo-500 border-[2px] border-indigo-500"
              >
                <TbBasketPlus />
              </button>
              <ToastContainer
                position="top-right"
                autoClose={3018}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
              />
            </div>
          </div>

          {/* Mobile view button */}
          <div className="flex gap-2 items-center md:hidden">
            <Button className="bg-[#127FFF] text-lg font-semibold w-full block md:hidden my-3">
              Send inquiry
            </Button>
            <div className="text-[#127FFF] w-10 h-10 rounded-md bg-white border-[1px] border-[#BDC1C8] font-semibold flex items-center justify-center ">
              <CiHeart className="text-3xl" />
            </div>
          </div>

          {/* Mobile*/}
          <div className="md:hidden border-b-[1px] border-[#BDC1C8]">
            <div className="flex py-1 ">
              <div className="w-1/3 text-[#8B96A5]">Canditional:</div>
              <div className="w-2/3 text-[#505050]">Classic shoes</div>
            </div>
            <div className="flex py-1 ">
              <div className="w-1/3 text-[#8B96A5]">Material:</div>
              <div className="w-2/3 text-[#505050]">Plastic Material</div>
            </div>
            <div className="flex py-1 ">
              <div className="w-1/3 text-[#8B96A5]">Category:</div>
              <div className="w-2/3 text-[#505050]">Modern nice</div>
            </div>
            <div className="flex py-1 ">
              <div className="w-1/3 text-[#8B96A5]">Item num:</div>
              <div className="w-2/3 text-[#505050]">Modern nice</div>
            </div>

            <p className="mt-2">
              Info about edu item is an ideal companion for anyone engaged in
              learning. The drone provides precise and ...
            </p>
            <Link to="#" className="text-[#127FFF] font-semibold">
              Read more
            </Link>
          </div>

          {/* /const changes per time */}
          {/*   */}
          {/* Product props */}

          <div className="hidden md:block my-3">
            <div className="flex py-3 border-b-[1px] border-[#BDC1C8]">
              <div className="w-1/3 text-[#8B96A5]">Price:</div>
              <div className="w-2/3 text-[#505050]   ">Negotiable</div>
            </div>

            <div className="border-b-[1px] border-[#BDC1C8]">
              <div className="flex py-2 ">
                <div className="w-1/3 text-[#8B96A5]">Type:</div>
                <div className="w-2/3 text-[#505050]">Classic shoes</div>
              </div>
              <div className="flex py-2 ">
                <div className="w-1/3 text-[#8B96A5]">Material:</div>
                <div className="w-2/3 text-[#505050]">Plastic Material</div>
              </div>
              <div className="flex py-2 ">
                <div className="w-1/3 text-[#8B96A5]">Design:</div>
                <div className="w-2/3 text-[#505050]">Modern nice</div>
              </div>
            </div>

            {/* 3 */}
            <div className="border-b-[1px] border-[#BDC1C8]">
              {/* <div className="flex py-2 ">
                <div className="w-1/3 text-[#8B96A5]">Customization:</div>
                <div className="w-2/3 text-[#505050]">
                  Customized logo and design <br /> custom packages
                </div>
              </div>
              <div className="flex py-2 ">
                <div className="w-1/3 text-[#8B96A5]">Protection:</div>
                <div className="w-2/3 text-[#505050]">Refund Policy</div>
              </div> */}
              {/* <div className="flex py-2 ">
                <div className="w-1/3 text-[#8B96A5]">Warranty:</div>
                <div className="w-2/3 text-[#505050]">
                  2 years full warranty{" "}
                </div>
              </div> */}
            </div>
          </div>

          {/* Shopping section */}
          <div className="hidden md:block">
            <div className="flex items-center gap-3 mb-3">
            <div className="my-4">
              <div className="flex justify-around text-lg gap-4 w-36 border-[1px] border-[#BDC1C8] px-3 py-2 rounded-md">
                <button
                  className={` ${
                    quantity == 1 ? ` hover:cursor-no-drop` : ``
                  } h-4 w-4`}
                  onClick={handleDecrement}
                >
                  -
                </button>
                <p>{quantity}</p>
                <button onClick={handleIncrement}>+</button>
              </div>
            </div>

              <Button className="active:scale-[1.02] w-2/3 py-6 text-xl">
                Shop now
              </Button>
              
              <button
                onClick={notify}
                className=" active:scale-[1.02] bg-indigo-100 rounded-full h-18 w-18 p-3 flex items-center justify-center text-3xl text-indigo-500 border-[2px] border-indigo-500"
              >
                <TbBasketPlus />
              </button>
              <ToastContainer
                position="top-right"
                autoClose={3018}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
              />
            </div>
          </div>
        </div>
        {/* proudct information  */}
        <div>
          <div className="lg:w-[280px] h-full md:h-[325px] p-4 bg-white border-[1px] border-[#DEE2E7] rounded-lg">
            <header className="flex gap-4 pb-6  border-b-[1px] border-[#DEE2E7]">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#C6F3F1] text-[rgba(76, 167, 167, 0.60)] text-2xl font-semibold">
                R
              </div>
              <div>
                <h2>Supplier</h2>
                <h2>Guanjoi Trading LLC</h2>
              </div>
            </header>

            <div className="md:border-b-[1px] border-[#BDC1C8] pb-4 md:block flex gap-3">
              <div className="flex gap-2 py-2 items-center">
                <div className=" text-[#8B96A5]">
                  <MdOutlineVerifiedUser className="text-xl" />
                </div>
                <div className=" text-[#505050]">Verified</div>
              </div>
              <div className="flex gap-2 py-2 items-center">
                <div className=" text-[#8B96A5]">
                  <TbWorld className="text-xl" />
                </div>
                <div className=" text-[#505050]">shipping</div>
              </div>
            </div>

            <div className="my-3 hidden md:block">
              <Button className="bg-[#127FFF] text-lg font-semibold w-full">
                Send inquiry
              </Button>
              <Button
                variant="outline"
                className="text-[#127FFF] text-lg font-semibold my-3 w-full"
              >
                Seller’s profile
              </Button>
            </div>
          </div>

          <div className="hidden text-[#127FFF] text-lg font-semibold md:flex gap-3 items-center justify-center my-3">
            <CiHeart className="text-2xl" /> <span>Save for later</span>
          </div>
        </div>
        {/* /proudct information  */}
      </figure>
    </section>
  );
}
