[1mdiff --git a/src/Component/Cart/SingleProduct.jsx b/src/Component/Cart/SingleProduct.jsx[m
[1mindex 642e4e9..3d18f8a 100644[m
[1m--- a/src/Component/Cart/SingleProduct.jsx[m
[1m+++ b/src/Component/Cart/SingleProduct.jsx[m
[36m@@ -1,9 +1,12 @@[m
[31m-import React from "react";[m
[32m+[m[32mimport React, { useEffect } from "react";[m
 import { AiOutlineCloseCircle } from "react-icons/ai";[m
 [m
 export default function SingleProduct({data}) {[m
[32m+[m[32m  // const{id , title , price, thumbnail }=data;[m
[32m+[m[32m  // useEffect(function (){[m
[32m+[m[41m    [m
[32m+[m[32m  // },[DeleteItem])[m
 [m
[31m-  const{id , title , price, thumbnail }=data;[m
 [m
   [m
   let localdata= JSON.parse(localStorage.getItem('my-cart'));[m
[36m@@ -20,7 +23,7 @@[m [mexport default function SingleProduct({data}) {[m
     <>[m
       <div className=" text-gray-600 font-bold xl:hidden bg-white">[m
         <div className="flex justify-end border-2 border-b-0 p-2">[m
[31m-          <AiOutlineCloseCircle className="text-3xl " />[m
[32m+[m[32m          <AiOutlineCloseCircle className="text-3xl hover:text-red-500 hover:cursor-pointer" onClick={DeleteItem} />[m
         </div>[m
         <div className="flex justify-center border-2 border-b-0 p-2 sm:hidden">[m
           <img[m
