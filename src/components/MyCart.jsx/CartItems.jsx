import React, { useState } from "react";

import Cart from "./Cart";

export default function CartItems({ setSelectedProducts, selectedProducts }) {


  const handleRemoveProducts = (id) => {
    const newSelectedProducts = selectedProducts.filter(
      (product) => product.id !== id
    );
    setSelectedProducts(newSelectedProducts);
  };

  return (
    <section>
      {selectedProducts.map((element) => {
        return (
          <Cart
            element={element}
            handleRemoveProducts={handleRemoveProducts}
          />
        );
      })}
    </section>
  );
}
