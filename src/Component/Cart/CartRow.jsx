import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function ProductCart() {
  return (
    <div className="border-2 border-t-0 ">

      <table>
        <tr className=" flex space-x-24 items-center p-2 ">
          <th>
            <AiOutlineCloseCircle className="text-3xl hover:text-red-500 hover:cursor-pointer" />
          </th>
          <th>
            <img
              src="https://trycasuals.com/wp-content/uploads/2018/06/tshirt5-4.jpg"
              className="h-20 w-20 aspect-square object-cover"
              alt=""
            />
          </th>
          <th>
            <p className="text-red-500">Printed Green Tshirt</p>
          </th>
          <th>
            <p>$28.00</p>
          </th>
          <th>
            <input
              type="number"
              className=" w-10 border-2 pl-1 pr-1 pt-1 pb-1"
              value={1}
            />
          </th>
          <th><p>$28.00</p></th>
        </tr>
      </table>
    </div>
  );
}
