"use client"
import { ChangeEvent, FormEvent, useState } from "react";
import { FormAuth } from "../../_components/FormAuth";
import { InputForm } from "@/components/InputForm";
import { HiEnvelope, HiKey, HiUser, HiMapPin, HiCodeBracketSquare } from 'react-icons/hi2'
import { CreateDeveloper } from "@/models/User";
import { pushRevalidatePath, registerActionDeveloper } from "@/actions/auth";
import { useRouter } from "next/navigation";
export default function Developer(){

  const [inputValues, setInputValues] = useState<CreateDeveloper>({
    email: '',
    name: '',
    nameUser: '',
    city: '',
    speciality: '',
    password: '',
  })

  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const resp = await registerActionDeveloper(inputValues)
    
    if(resp?.error){
      setError(resp.error)
    }else{
      pushRevalidatePath('/post-project')
      router.push('/post-project')
    }
    
  }
  
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }
  return (
    <FormAuth
      legendTitle="Crea una cuenta como desarrollador"
      handleSubmit={handleSubmit}
      btnTitle="Crear cuenta"
    >
      <InputForm
        onChange={handleChange}
        id="email"
        type="email"
        name="email"
        placeholder="jhon@example.com"
        labelTitle="Correo"
      >
        <HiEnvelope className="text-gray-400 text-2xl" />
      </InputForm>
      <InputForm
        onChange={handleChange}
        id="nameUser"
        type="text"
        name="nameUser"
        placeholder="Jhon9283"
        labelTitle="Nombre de usuario"
      >
        <HiUser className="text-gray-400 text-2xl" />
      </InputForm>
      <InputForm
        onChange={handleChange}
        id="name"
        type="text"
        name="name"
        placeholder="Jhon Sliver"
        labelTitle="Nombre completo"
      >
        <HiUser className="text-gray-400 text-2xl" />
      </InputForm>
      <InputForm
        onChange={handleChange}
        id="city"
        type="text"
        name="city"
        placeholder="México"
        labelTitle="Ciudad"
      >
        <HiMapPin className="text-gray-400 text-2xl" />
      </InputForm>
      <InputForm
        onChange={handleChange}
        id="speciality"
        type="text"
        name="speciality"
        placeholder="Desarrolo web.."
        labelTitle="Especialidad"
      >
        <HiCodeBracketSquare className="text-gray-400 text-2xl" />
      </InputForm>
      <InputForm
        onChange={handleChange}
        id="password"
        type="password"
        name="password"
        placeholder="******"
        labelTitle="Contraseña"
      >
        <HiKey className="text-gray-400 text-2xl" />
      </InputForm>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </FormAuth>
  )
}