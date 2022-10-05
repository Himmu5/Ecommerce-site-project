import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from './App'

export default function UserRoute({children}) {
    const user=useContext(UserContext);
  
    if(!user){
      return <Navigate to={"/component/validation/SignIn"} />;
    }  

  return children;
}
