"use client"
import { CardProfile } from "@/components/CardProfile";
import { GridCard } from "@/components/GridCard";
import { getProjectByQuery } from "@/services/Projects";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useDebouncedCallback } from "use-debounce";

export default function Search(){

  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()
  const [projects, setProjects] = useState<any>()
  const [error, setError] = useState<any>()


  const handleChange  = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const textSearch = e.target.value

    const params = new URLSearchParams(searchParams.toString())
    if(textSearch){
      params.set('q', textSearch)
    }else{
      params.delete('q')
    }

    replace(`${pathName}?${params.toString()}`)
  }, 1000)


  useEffect(() => {
    if(searchParams.get('q')){
      getProjectByQuery(searchParams.get('q')?.toString() ?? '')
      .then(response => {
        if(!response.error){
          setProjects(response.data)
        }
        setError(response.error)
      })
    }
  }, [searchParams])

  return (
    <>
    <main className="global-container  pt-28 flex flex-col justify-center items-center">
      <div className="my-5 px-3 bg-gray-50 rounded-3xl w-[70%]">
        <div className='flex items-center gap-4 w-[83%]'>
          <HiMagnifyingGlass className="text-slate-900 text-3xl" />
          <input 
            className='outline-none py-3  w-full' 
            onChange={handleChange} 
            type="text" 
            defaultValue={searchParams.get('q')?.toString()}
            placeholder="Desarrollador web frontend" />
        </div>
      </div>

      {!error ? <GridCard title="Proyectos relacionados con tu busqueda" loading={!projects}>
        {
          projects?.map((project:any) => (
            <CardProfile
              key={project.id}
              sowHeader
              {...project}
            />
          ))

        }

      </GridCard>
      : <h1 className="text-2xl text-white">No se encontraron resultados</h1>  
    }
    </main>
    </>
  )  
}