import React, { memo } from 'react'

 function buttonNumber({value}) {
  return (
    <div>
        <button className="pl-3 pr-3 pt-1 pb-1 bg-red-400 hover:bg-white hover:text-red-400 text-white ">{value}</button>
    </div>
  )

}

export default memo(buttonNumber);
