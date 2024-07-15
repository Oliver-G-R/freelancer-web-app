"use client";
import { signOutUser } from '@/actions/auth';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export const HeaderNav = (props:any) => {
  const header = useRef<HTMLDivElement>(null)
  useEffect(() => {
    console.log(props.session)
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
  }, [props])
  
  return (
    <header ref={header} className='transition fixed w-full z-[5]'>
      <nav className='global-container m-auto py-5 flex items-center justify-between'>
        <Link href='/' className='font-semibold text-white text-2xl'>
          CodeCrafters
        </Link>

        <ul className='flex items-center gap-4'>
              {!props.session ? <>
                <li>
                  <Link className='text-white border-2 rounded-xl p-2' href="/auth/register/type-account">
                    Registrarase
                  </Link>
                </li>
                <li>
                  <Link className='text-white border-2 rounded-xl p-2' href="/auth/login">
                    Iniciar
                  </Link>
                </li>
             </>
              : <button onClick={() => signOutUser()} className='text-white border-2 rounded-xl p-2'>
                Cerrar sesion
              </button> 
            }
            {props.session?.user?.role === 'DEVELOPER' &&<li>
              <Link className='text-white border-2 rounded-xl p-2' href="/post-project">
                Postea un nuevo proyecto
              </Link>
            </li>}
        </ul>
      </nav>
    </header>
  )
}
