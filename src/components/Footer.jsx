import { megapartsLogo, appstore, googleplay } from "../assets/images/z-index";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function calculatescreenColWidth(screenWidth) {
  let screenColWidth;
  if (screenWidth >= 768) {
    screenColWidth = true;
  } else {
    screenColWidth = false;
  }
  return screenColWidth;
}

export default function Footer() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const screenColWidth = calculatescreenColWidth(screenWidth);

  let profilePath =
    location.pathname == "/homepage/profile/" ||
    location.pathname == "/homepage/profile";

  let ordersPath =
    location.pathname == "/homepage/orders/" ||
    location.pathname == "/homepage/orders";

  let mycartPath =
    location.pathname == "/homepage/mycart/" ||
    location.pathname == "/homepage/mycart";

  let isTrue = profilePath || ordersPath || mycartPath;
  console.log("IStrue:", !isTrue);

  return (
    <>
      {
        <div className={isTrue && !screenColWidth ? `hidden` : `block`}>
          <div className="min-h-[324px] w-full bg-white z-50">
            <div className=" md:container lg:px-12 px-[15px] py-[41px] flex flex-col gap-12 flex-wrap md:flex-row ">
              {/* main logo */}
              <div className="w-[276px]">
                <Link to="/homepage">
                  <img src={megapartsLogo} alt="megaparts logo" />
                </Link>
                <p className="mt-[44px] mb-6 text-[#505050]">
                  Best information about the company gies here but now lorem
                  ipsum is
                </p>
                {/* social logos  */}
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="h-8 w-8 hover:bg-indigo-500 bg-[#BDC4CD] rounded-full flex items-center justify-center"
                  >
                    <FaFacebook className="text-white text-xl" />
                  </a>
                  <a
                    href="#"
                    className="h-8 w-8 hover:bg-indigo-500 bg-[#BDC4CD] rounded-full flex items-center justify-center"
                  >
                    <FaTwitter className="text-white text-xl" />
                  </a>
                  <a
                    href="#"
                    className="h-8 w-8 hover:bg-indigo-500 bg-[#BDC4CD] rounded-full flex items-center justify-center"
                  >
                    <FaLinkedin className="text-white text-xl" />
                  </a>
                  <a
                    href="#"
                    className="h-8 w-8 hover:bg-indigo-500 bg-[#BDC4CD] rounded-full flex items-center justify-center"
                  >
                    <LuInstagram className="text-white text-xl" />
                  </a>
                  <a
                    href="#"
                    className="h-8 w-8 hover:bg-indigo-500 bg-[#BDC4CD] rounded-full flex items-center justify-center"
                  >
                    <FaYoutube className="text-white text-xl" />
                  </a>
                </div>
              </div>
              {/* 2 */}
              <div className="flex flex-wrap  gap-8 sm:gap-16 sm:justify-between ">
                {/* About */}
                <div className="">
                  <h3 className=" font-medium mb-3">About</h3>
                  <div className="text-[#8B96A5] flex flex-col gap-1">
                    <a href="#">About Us</a>
                    <a href="#">Find store</a>
                    <a href="#">Categories</a>
                    <a href="/homepage/blogs">Blogs</a>
                  </div>
                </div>

                {/* Partnerships */}
                <div className="">
                  <h3 className=" font-medium mb-3">Partnerships</h3>
                  <div className="text-[#8B96A5] flex flex-col gap-1">
                    <a href="#">About Us</a>
                    <a href="#">Find store</a>
                    <a href="#">Categories</a>
                    <a href="#">Blogs</a>
                  </div>
                </div>

                {/* Information */}
                <div className="">
                  <h3 className=" font-medium mb-3">Information</h3>
                  <div className="text-[#8B96A5] flex flex-col gap-1">
                    <a href="#">Help Center</a>
                    <a href="#">Money Refund</a>
                    <a href="#">Shipping</a>
                    <a href="#">Contact Us</a>
                  </div>
                </div>

                {/* For users */}
                <div className="">
                  <h3 className=" font-medium mb-3">For users</h3>
                  <div className="text-[#8B96A5] flex flex-col gap-1">
                    <a href="#">Login</a>
                    <a href="#">Settings</a>
                    <a href="#">Register</a>
                    <a href="#">My orders</a>
                  </div>
                </div>

                {/* Get app */}
                <div>
                  <h3 className=" font-medium mb-3">Get app</h3>
                  <div className="text-[#8B96A5] flex flex-col gap-1">
                    <a href="https://www.apple.com/app-store/">
                      <img
                        className="rounded-md"
                        src={appstore}
                        alt="appstore logo"
                      />
                    </a>
                    <a href="https://play.google.com/store/games?hl=ru&gl=US">
                      <img
                        className="rounded-md"
                        src={googleplay}
                        alt="googleplay logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[68px] bg-[#EFF2F4]">
            {/* Second footer */}
            <div className="md:container lg:px-12 px-[15px] h-full flex items-center justify-between">
              <p>© IT LIVE 2024 All rights reserved. </p>
              <select className="hidden lg:block w-18 py-2 px-1 outline-none select-none rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                <option defaultChecked>
                  USD
                </option>
                <option>UZS</option>
                <option>EURO</option>
              </select>
            </div>
          </div>
        </div>
      }
    </>
  );
}
