import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CartRow from "./CartRow";
import {SingleProduct} from '../Api'



export default function CartList({productList}) {

  let data=JSON.parse(localStorage.getItem('my-cart'));
  console.log( data,'from local storage');
  let Productkey=Object.keys(data);
  // console.log(Productkey);




  
  let promises=Object.keys(productList).map(function (productId){
    return SingleProduct(productId);
  });

  Promise.all(promises).then((response)=>console.log(response));


  return (
    <div className=" flex flex-col justify-center max-w-6xl mx-auto pt-16 pb-10  mt-16 mb-20 items-center bg-white ">
      {/*     
    
    <ProductCart /> */}

      <table className="">
        <tr className=" flex justify-end  border-2 bg-gray-100">
          <th className="pt-3 pb-3">Product</th>
          <th className="ml-44 pt-3 pb-3">Price</th>
          <th className="ml-20 pt-3 pb-3 ">Quantity</th>
          <th className="ml-20 pt-3 pb-3">Subtotal</th>
        </tr>
        <tr>


          <CartRow  productList={productList}/>


        </tr>
        <tr className="flex justify-between border-2 border-t-0 p-3 ">
          <div className="space-x-4 ">
            <input
              type="text"
              placeholder="Coupon code"
              className="border-2 pl-3 pr-3 pt-1 pb-1 "
            />
            <button className="pl-3 pr-3 pt-1 pb-1 bg-red-500 text-white rounded-md hover:bg-red-600 ">
              APPLY COUPON
            </button>
          </div>

          <button className="pl-6 pr-6 pt-2 pb-2 bg-red-300 rounded-md hover:bg-gray-300 cursor-not-allowed">
            UPDATE CART
          </button>
        </tr>

        <div className="flex font-bold justify-between ">


          <div className="grow"></div>

          <div className=" flex flex-col border-2 p-3 pt-5 pb-5 pr-40 space-y-4 mt-4">
            <div className="">
            
            <h1 className="text-2xl">Cart totals</h1>
            </div>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>$43.00</p>
              <p></p>
            </div>

            <div className="flex justify-between ">
              <p>Total</p>
              <p>$43.00</p>
              <p></p>
            </div>
            <div className="pr-0">

            <button className="pl-10 pr-10 pt-3 pb-3 bg-red-500 text-white rounded-md">
              PROCEED TO CHECKOUT
            </button>
            </div>
          </div>
        </div>
      </table>
    </div>
  );
}
