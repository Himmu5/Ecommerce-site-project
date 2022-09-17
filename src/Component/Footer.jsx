import React from 'react'
import { memo } from 'react'
import { MemoryRouter } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-gray-700 text-white pt-5 pb-5'>
    <div className='max-w-6xl mx-auto  sm:flex justify-between'>
        <p>Copyright © 2022 | Himanshu</p>
        <p>Powered By Himanshu </p>
    </div>
    </div>
  )
}

export default memo(Footer);