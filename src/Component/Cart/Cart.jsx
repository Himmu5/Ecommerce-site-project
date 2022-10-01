import React, { memo, useState, useEffect } from "react";
import ProductList from "./ProductList";
import CartTotal from "./CartTotal";
import { SingleProduct } from "../Api";
import SearchNotFound from "../SearchNotFound";
import Loading from "../Cards/Loading";

function Cart({ productData, UpdateCart }) {
  const [loading , setloading]=useState(true);
  const [response, setResponse] = useState([]);

  let keys = Object.keys(productData);

  let promises = [];
  useEffect(
    function () {
      promises = keys.map(function (key) {
        return SingleProduct(key);
      });
      Promise.all(promises).then(function (result) {
        
        setResponse(result);
        setloading(false)

      });
    },
    [productData]
  );

  console.log("P data ", productData.length);

  return  response.length>0 ?(
    <>
      <div className="max-w-5xl mx-auto font-bold text-gray-500 bg-white p-3 mt-10 mb-10 xl:p-10 shadow-xl">
        
        <ProductList
          response={response}
          productData={productData}
          UpdateCart={UpdateCart}
        />
        <CartTotal />
      </div>
     
    </>
  ): (loading ? <Loading />:<SearchNotFound />)
}
export default memo(Cart);
