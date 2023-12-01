"use client"

import Button from '@/components/ui/Button'
import Currency from '@/components/ui/Currency'
import { FC } from 'react'

interface SummaryProps {
  
}

const Summary: FC<SummaryProps> = ({}) => {
  return (
    <div className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
        <h2 className='text-lg font-medium text-gray-900'>
            Order Summary
        </h2>
        <div className='mt-6 space-y-4'>
            <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
                <div className='text-base font-medium text-gray-900'>
                    Order Total
                </div>
                <Currency value={0} />
            </div>
        </div>
        <Button>
            Checkout
        </Button>
    </div>
  )
}

export default Summary