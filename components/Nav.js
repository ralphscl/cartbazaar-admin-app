import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { HiBuildingStorefront, HiHome, HiCog6Tooth, HiArchiveBox, HiQueueList } from "react-icons/hi2";

const Nav = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <aside className=' text-white p-8 pr-0 text-[1.2rem]'>
      <a className='flex items-center p-4 gap-1 mb-4'>
        <HiBuildingStorefront />
        <span>cartbazaar</span>
      </a>

      <nav className='flex flex-col gap-2'>
        <Link 
          className={`nav__links ${pathname === '/' ? 'active' : ""}`} 
          href={'/'}
        >
          <HiHome />
          Dashboard
        </Link>
        <Link 
          className={`nav__links ${pathname.includes('/products') ? 'active' : ""}`} 
          href={'/products'}
        >
          <HiArchiveBox />
          Products
        </Link>
        <Link 
          className={`nav__links ${pathname.includes('/orders') ? 'active' : ""}`} 
          href={'/orders'}
        > 
          <HiQueueList />Orders
        </Link>
        <Link 
          className={`nav__links ${pathname.includes('/settings') ? 'active' : ""}`} 
          href={'/settings'}
        >
          <HiCog6Tooth />Settings
        </Link>
      </nav>
    </aside>
  )
}

export default Nav
