import React, { memo, useState, useEffect } from "react";
import ProductList from "./ProductList";
import SearchNotFound from "../SearchNotFound";
import Loading from "../Cards/Loading";
import { getProductByIds } from "../Api";
import { withCart } from "../WithProvider";
import CartTotalP from "./CartTotal";

function Cart() {
  // if (loading) {
  //   return <Loading />
  // }

  return (
    <>
      <div className="max-w-5xl mx-auto font-bold text-gray-500 bg-white p-3 mt-10 mb-10 xl:p-10 shadow-xl">
        <ProductList />
        <CartTotalP />
      </div>
    </>
  );
}

export default withCart(memo(Cart));
