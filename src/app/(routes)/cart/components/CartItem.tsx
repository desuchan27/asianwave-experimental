"use client"

import { Product } from '@/types'
import Image from 'next/image'
import { FC } from 'react'


interface CartItemProps {
    data: Product
}

const CartItem: FC<CartItemProps> = ({
    data
}) => {
  return (
    <li className='flex py-6 border-b'>
        <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
            <Image 
                fill
                src={data?.images[0]?.url}
                alt=''
                className='object-cover object-center'
            />
        </div>

    </li>
  )
}

export default CartItem