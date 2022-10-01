import React, { memo, useState, useEffect } from "react";
import ProductList from "./ProductList";
import CartTotal from "./CartTotal";
import { SingleProduct } from "../Api";
import SearchNotFound from "../SearchNotFound";

function Cart({ productData, UpdateCart }) {
  const [response, setResponse] = useState([]);

  let keys = Object.keys(productData);

  let promises = [];
  useEffect(
    function () {
      promises = keys.map(function (key) {
        return SingleProduct(key);
      });
      Promise.all(promises).then(function (result) {
        console.log(result);
        setResponse(result);
      });
    },
    [productData]
  );

  console.log("P data ", productData.length);

  return (
    <div className="max-w-5xl mx-auto font-bold text-gray-500 bg-white p-3 mt-10 mb-10 xl:p-10 shadow-xl">
      <ProductList
        response={response}
        productData={productData}
        UpdateCart={UpdateCart}
      />
      <CartTotal />
    </div>
  );
}
export default memo(Cart);
