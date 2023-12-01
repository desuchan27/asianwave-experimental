"use client"

import { FC, useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import { ShoppingBag } from 'lucide-react'
import useCart from '@/hooks/useCart'
import { useRouter } from 'next/navigation'

interface NavbarActionsProps {

}

const NavbarActions: FC<NavbarActionsProps> = ({ }) => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const cart = useCart()
    const router = useRouter()

    if (!isMounted) return null

    return (
        <div className='ml-auto flex items-center gap-x-4'>
            <button
                onClick={() => router.push('/cart')}
                className='flex items-center rounded-full bg-black px-4 py-2'
            >
                <ShoppingBag
                    size={20}
                    color='white'
                />
                <span
                    className='ml-2 text-sm font-medium text-white'
                >
                    {cart.items.length}
                </span>
            </button>
        </div>
    )
}

export default NavbarActions