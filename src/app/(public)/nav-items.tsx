import Link from 'next/link'

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

    return menuItems.map((item) => {
        return (
            <Link href={item.href} key={item.href} className={className}>
                {item.title}
            </Link>
        )
    })
}
