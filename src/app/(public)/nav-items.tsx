'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const menuItems = [
    {
        title: 'Home',
        href: '#'
    },
    {
        title: 'Service',
        href: '#',
        authRequired: true
    },
    {
        title: 'Product',
        href: '#',
        authRequired: true
    },
    {
        title: 'About us',
        href: '#',
        authRequired: true
    }
]

export default function NavItems({ className }: { className?: string }) {
    const [isAuth, setIsAuth] = useState(false)
    return menuItems.map((item) => {
        if (item.authRequired === false && isAuth || item.authRequired === true && !isAuth) return null
        return (
            <Link href={item.href} key={item.href} className={className}>
                {item.title}
            </Link>
        )
    })
}
