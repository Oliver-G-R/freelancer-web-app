import { HiMagnifyingGlass  } from 'react-icons/hi2'
export const Search = () => {
  return (
    <div className="flex flex-col items-center h-[400px] justify-center">
      <h1 className="text-4xl text-center mb-10 text-white font-semibold">
        Busca desarrolladores para tu próximo proyecto
      </h1>
      <div className="my-5 flex items-center justify-between px-3 bg-gray-50 rounded-3xl w-[70%]">
        <div className='flex items-center gap-4 w-[83%]'>
          <HiMagnifyingGlass className="text-slate-900 text-3xl" />
          <input className='outline-none py-3  w-full' type="text" placeholder="Desarrollador web frontend" />
        </div>
        <button className='bg-[--color-secondary] text-white p-2 w-[100px] rounded-2xl'>
          Bscar
        </button>
      </div>
    </div>
  )
}
