"use client";
import Link from 'next/link';
import { useEffect, useRef } from 'react';
export const HeaderNav = () => {
  const header = useRef<HTMLDivElement>(null)
  useEffect(() => {

    const handleScroll = () => {
       if (window.scrollY > 0) {
        header.current?.classList.add('global-gradient')
      } else {
        header.current?.classList.remove('global-gradient')
      }
    }

    handleScroll()
    window.addEventListener('scroll', () => handleScroll())

    return () => {
      window.removeEventListener('scroll', () => handleScroll())
    }
  }, [])
  return (
    <header ref={header} className='transition fixed w-full z-[5]'>
      <nav className='container m-auto p-5 flex items-center justify-between'>
        <Link href='/' className='font-semibold text-white text-2xl'>
          CodeCrafters
        </Link>
        <ul className='flex items-center gap-4'>
            <li>
              <Link className='text-white border-2 rounded-xl p-2' href="/">
                Registrarase
              </Link>
            </li>
            <li>
              <Link className='text-white border-2 rounded-xl p-2' href="/">
                Iniciar
              </Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}
