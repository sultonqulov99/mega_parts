import { megapartsLogo } from "../assets/images/z-index";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
// import { button } from "./ui/button";
import { IoMdSearch } from "react-icons/io";
import { DrawerOffcanvas } from "./ui-components/Offcanvas";
import { Link, useLocation } from "react-router-dom";

import { Button } from "./ui/button";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

import { Listbox } from "@headlessui/react";
const featured = [
  { id: 1, name: "usd", unavailable: false },
  { id: 2, name: "uzs", unavailable: false },
  { id: 3, name: "euro", unavailable: false },
];


function calculatescreenColWidth(screenWidth) {
  let screenColWidth;
  if (screenWidth >= 768) {
    screenColWidth = true;
  } else {
    screenColWidth = false;
  }
  return screenColWidth;
}

function calculateColumnCount(screenWidth) {
  let columnCount;
  if (screenWidth > 640) {
    columnCount = 3;
  } else {
    columnCount = 2.8;
  }
  return columnCount;
}

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();
  const [inputDropdown, setinputDropdown] = useState(false);
  const [secondaryDropdown, setsecondaryDropdown] = useState(false);
  const [selectedFeatured, setSelectedFeatured] = useState(featured[0]);

  // Mouse hoverda dropdownni ko'rsatish
  const handleInputMouseEnter = () => {
    setinputDropdown(true);
  };
  const handleInputMouseLeave = () => {
    setinputDropdown(false);
  };
  const handleInputClick = () => {
    setinputDropdown(!inputDropdown);
  };
  //  / Mouse hoverda
  // help hoverdown
  const handlesecondaryMouseEnter = () => {
    setsecondaryDropdown(true);
  };
  const handlesecondaryMouseLeave = () => {
    setsecondaryDropdown(false);
  };
  const handlesecondaryClick = () => {
    setinputDropdown(!secondaryDropdown);
  };
  // / help hoverdown

  // screen width for swipper
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // for swipper
  const columnCount = calculateColumnCount(screenWidth);

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

  let blogsPath =
    location.pathname == "/homepage/blogs/" ||
    location.pathname == "/homepage/blogs";

  let isTrue = profilePath || ordersPath || mycartPath || blogsPath;
  console.log("IStrue:", !isTrue);

  return (
    <>
      <div
        className={isTrue && !screenColWidth ? `hidden w-full` : `block w-full`}
      >
        <div className=" fixed top-0 bg-white z-40 w-full shadow-sm">
          <div className="md:container lg:px-12 px-[15px] flex justify-between items-center py-3">
            <div className="flex items-center md:gap-6 gap-2">
              <div className="block lg:hidden">
                <DrawerOffcanvas />
              </div>
              <Link to="/homepage">
                <img
                  src={megapartsLogo}
                  className="mr-3 w-[200px] "
                  alt="Flowbite React Logo"
                />
              </Link>{" "}
            </div>
            {/* Input */}
            {!isTrue && (
              <div className="hidden lg:block">
                <div className=" w-full max-h-[40px] border-2 pl-3 border-indigo-500 flex items-center justify-between rounded focus:p-0">
                  <input
                    className="min-w-[260px] border-none focus:outline-none h-[20px] rounded-none"
                    type="text"
                    placeholder="Search"
                  />
                  <div
                    className=" transition-all relative px-2 border-l-[2px] h-[37px] flex items-center justify-center border-indigo-500 select-none cursor-pointer"
                    onClick={handleInputClick}
                    onMouseEnter={handleInputMouseEnter}
                    onMouseLeave={handleInputMouseLeave}
                  >
                    All Category <IoMdArrowDropdown />
                    {/* Dropdown content */}
                    {inputDropdown && (
                      <div className=" border-t-[2px] border-indigo-500 absolute bg-white top-full shadow-md rounded w-full transition-all">
                        <div className="flex flex-col gap-2 p-3">
                          <Link
                            to="shock-absorbes"
                            className="group hover:text-sky-600 transition duration-300"
                          >
                            Absorbes
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                          </Link>
                          <Link
                            to="blogs"
                            className="group hover:text-sky-600 transition duration-300"
                          >
                            Blogs
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                          </Link>
                          <Link
                            to="#"
                            className="group hover:text-sky-600 transition duration-300"
                          >
                            Link 1
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                          </Link>
                          <Link
                            to="#"
                            className="group hover:text-sky-600 transition duration-300"
                          >
                            Link 1
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className=" bg-[#2563EB] w-[100px] rounded-none"
                  >
                    Search
                  </Button>
                </div>
              </div>
            )}
            {/* profile and other pages */}

            <div className="flex items-center justify-around gap-3 md:gap-4 text-[#8B96A5]">
              <a
                href="/homepage/profile"
                className="flex flex-col justify-center items-center gap-1 hover:text-indigo-500"
              >
                <FaUser />
                <p className="hidden lg:block text-[12px]">Profile</p>
              </a>
              <div className="hidden lg:block ">
                <a
                  href="/homepage/orders"
                  className="flex flex-col justify-center items-center gap-1 hover:text-indigo-500"
                >
                  <FaHeart />
                  <p className=" text-[12px]">My orders</p>
                </a>
              </div>
              <a
                href="/homepage/mycart"
                className="flex flex-col justify-center items-center gap-1 hover:text-indigo-500"
              >
                <FaShoppingCart />
                <p className="hidden lg:block text-[12px]">My cart</p>
              </a>
            </div>
          </div>

          {/* Input */}
          {!isTrue && (
            <div className="block lg:hidden md:container lg:px-12 px-[15px]">
              <form className="flex justify-start">
                <div className="flex w-full h-full sm:justify-between items-center gap-4 px-2 bg-white border-2 border-slate-400 focus:border-indigo-500 rounded-lg active:text-indigo-300">
                  <span className="text-2xl text-slate-400">
                    <IoMdSearch />
                  </span>{" "}
                  <input
                    className="h-10 w-full border-none focus:outline-none"
                    type="text"
                    name="search"
                    placeholder="Search..."
                  />
                </div>
                <Button className="hidden sm:block text-lg">Search</Button>
              </form>
            </div>
          )}

          {/* Secondary navbar using */}
          {!isTrue && (
            <div className="hidden sm:block border-y-[1px]">
              <div className="md:container lg:px-12 px-[15px] w-full py-2 flex items-center justify-between flex-wrap gap-x-3 ">
                <div className="flex items-center gap-x-3">
                  <Link className=" hidden lg:block">
                    <FaBars className="text-xl text-black" />
                  </Link>
                  <Link className="p-2 lg:hidden border-[1px] border-[#DEE2E7] h-8 flex items-center  ">
                    Catalog
                  </Link>
                  <Link to="">All Category</Link>
                  <Link to="shock-absorbes">Absorbes</Link>
                  <Link to="brake-discs">Discs</Link>
                  <Link to="blogs">Blogs</Link>
                  <div
                    className=" transition-all relative px-2 flex items-center justify-center border-indigo-500 select-none cursor-pointer"
                    onClick={handlesecondaryClick}
                    onMouseEnter={handlesecondaryMouseEnter}
                    onMouseLeave={handlesecondaryMouseLeave}
                  >
                    Help <IoMdArrowDropdown />
                    {/* Dropdown content */}
                    {secondaryDropdown && (
                      <div className=" border-t-[2px] absolute bg-white top-full shadow-md rounded w-28 transition-all">
                        <div className="flex flex-col gap-2 p-3">
                          <Link
                            to="shock-absorbes"
                            className="group hover:text-sky-600 transition duration-300"
                          >
                            Absorbes
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                          </Link>
                          <Link
                            to="blogs"
                            className="group hover:text-sky-600 transition duration-300"
                          >
                            Blogs
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                          </Link>
                          <Link
                            to="#"
                            className="group hover:text-sky-600 transition duration-300"
                          >
                            Link 1
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                          </Link>
                          <Link
                            to="#"
                            className="group hover:text-sky-600 transition duration-300"
                          >
                            Link 1
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex items-center px-2 bg-white">
                    <h2 className="hidden md:block">Eng:</h2>
                    <div className="  z-30">
                      <Listbox
                        value={selectedFeatured}
                        onChange={setSelectedFeatured}
                      >
                        <Listbox.Button className="p-1 flex justify-around items-center gap-1">
                          {selectedFeatured.name}
                        </Listbox.Button>
                        <Listbox.Options className="absolute W-32 mt-2 text-[16px] rounded-md px-3 bg-white py-2 shadow-lg p-2">
                          {featured.map((featured) => (
                            <Listbox.Option
                              key={featured.id}
                              value={featured}
                              disabled={featured.unavailable}
                            >
                              {featured.name}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pruducts */}
          {!isTrue && (
            <div className=" sm:hidden flex items-center py-2">
              <Swiper
                slidesPerView={4}
                spaceBetween={20}
                freeMode={true}
                pagination={false}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className="w-[120px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                  <Link
                    to="#"
                    className=" px-3 w-[120px] py-2 text-indigo-500 rounded-lg mx-3 active:text-indigo-300"
                  >
                    Ipods
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="w-[120px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                  <Link
                    to="#"
                    className=" px-3 w-[120px] py-2 text-indigo-500 rounded-lg mx-3 active:text-indigo-300"
                  >
                    Tablets
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="w-[120px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                  <Link
                    to="#"
                    className=" px-3 w-[120px] py-2 text-indigo-500 rounded-lg mx-3 active:text-indigo-300"
                  >
                    Acustics
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="w-[120px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                  <Link
                    to="shock-absorbes"
                    className=" px-3 w-[120px] py-2 text-indigo-500 rounded-lg mx-3 active:text-indigo-300"
                  >
                    Absorbes
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="w-[120px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                  <Link
                    to="#"
                    className=" px-3 w-[120px] py-2 text-indigo-500 rounded-lg mx-3 active:text-indigo-300"
                  >
                    Parts
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="w-[120px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                  <Link
                    to="#"
                    className=" px-3 w-[120px] py-2 text-indigo-500 rounded-lg mx-3 active:text-indigo-300"
                  >
                    Absorbes
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="w-[700px] bg-[#EFF2F4] flex items-center justify-center rounded-sm">
                </SwiperSlide>
              </Swiper>
            </div>
          )}
        </div>
        <div className="h-[40px] w-full"></div>
        {!isTrue && <div className=" h-[84px] lg:h-[58px] w-full"></div>}
      </div>
    </>
  );
}
