import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Card from '../card/Card';
import { removeAllCart } from '../../store/slices/cart'


const Cart: React.FC = () => {
  const dispatch = useAppDispatch()

  const { items } = useAppSelector((state) => state.cart);

  const removeCart = () => {
    dispatch(removeAllCart())
  }

  return (
    <>
      {
        items.length !== 0 ? (
          <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {items.map((item) => (
                  <Card key={item.id} product={item} />
                ))}
            </div>
            <div className='flex flex-col items-end bg-white rounded-md my-6 p-4'>
              <h3 className='w-max text-gray-600 text-3xl font-semibold'>Total is: {items.reduce((total, product) => total + product.price, 0) } </h3>
              <button 
                className='w-max mt-2 px-4 py-2 rounded text-white duration-500  transition-transform hover:bg-rose-600 bg-rose-500'
                onClick={ removeCart }
                >
                Remove cart
              </button>
            </div>
          </>
          ) : (
            <div className='w-full'>
              <h2 className='text-center mt-32 text-3xl font-semibold'>You need add product</h2>
            </div>
          )
      }
    </>
  )
}

export default Cart;