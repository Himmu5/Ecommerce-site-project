import React, { memo } from 'react'

function HamMenu() {
  return (
    <div className="border-2 sm:hidden  bg-white">
        <div className='pl-3 pt-1 pb-1  border-b-2 hover:text-red-500'>
            Home
        </div>
        <div className='border-b-2 pl-3 pt-1 pb-1 hover:text-red-500'>
            ALL PRODUCTS
        </div>
        <div className='border-b-2 pl-3 pt-1 pb-1 hover:text-red-500'>
            ABOUT
        </div>
        <div className="border-b-2 pl-3 pt-1 pb-1 hover:text-red-500">
            CONTACT
        </div>
        <div className='pl-3 pt-1 pb-1 hover:text-red-500'>
            ACCOUNT
        </div>
    </div>
  )
}


export default memo(HamMenu);