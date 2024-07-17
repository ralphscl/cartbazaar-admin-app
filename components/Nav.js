import Link from 'next/link';
import React from 'react'
import { HiBuildingStorefront, HiHome, HiCog6Tooth, HiArchiveBox, HiQueueList } from "react-icons/hi2";
const Nav = () => {
  return (
    <aside className='text-white p-4'>
      <a className='flex items-center gap-1 mb-4'>
        <HiBuildingStorefront />
        <span>cartbazaar</span>
      </a>

      <nav className='flex flex-col gap-2'>
        <Link className='nav__links' href={'/'}><HiHome />Dashboard</Link>
        <Link className='nav__links' href={'/orders'}><HiQueueList />Orders</Link>
        <Link className='nav__links' href={'/products'}><HiArchiveBox />Products</Link>
        <Link className='nav__links' href={'/settings'}><HiCog6Tooth />Settings</Link>
      </nav>
    </aside>
  )
}

export default Nav
