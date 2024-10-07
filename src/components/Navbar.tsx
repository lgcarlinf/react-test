import logo from '../public/logo.png'
import account from '../public/account.png'
import { Link, useLocation } from '@tanstack/react-router'
import { useState } from 'react'
import { MenuSVG } from './icons/menu.icon'

export const Navbar = () => {
    const path = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

  return (
    <nav className='flex justify-between py-4 px-4 md:px-36 items-center'>
    <div className='flex items-center gap-4'>
        <button onClick={toggleMenu} className='md:hidden'>
          <MenuSVG/>
        </button>
        <Link to='/'>
            <img src={logo} alt='logo' width={96} height={30} />
        </Link>
    </div>

    <div className='hidden md:flex gap-9 items-center'>
        <Link to='/' className={`${path.pathname === '/' ? "text-[#00A76F]" : ""}`}>Home</Link>
        <Link to='/favoritos' className={`${path.pathname === '/favoritos' ? "text-[#00A76F]" : ""}`}>Favoritos</Link>
        <img className='rounded-full p-1 border border-green-600' src={account} alt='account' width={40} height={40} />
    </div>

    {isMenuOpen && (
        <div className='absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50'>
            <Link to='/' className={`block py-2 px-4 ${path.pathname === '/' ? "text-[#00A76F]" : ""}`}>Home</Link>
            <Link to='/favoritos' className={`block py-2 px-4 ${path.pathname === '/favoritos' ? "text-[#00A76F]" : ""}`}>Favoritos</Link>
        </div>
    )}

    <img className='rounded-full p-1 border border-green-600 md:hidden' src={account} alt='account' width={40} height={40} />
</nav>
  )
}
