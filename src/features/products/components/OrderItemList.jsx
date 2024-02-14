import React from 'react'
import OrderItem from './OrderItem'

function OrderItemList() {
  return (
    <div className='flex flex-col bg-primary p-2 mt-2'>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
    </div>
  )
}

export default OrderItemList