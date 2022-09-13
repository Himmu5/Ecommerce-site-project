import React from "react";

export default function NewCard() {
  return (
    <div className="p-3 space-y-5 sm:space-y-0 sm:flex sm:gap-10 bg-white sm:p-16 sm:h-1/2 overflow-hidden sm:mt-10 sm:mb-10">
      <div className="aspect-square sm:h-[500px]">
        <img
          src="https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="text-gray-700 space-y-5 sm:w-1/2">
        <p className="text-sm">Home / Mugs / Black Printed Coffee Mug</p>
        <h1 className="text-4xl font-bold ">Black Printed Coffee Mug</h1>
        <p className="text-xl font-bold text-gray-700">$15.00</p>
        <p>
          Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
          consectetur adipisci velit, sed quia non incidunt lores ta porro ame.
          numquam eius modi tempora incidunt lores ta porro ame.
        </p>
        <div className="space-x-3">
          <input
            placeholder="1"
            type="number"
            min={1}
            className="border border-gray-500 rounded-md pt-1 pb-1 w-10 pl-1"
          />
          <button className="pl-5 pr-5 pt-1 pb-1 bg-red-500 text-white rounded-md">
            ADD TO CART
          </button>
        </div>
        <p>
          Category : <span className="text-red-400">Mugs</span>
        </p>
      </div>
    </div>
  );
}
