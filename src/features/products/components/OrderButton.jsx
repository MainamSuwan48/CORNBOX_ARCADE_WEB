import React from 'react'

function OrderButton({onClick,active,children}) {
  return (
    <div
    onClick={onClick}
    className={`flex-1 transition-all duration-300 px-4 py-1 text-1xl text-primary border-2 ${
      active === children
        ? "border-secondary"
        : "border-t-transparent border-l-transparent border-r-transparent"
    }    hover:border-primary hover:scale-95`}
  >
    {children}
  </div>
  )
}

export default OrderButton