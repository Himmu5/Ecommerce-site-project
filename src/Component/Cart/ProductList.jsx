import React, { useEffect } from "react";
import SingleProducts from "./SingleProduct";
import { SingleProduct } from "../Api";
import { useState } from "react";

export default function ProductList({ productData }) {
  // const[promises ,setpromises]=useState([]);

  // console.log(localdata);


  const [response, setResponse] = useState([]);
  console.log("Prop Drilling Done", productData);

  let keys = Object.keys(productData);

  // console.log('key hai isme',productData);

  let promises = [];
  useEffect(function () {
    promises = keys.map(function (key) {
      return SingleProduct(key);
    });

    Promise.all(promises).then(function (response) {
      setResponse(response);
    });
  },[]);

  return (
    <div className=" border-2 max-w-5xl mx-auto bg-white ">
      <div className="hidden xl:block">
        <div className="border-b-2 flex space-x-10 justify-between items-center  pt-2 pb-2 pl-4 pr-4 bg-gray-100 text-gray-500 font-bold">
          <div className="flex justify-between w-1/2">
            <div></div>
            <div></div>
            <p className="mr-40">Product</p>
          </div>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
      </div>

      {response.map(function (item) {
        return <SingleProducts data={item.data} />;
      })}

    </div>
  );
}
