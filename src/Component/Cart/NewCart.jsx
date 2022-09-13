import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function NewCart() {
  return (
    <>
      <table className="flex flex-col items-center space-y-5 sm:justify-center sm:space-x-10 mt-20 mb-20  bg-white pt-10 pb-10">
        <tr className="flex justify-end w-full border-2 border-b-0"> 
        <AiOutlineCloseCircle className='text-3xl '/>
        </tr>
        <tr className="flex justify-between w-full border-2 border-b-0 pl-3 pr-3  pt-3">
            <p>Product:</p>
            <p>Coffee Mug</p>
        </tr>
        <tr className="flex justify-between w-full border-2 border-b-0 pl-3 pr-3  pt-3">
            <p>Price:</p>
            <p>$14.00</p>
        </tr>
        <tr className="flex justify-between w-full border-2 border-b-0 pl-3 pr-3  pt-3">
            <p>Quantity:</p>
            <input type="text" className="w-16 border-2 " />
        </tr>
        <tr className="flex justify-between w-full border-2 border-b-0 pl-3 pr-3  pt-3">
            <p>Subtotal</p>
            <p>$14.00</p>
        </tr>
      </table>
    </>
  );
}

{
  /* <div className=' sm: p-4 bg-white mt-10  sm:flex sm:justify-center space-x-10'>
<div className='flex justify-end border-2 border-b-0 pt-2 pb-2'>
<AiOutlineCloseCircle className='text-3xl'/>
</div>
<div className='flex sm:flex-col justify-between  pt-2 pb-2 border-2 border-b-0'>
    <p className='sm:hidden'>Product:</p>
    <p>Coffee Mug</p>
</div >
<div className='flex justify-between pt-2 pb-2 border-2 border-b-0'>
    <p className='sm:hidden'>Price:</p>
    <p>$15.00</p>
</div >
<div className='flex justify-between pt-2 pb-2 border-2 border-b-0' >
    <p className='sm:hidden'>Quantity:</p>
    <input type="number" className='w-16 border border-gray-700 pt-1 pb-1 pl-2 pr-2 h-10' value={1} />
</div>
<div className='flex justify-between pt-2 pb-2 border-2'>
    <p className='sm:hidden'>Subtotal:</p>
    <p>$15.00</p>
</div>        

</div>

<div className=' p-4 bg-white  mb-10 sm:flex sm:justify-center '>
<div className='flex justify-end sm:justify-start border-2 border-b-0 pt-2 pb-2'>
<AiOutlineCloseCircle className='text-3xl'/>
</div>
<div className='flex sm:flex-col justify-between  pt-2 pb-2 border-2 border-b-0'>
    <p className='sm:hidden'>Product:</p>
    <p>Coffee Mug</p>
</div >
<div className='flex justify-between pt-2 pb-2 border-2 border-b-0'>
    <p className='sm:hidden'>Price:</p>
    <p>$15.00</p>
</div >
<div className='flex justify-between pt-2 pb-2 border-2 border-b-0' >
    <p className='sm:hidden'>Quantity:</p>
    <input type="number" className='w-16 border border-gray-700 pt-1 pb-1 pl-2 pr-2 h-10' value={1} />
</div>
<div className='flex justify-between pt-2 pb-2 border-2'>
    <p className='sm:hidden'>Subtotal:</p>
    <p>$15.00</p>
</div>        

</div> */
}
