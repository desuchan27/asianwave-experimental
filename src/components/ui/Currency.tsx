"use client"

import { FC, useEffect, useState } from 'react'


export const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
})


interface CurrencyProps {
    value?: string | number
}

const Currency: FC<CurrencyProps> = ({
    value
}) => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    )
}

export default Currency