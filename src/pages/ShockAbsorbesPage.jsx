import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { AiOutlineBars } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";

import { Checkbox } from "@/components/ui/checkbox";

import { MdWindow } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import FiltersView1 from "@/components/ShockAbsorbesComponents/FiltersView1";
import RecommendedAlso from "@/components/ShockAbsorbesComponents/RecommendedAlso";

import { Listbox } from "@headlessui/react";

const data = [
  {
    id: "1",
    name: {
      category: "Brakes",
      cars: "Chevrolet Tico",
      otherProducts: "Metallic",
    },
  },
  {
    id: "2",
    name: {
      category: "Muffler",
      cars: "Chevrolet Matiz",
      otherProducts: "Plastic cover",
    },
  },
  {
    id: "3",
    name: {
      category: "Stearing Gear",
      cars: "Chevrolet Cobalt",
      otherProducts: "Automatic",
    },
  },
  {
    id: "4",
    name: {
      category: "Transmission",
      cars: "Chevrolet Damas",
      otherProducts: "Mexanic",
    },
  },
  {
    id: "5",
    name: {
      category: "Gears",
      cars: "Chevrolet Gentra",
      otherProducts: "Plastic",
    },
  },
];

const people = [
  { id: 1, name: "Newest", unavailable: false },
  { id: 2, name: "Datetime", unavailable: false },
  { id: 3, name: "Cost", unavailable: false },
];
const featured = [
  { id: 1, name: "Featured", unavailable: false },
  { id: 2, name: "Smartphones", unavailable: false },
  { id: 3, name: "Automobils", unavailable: false },
];

