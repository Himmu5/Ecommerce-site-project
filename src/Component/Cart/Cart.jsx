import React, { memo } from "react";
import ProductList from "./ProductList";
import CartTotal from "./CartTotal";

function Cart({ productData}) {
  return (
    <div className="max-w-5xl mx-auto font-bold text-gray-500 bg-white p-3 mt-10 mb-10 xl:p-10">
      <ProductList  productData={ productData}/>

      <div className=" p-2 border-2 border-t-0 space-y-2 xl:space-y-0 xl:p-5 xl:flex xl:justify-between">
        <div className="space-x-3 flex justify-between xl:justify-start ">
          <input
            type="text"
            placeholder="Coupon code"
            className="pl-3 pr-3 pt-1 pb-1 border-2"
          />
          <button className="pl-4 pr-4 pt-1 pb-1 bg-red-500 text-white  rounded-md">
            APPLY COUPON
          </button>
        </div>
        <div className="flex justify-center bg-red-300 pt-2 pb-2 xl:pl-6 xl:pr-6 rounded-md hover:cursor-not-allowed">
          UPDATE CART
        </div>
      </div>


        <CartTotal />

    </div>
  );
}
export default memo(Cart);