import React from 'react'
import CartList from './CartList'

export default function CartPage({productList}) {

  // console.log("Yha aaya ya nhi ", productList);

  return (
    <div>
        <CartList productList={productList}/>
    </div>
  )
}