export default function ShockAbsorbesPage() {
  // active class
  const [activeFilterBtn, setActiveFilterBtn] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [selectedFeatured, setSelectedFeatured] = useState(featured[0]);
  const [filteredData, setFilteredData] = useState([]);

  // function for add filter data
  const addFilterData = (data) => {
    if (!filteredData.includes(data)) {
      setFilteredData([...filteredData, data]);
    }
  };

  // remove filter data
  const removeFilterData = (data) => {
    if (filteredData.includes(data)) {
      setFilteredData(filteredData.filter((item) => item !== data));
    }
  };

  // dropdown menu
  return (
    <div className=" md:container lg:px-12 px-[15px]">
      {/* space header */}
      <div className="w-full h-1 mb-4"></div>
      <div>
        <header className="hidden text-[#8B96A5] md:flex flex-wrap gap-3 md:py-4 py-2 ">
          <Link to="/homepage" className="flex items-center gap-2">
            Home <FaAngleRight />
          </Link>
          <Link to="/homepage" className="flex items-center gap-2">
            Shock Absorbes <FaAngleRight />
          </Link>
          <Link to="/homepage" className="flex items-center gap-2">
            Gears <FaAngleRight />
          </Link>
          <Link to="/homepage" className="flex items-center gap-2">
            Auto gears <FaAngleRight />
          </Link>
        </header>

        <div className="grid grid-cols-4 grid-rows-1 gap-6">
          <figure className="hidden lg:block">
            <div className=" border-t-[1px] border-[#DEE2E7]">
              <Accordion collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className=" hover:text-decoration-none">
                    Category
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col text-base gap-4">
                    {data.map((category, index) => {
                      const isSelected = filteredData.includes(category.name.category);
                      return (
                        <div className={ isSelected ? `bg-indigo-50 rounded-md` : null} key={index} onClick={() => addFilterData(category.name.category)}>
                          {category.name.category}
                        </div>
                      );
                    })}
                    <Link to="#" className=" text-indigo-500">
                      Sea all
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Cars */}
            <div className=" border-t-[1px] border-[#DEE2E7]">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-2">
                  <AccordionTrigger className=" hover:text-decoration-none">
                    Cars
                  </AccordionTrigger>
                    <AccordionContent className="flex flex-col text-base gap-4">
                      {data.map((cars, index) => {
                        const isChecked = filteredData.includes(cars.name.cars);
                        return (
                          <div
                            key={index}
                            className="flex items-center space-x-2 select-none"
                            onClick={(event) => {
                              event.stopPropagation(); // Prevent event from bubbling up
                              if (isChecked) {
                                removeFilterData(cars.name.cars);
                              } else {
                                addFilterData(cars.name.cars);
                              }
                            }}
                          >
                            <Checkbox id={cars.name.cars} checked={isChecked}/>
                            <label
                              htmlFor={cars.name.cars}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {cars.name.cars}
                            </label>
                          </div>
                        );
                      })}

                      <Link to="#" className=" text-indigo-500">
                        Sea all
                      </Link>
                    </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Other Products */}
            <div className=" border-t-[1px] border-[#DEE2E7]">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-3">
                  <AccordionTrigger className=" hover:text-decoration-none">
                    Other Products
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col text-base gap-4">
                    {data.map((otherProducts, index) => {
                      const isChecked = filteredData.includes(otherProducts.name.otherProducts);

                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-2 select-none"
                          onClick={(event) => {
                            event.stopPropagation(); // Prevent event from bubbling up
                            if (isChecked) {
                              removeFilterData(otherProducts.name.otherProducts);
                            } else {
                              addFilterData(otherProducts.name.otherProducts);
                            }
                          }}
                        >
                          <Checkbox id={otherProducts.name.otherProducts} checked={isChecked} />
                          <label
                            htmlFor={otherProducts.name.otherProducts}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {otherProducts.name.otherProducts}
                          </label>
                        </div>
                      );
                    })}
                    <Link to="#" className=" text-indigo-500">
                      Sea all
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </figure>
          <figure className="col-span-4 lg:col-span-3 mb-3">
            <header className="bg-white p-3 rounded-md flex justify-between items-center border-[1px] border-[#DEE2E7] px-2">
              <div className="hidden lg:block">
                12,911 items in{" "}
                <span className="font-semibold">Mobile accessory</span>
              </div>
              {/* Responsive filters after lg */}
              <div className="gap-3 lg:hidden">
                <div className="flex items-center border-2 px-2 rounded">
                  <h2 className="hidden md:block">Sort by:</h2>
                  <div className=" bg-white z-30">
                    <Listbox
                      value={selectedPerson}
                      onChange={setSelectedPerson}
                    >
                      <Listbox.Button className="p-1 select-none flex justify-around items-center gap-1">
                        {selectedPerson.name} <AiOutlineBars />
                      </Listbox.Button>
                      <Listbox.Options className="absolute mt-2 select-none text-[16px] rounded-md px-3 bg-white py-2 shadow-lg p-2">
                        {people.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            value={person}
                            disabled={person.unavailable}
                            className="active:bg-slate-100 my-1"
                          >
                            {person.name}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Listbox>
                  </div>
                </div>
              </div>
              {/* /Responsive filters after lg */}
              <div className="flex justify-between items-center space-x-2">
                <Checkbox className="hidden lg:block" id="verified" />
                <label
                  htmlFor="verified"
                  className="hidden lg:block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Verified only
                </label>
                {/* Dropdown */}
                <div className="flex items-center border-2 px-2 rounded">
                  <h2 className="hidden md:block">Sort by:</h2>
                  <div className=" bg-white z-30 select-none">
                    <Listbox
                      value={selectedFeatured}
                      onChange={setSelectedFeatured}
                    >
                      <Listbox.Button className="p-1 flex justify-around items-center gap-1">
                        {selectedFeatured.name} <FaFilter />
                      </Listbox.Button>
                      <Listbox.Options className="absolute W-32 mt-2 text-[16px] rounded-md px-3 bg-white py-2 shadow-lg p-2">
                        {featured.map((featured) => (
                          <Listbox.Option
                            key={featured.id}
                            value={featured}
                            disabled={featured.unavailable}
                            className="active:bg-slate-100 my-1"
                          >
                            {featured.name}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Listbox>
                  </div>
                </div>
                {/* /Dropdown */}

                <div className=" rounded-md flex gap-2 border-[1px] border-slate-200">
                  <div
                    onClick={() => {setActiveFilterBtn((prev) => !prev)}}
                    className={`py-2 pl-2 pr-1 ${
                      activeFilterBtn ? `bg-[#EFF2F4]` : ``
                    } `}
                  >
                    <MdWindow className="text-2xl active:scale-[1.1]" />
                  </div>
                  <div
                    onClick={() => setActiveFilterBtn((prev) => !prev)}
                    className={`py-2 pl-1 pr-2 ${
                      !activeFilterBtn ? `bg-[#EFF2F4]` : ``
                    } `}
                  >
                    <FaBars className="text-2xl active:scale-[1.1]" />
                  </div>
                </div>
              </div>
            </header>

            {/* Filtered buttons */}
            <div className=" flex gap-2 flex-wrap my-4">
              {filteredData.map((items, index) => {
                return (
                  <button key={index} className="flex gap-1 p-1 h-[25px] text-sm items-center border-[2px] border-indigo-400 rounded-md max-w-[200px]">
                    <span>{items}</span>
                    <IoMdClose onClick={() => removeFilterData(items)} className="relative text-lg top-[1px] z-10" />
                  </button>
                );
              })}
              {filteredData.length > 0 && <button onClick={() => setFilteredData([])} className="text-indigo-400 bg-none ">
                Clear all filter
              </button>}

            </div>
            {/* /Filtered buttons */}

            {/* Gears */}
            <div>
               <FiltersView1 activeFilterBtn={activeFilterBtn}/>
            </div>

            {/* You may also like */}
            <div className="block lg:hidden">
              <RecommendedAlso />
            </div>
            {/* /You may also like */}
            {/* /Gears */}
          </figure>
        </div>
      </div>
    </div>
  );
}
