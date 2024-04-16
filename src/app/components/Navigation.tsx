'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav>
        <ul>
            <li>
                <img src="/logo.jpg" alt="Logo" className='navbar-logo'></img>
            </li>
            <li>
            <Link href='/' className={pathname == '/' ? 'active' : ''}>
                Home
            </Link>
            </li>
            <li>
            <Link href='/admin' className={pathname == '/admin' ? 'active' : ''}>
                Admin Dashboard
            </Link>
            </li>
            <li className="cart-right">
            <Link href='/cart' className={pathname == '/cart' ? 'active' : ''}>
                Your Cart
            </Link>
            </li>
            </ul>
        </nav>
    );
}

export default Navigation;