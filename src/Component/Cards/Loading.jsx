import React from "react";
import {RiLoaderLine} from 'react-icons/ri'

export default function Loading() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen text-6xl  ">
      <div className="">

      <RiLoaderLine className="animate-spin"/>
      </div>
    </div>
  );
}
