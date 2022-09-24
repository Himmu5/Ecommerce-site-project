import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillXCircleFill } from "react-icons/bs";
import HamMenu from "../Hamburgur/HamMenu";
import { memo } from "react";

function Nav({ total }) {
  // let cartvalue= localStorage.getItem("my-cart") || "{}";
  // console.log('ye data local storage se aaya hai', cartvalue);
  // cartvalue= JSON.parse(cartvalue);
  // // console.log( cartvalue);
  // cartvalue= Object.keys(cartvalue).reduce((output , current)=>{
  //   return output + cartvalue[current];
  // } , 0)
  // console.log(CartTotal);

  const [hamtoggle, sethamtoggle] = useState(false);

  function hamClick() {
    if (hamtoggle == false) {
      sethamtoggle(true);
    } else {
      sethamtoggle(false);
    }
  }

  return (
    <div>
      <div className=" bg-white pt-6 pb-6  pl-3 pr-3 shadow-md ">
        <div className="flex justify-between items-center  max-w-6xl mx-auto">
          <Link to="/">
            <img
              src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"
              alt=""
            />
          </Link>
          <div className="flex  items-center space-x-3">
            <div className="hidden md:block duration-500">
              <div className=" flex space-x-6">
                <p>HOME</p>
                <p>ALL PRODUCTS</p>
                <p>ABOUT</p>
                <p>CONTACT</p>
                <Link to={"component/validation/SignIn"}>ACCOUNT</Link>
              </div>
            </div>
            <Link
              to="/component/Cart/Cart"
              className="hover:bg-white hover:text-red-500"
            >
              <span className="absolute ml-8 pl-1 pr-1 text-white bg-red-400 rounded-xl self-end  hover:bg-white hover:text-red-500">
                {total}
              </span>
              <BiCart className="text-5xl " />
            </Link>
            {hamtoggle && (
              <BsFillXCircleFill
                className="text-4xl  text-red-500  sm:hidden hover:cursor-pointer"
                onClick={hamClick}
              />
            )}
            {!hamtoggle && (
              <GiHamburgerMenu
                className="text-4xl bg-red-500 text-white pl-1 pr-1 pt-1 pb-1 sm:hidden duration-500 hover:cursor-pointer"
                onClick={hamClick}
              />
            )}
          </div>
        </div>
      </div>
      {hamtoggle && <HamMenu />}
    </div>
  );
}

export default memo(Nav);
