import React, { memo, useContext } from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../App'

function HamMenu({setUser , user }) {
 
   function LogOut(){
    setUser(undefined);
    localStorage.removeItem('token');
   }
    
  return (
    <div className="border-2 sm:hidden  bg-white">
        <div className='pl-3 pt-1 pb-1  duration-500 border-b-2 hover:text-red-500'>User : {user.full_name}</div>
        <div className='pl-3 pt-1 pb-1  duration-500 border-b-2 hover:text-red-500'>
            Home
        </div>
        <div className='border-b-2 pl-3 pt-1 pb-1  duration-500 hover:text-red-500'>
            ALL PRODUCTS
        </div>
        <div className='border-b-2 pl-3 pt-1 pb-1  duration-500 hover:text-red-500'>
            ABOUT
        </div>
        <div  className="border-b-2 pl-3 pt-1 pb-1  duration-500 hover:text-red-500">
            CONTACT
        </div>
        <Link to="/component/validation/SignIn" className='pl-3  duration-500 pt-1 pb-1 hover:text-red-500'>
            ACCOUNT
        </Link>
        {
            user && <p className='border-t-2 pl-3 pt-1 pb-1 hover:text-red-500 hover:cursor-pointer' onClick={LogOut}>Log Out</p>
        }
    </div>
  )
}


export default memo(HamMenu);