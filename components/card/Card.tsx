import React from 'react';
import { CatalogItemProps } from '../../types/catalog';
import StarRatings from 'react-star-ratings';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addToCart, removeFromCart } from '../../store/slices/cart';

const Card: React.FC<CatalogItemProps> = React.memo(({ product }) => {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state) => state.cart)
    const isInCart = items.some(item => item.id === product.id);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product.id));
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center cursor-pointer 
            hover:shadow-white hover:-translate-y-0.5 transition-transform transition-shadow duration-500 relative">
            <span className='absolute flex flex-col justify-end text-gray-500 right-3 top-0'>
                <StarRatings
                    rating={product.rating.rate}
                    starDimension="20px"
                    starSpacing="2px"
                />
                <span className='flex justify-end'>
                    {product.rating.count}
                </span>
            </span>
            <div className="w-full h-64 overflow-hidden flex justify-center items-center mb-4">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-auto object-contain"
                />
            </div>
            <h2 className="text-lg font-bold mt-2 text-gray-500 truncate w-full">{product.title}</h2>
            <p className="text-gray-700">Price: ${product.price}</p>
            <button 
                onClick={isInCart ? handleRemoveFromCart : handleAddToCart} 
                className={`mt-2 px-4 py-2 rounded text-white duration-500  transition-transform   ${ isInCart ? 'hover:bg-rose-600 bg-rose-500' : 'hover:bg-blue-600 bg-blue-500'}`}>
                {isInCart ? 'Remove from Cart' : 'Add to Cart' }
            </button>
        </div>
    );
});

export default Card;
