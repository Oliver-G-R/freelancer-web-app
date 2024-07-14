
"use client"
import { postProject } from "@/actions/auth"
import { InputForm } from "@/components/InputForm"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"
import { HiBanknotes } from "react-icons/hi2"

export const SectionForm = () => {

  const router = useRouter()
  
  const [inputValues, setInputValues] = useState<{
    name: string,
    description: string,
    price: number
  }>({
    name: '',
    description: '',
    price: 0
  })


  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })

  }
  
  
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    if(!inputValues.name || !inputValues.description || !inputValues.price) return

    postProject(inputValues)
    .then(resp => {
      router.push('/')
    })
  }


  return (
    

        <section className="rounded-sm p-5 shadow-lg bg-white w-[800px] mt-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <InputForm
              value={inputValues.name}
              onChange={handleChange}
              labelTitle="Nombre"
              type="text"
              name="name"
              id="name"
              placeholder="Desarrollo de una pagina web"
            />
              

            <label className="font-semibold" htmlFor="description">
              Descripcion
            </label>
             <div className="hover:border-purple-300 border-[1.5px]  transition border-gray-400 rounded-md overflow-hidden">
              <textarea 
                value={inputValues.description}
                name="description"
                onChange={handleChange}
                placeholder="Hola, me gustaria saber mas sobre tu propuesta de trabajo..."
                className="w-full outline-0 px-4 py-2 resize-none h-32"
                id="description">

              </textarea>
            </div>
            <InputForm
              value={inputValues.price}
              onChange={handleChange}
              labelTitle="Precio"
              type="number"
              id="price"
              name="price"
              placeholder="0"
            >
                <HiBanknotes className="text-gray-400 text-2xl" />
            </InputForm>  
            
            <button className="font-semibold text-xl text-center  border-[1.3px] border-gray-400 rounded-md w-full p-2">
              Crear
            </button>
            

          </form>
        </section>
  )
}
