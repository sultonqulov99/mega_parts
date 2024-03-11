import { rpart1, rpart2, rpart3, rpart4 } from "@/assets/images/z-index";

import ProductItems1 from "./ProductItems1";
import { useState } from "react";
import { PaginationDemo } from "./ProductsPagination";
import ProductItems2 from "./ProductItems2";

const filteredData1 = [
  {
    id: 1,
    img: rpart1,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 2,
    img: rpart2,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 3,
    img: rpart3,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 4,
    img: rpart4,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 5,
    img: rpart1,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 6,
    img: rpart2,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 32,
    img: rpart2,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 13,
    img: rpart3,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 14,
    img: rpart4,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 51,
    img: rpart1,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 61,
    img: rpart2,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 6,
    img: rpart2,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 32,
    img: rpart2,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 13,
    img: rpart3,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 14,
    img: rpart4,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 51,
    img: rpart1,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
  {
    id: 61,
    img: rpart2,
    desc: "lorem ispum dolor sit amet ispum dolor sit amet ispum dolor sit amet",
    title: "Shock Absorber Front Chevrolet Cobalt - 7166 - 7167",
  },
];

export default function FiltersView1({ activeFilterBtn }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Calculate the index of the first and last items to display on the current page
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = filteredData1.slice(firstIndex, lastIndex);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {!activeFilterBtn ? (
        <div className="w-full h-full flex flex-col gap-1 pb-3">
          {currentItems.map((element, index) => (
            <ProductItems1 key={index} element={element} index={index} />
          ))}

          <div className="w-full flex justify-end gap-4">
            <PaginationDemo
              setItemsPerPage={setItemsPerPage}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={filteredData1.length}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="grid sm:grid-cols-3 grid-cols-2 my-4 gap-3 md:gap-5 h-full">
            {currentItems.map((element, index) => {
              return <ProductItems2 element={element} index={index} />;
            })}

          </div>
            <div className="w-full flex justify-end gap-4">
              <PaginationDemo
                setItemsPerPage={setItemsPerPage}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={filteredData1.length}
                onPageChange={handlePageChange}
              />
            </div>
        </div>
      )}
    </div>
  );
}
