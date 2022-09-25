import React, { memo } from 'react'
import {Link} from 'react-router-dom'


function HamMenu() {
  return (
    <div className="border-2 sm:hidden  transition transform duration-500 bg-white">
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
        <Link to="/component/validation/SignIn" className='pl-3 pt-1 pb-1 hover:text-red-500'>
            ACCOUNT
        </Link>
    </div>
  )
}


export default memo(HamMenu);