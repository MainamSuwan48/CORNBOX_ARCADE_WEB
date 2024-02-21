
import { useProduct } from '../contexts/ProductContext'
import OrderItem from './OrderItem'

function OrderItemList({orderItems}) {
  const {products} = useProduct()
  console.log(products, 'products in order item list')
  console.log(orderItems, 'order items in order item list')
  return (
    <div className='flex flex-col bg-primary p-2 mt-2'>
      {/* {orderItems.map((orderItem) => {
        const product = products.find(product => product.id === orderItem.productId)
        return <OrderItem key={orderItem.id} orderItem={orderItem} product={product} />
      })} */}
    </div>
  )
}

export default OrderItemList