"use client"
import { HiUserCircle, HiEnvelope, HiCheckCircle, HiClock, HiMapPin   } from 'react-icons/hi2'

import Link from "next/link"
import { useEffect, useState } from 'react';
import { GetProjectById } from "@/services/Projects";
import { Project } from '@/models/Project';
import { getDeveloperByProjectId } from '@/services/Developers';
import { DeveloperResponde } from '@/models/Response';

interface DetailProps  {
  params: {
    id: string
  }
}
export default function Detail({params}:DetailProps) {
  const [detailProject, setDetailProject] = useState<Project>()
  const [developer, setDeveloper] = useState<DeveloperResponde>()
  const [input, setInput] = useState<{
    name: string,
    email: string,
    description: string
  }>({
    name: '',
    email: '',
    description: ''
  })

  useEffect(() => {
    GetProjectById(params.id)
    .then(response => {
      setDetailProject(response.data)
    })
    
    getDeveloperByProjectId(params.id)
    .then(response => {
      setDeveloper(response.data)
    })
  }, [params.id])


  const handleSendProposal = () => {
    // Send
    window.open(`mailto:${developer?.user.email}?subject=Propuesta de trabajo - ${input.name}&body=${input.description}`)

  }


  return (
    <>
      <main className="global-container m-auto  py-10 pt-28 grid grid-cols-[69%,1fr] gap-4 max-xl:grid-cols-1">
       <article className="rounded-xl shadow-lg bg-white px-10 py-5  h-auto  max-xl:order-2">
          <header>
            <div className="flex items-center justify-between flex-wrap gap-5 max-[784px]:justify-center">
              <h1 className=" font-bold text-4xl">
                {detailProject?.name}
              </h1>
              <div className="flex flex-col">
                <span className="font-bold text-3xl">
                  $ {detailProject?.price}
                </span>
                <span className="ml-auto">
                  Pago al entregar
                </span>
              </div>
             
            </div>
          </header>


          <div className="flex items-center gap-2 my-4">
              <p  className="font-semibold">Fecha de publicacion:</p>
              <span className="bg-[--color-secondary] p-1 text-white text-sm rounded-xl w-24 text-center font-semibold">
                {
                  new Date(detailProject?.created_at).toLocaleDateString()
                }
              </span>
          </div>

          <p>
              {
                detailProject?.description
              }
          </p>

          <div className="grid grid-cols-[50%,1fr] mt-4 gap-4 max-lg:grid-cols-1">
            <section className="">
              <form>
                <fieldset className="mb-8">
                  <legend className="text-xl font-semibold mb-2">
                    Comunicate con el desarrollador para una propuesta
                  </legend>
  
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="font-semibold" htmlFor="nameClient">
                        Tu nombre
                      </label>
                      <div className="hover:border-purple-300 border-[1.5px]  transition border-gray-400 rounded-md overflow-hidden flex items-center px-3">
                        <HiUserCircle className="text-gray-400 text-2xl" />
                        <input 
                          className="w-full outline-0 px-4 py-2"
                          type="text" 
                          name='name'
                          onChange={(e) => setInput({...input, name: e.target.value})}
                          id="nameClient" 
                          placeholder="Jhon" 
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-semibold" htmlFor="email">
                        Ingresa tu Correo electronico
                      </label>
                      <div className="hover:border-purple-300 border-[1.5px]  transition border-gray-400 rounded-md overflow-hidden flex items-center px-3">
                        <HiEnvelope className="text-gray-400 text-2xl" />
                        <input 
                          onChange={(e) => setInput({...input, email: e.target.value})}
                          className="w-full outline-0 px-4 py-2 "
                          type="email" 
                          name='email'
                          id="email" 
                          placeholder="jhon@codecrafters.com" 
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-semibold" htmlFor="description">
                        Deja tu mensaje
                      </label>
                      <div className="hover:border-purple-300 border-[1.5px]  transition border-gray-400 rounded-md overflow-hidden">
                        <textarea 
                          name='description'
                          onChange={(e) => setInput({...input, description: e.target.value})}
                          placeholder="Hola, me gustaria saber mas sobre tu propuesta de trabajo..."
                          className="w-full outline-0 px-4 py-2 resize-none h-32"
                          id="description">
  
                        </textarea>
                      </div>
                    </div>
                  </div>
                </fieldset>
  
                <button onClick={handleSendProposal} className="font-semibold text-xl text-center  border-[1.3px] border-gray-400 rounded-md w-full p-2">
                  Enviar propuesta
                </button>
              </form>
            </section>
  
            <section className="">
              <h3 className="text-xl font-semibold">
                ¿Preguntas sobre el proyecto?
              </h3>
              <p className="my-4">
                Es importante para nosotros que te sientas seguro al momento de realizar una propuesta, por eso te recomendamos que te pongas en contacto con el desarrollador para aclarar tus dudas.
              </p>

              <h4 className="font-semibold text-xl">
                Cosas que debes saber antes de enviar una propuesta o duda
              </h4>

              <ul className="my-4">
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-gray-400 text-3xl" />
                  Se claro con lo que necesitas
                </li>

                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-gray-400 text-3xl" />
                  Asegurate de que el desarrollador tenga las habilidades necesarias para tu proyecto
                </li>

                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-gray-400 text-3xl" />
                  Se respetuoso con el desarrollador y no olvides que esta trabajando para ti
                </li>

                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-gray-400 text-3xl" />
                  Deja un correo electronico valido para que el desarrollador pueda contactarte
                </li>
              </ul>
            </section>

          </div>
       </article>

        <aside className="rounded-xl shadow-lg bg-white p-5  h-[80vh] flex flex-col items-center max-xl:order-1 max-xl:h-auto">

            <picture className="overflow-hidden rounded-full h-[150px] w-[150px] mb-4">
              <img className="object-cover object-center h-full w-full" src={
                developer?.user.avatar
              } alt="Avatar" />

            </picture>
            <h2 className='font-semibold text-xl my-4'>
              {developer?.user.name}
            </h2>
          <Link className="text-center font-semibold w-full rounded-md p-2 bg-[--color-secondary] text-white transition hover:opacity-95" href={`/profile/${developer?.user.nameUser}`}>
            Ver perfil
          </Link>

          <article className="flex flex-col gap-4 border-t-[1.3px] border-gray-400 w-full mt-4">
            <section >
              <h3 className="font-bold text-xl my-4">
                Sobre el desarrollador
              </h3>
  
              <p className="flex flex-wrap items-center gap-2 text-lg ">
                <HiMapPin className="text-2xl text-gray-400" />
                Desarrollando desde: {developer?.city}
              </p>
              <p className="flex flex-wrap items-center gap-2 text-lg ">
                <HiClock className="text-2xl text-gray-400" />
                Miebro desde: <span className="font-semibold">
                  {new Date(developer?.user.created_at).toLocaleDateString()}
                </span>
              </p>
              <p className="flex flex-wrap items-center gap-2 text-lg ">
                <HiEnvelope className="text-2xl text-gray-400" />
                Correo electronico: <span className="font-semibold">{developer?.user.email}</span>
              </p>
            </section>
            {/* <section>
              <h3 className="font-bold text-xl">
                Otros trabajos del perfil
              </h3>
            </section> */}
          </article>
        </aside>


      </main>
    </>
  )
}