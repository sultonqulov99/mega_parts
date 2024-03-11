import { useState } from "react";
import { Button } from "../ui/button"

export default function Cart({element, handleRemoveProducts }) {
    const [price, setPrice] = useState(12);
    const [quantity, setQuantity] = useState(1);

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
    <div key={element.id} className="w-full my-2 hull flex flex-col md:flex-row justify-between border-b-[1px] pb-4 border-[#DEE2E7]">
            <div className="flex gap-4 md:w-2/3">
              <div className="min-w-[63px] h-[63px] md:w-20 md:h-20 bg-[#f7f7f7] rounded-md p-2 flex items-center justify-center border-[1px] border-[#DEE2E7]">
                <img className="w-full h-full" src={element.img} alt="img" />
              </div>

              <div>
                <h1 className="text-lg md:text-xl font-semibold">
                  {element.title}
                </h1>
                <p className="text-[#8B96A5] text-md">{element.desc}</p>
                <div className="md:flex gap-2 my-3 hidden">
                  <Button
                    onClick={() => handleRemoveProducts(element.id)}
                    variant="outline"
                    className="p-3 text-red-500 h-6  hover:bg-red-500 hover:text-white"
                  >
                    remove
                  </Button>
                  <Button
                    variant="outline"
                    className="p-3 text-blue-500 h-6 hover:bg-blue-500 hover:text-white "
                  >
                    Save for later
                  </Button>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="flex flex-row-reverse md:block items-center justify-between">
              <h2 className="font-semibold">{price * quantity}$</h2>
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
            </div>
          </div>
  )
}
