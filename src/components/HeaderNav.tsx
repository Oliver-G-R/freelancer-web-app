import Link from 'next/link';
export const HeaderNav = () => {
  return (
    <header className='fixed w-full '>
      <nav className='container m-auto p-5 flex items-center justify-between'>
        <h2 className='font-semibold text-white text-2xl'>
          CodeCrafters
        </h2>
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
